import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [ data, setData ] = useState("")
  const [ notes, setNotes] = useState([])

  async function signIn({ email, password }) {
    try{
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@movienotes:user", JSON.stringify(user))
      localStorage.setItem("@movienotes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@movienotes:token")
    localStorage.removeItem("@movienotes:user")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try{
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@movienotes:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado!")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  async function fetchMovieNotes(search){
    const response = await api.get(`/notes?title=${search}`)
    setNotes(response.data)
  }

  useEffect(() => {
    const token = localStorage.getItem("@movienotes:token")
    const user = localStorage.getItem("@movienotes:user")

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      updateProfile,
      fetchMovieNotes,
      user: data.user,
      filteredNotes: notes
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }