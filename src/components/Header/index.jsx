import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom"

import { Container, Profile } from "./styles"

export function Header() {
  const [ search, setSearch ] = useState("")

  const { signOut, user, fetchMovieNotes } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13) {
      if(search === "") {
        return
      }

      fetchMovieNotes(search)
      navigate("/search")
    } else {
      return
    }
  }

  return(
    <Container>
      <Link to="/">RocketMovies</Link>

      <input 
        type="text" 
        placeholder="Pesquisar pelo título"
        onChange={e => setSearch(e.target.value)} 
        onKeyDown={handleKeyDown}
      />

      <Profile>
        <div>
          <Link to="/profile" >
            <strong>{user.name}</strong>
          </Link>
          <button onClick={handleSignOut}>sair</button>
        </div>
      
        <img 
          src={avatarUrl} 
          alt={user.name} 
        />
      </Profile>
    </Container>
  )
}