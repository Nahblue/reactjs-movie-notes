import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import { Container, Profile } from "./styles"

export function Header() {
  const [ search, setSearch ] = useState("")

  const { signOut, user, fetchMovieNotes } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(()=>{
    fetchMovieNotes(search)
  }, [search])


  return(
    <Container>
      <h1>RocketMovies</h1>

      <input 
        type="text" 
        placeholder="Pesquisar pelo título"
        onChange={e => setSearch(e.target.value)} 
      />

      <Profile>
        <div>
          <Link to="/profile" >
            <strong>{user.name}</strong>
          </Link>
          <button onClick={signOut}>sair</button>
        </div>
      
        <img 
          src={avatarUrl} 
          alt={user.name} 
        />
      </Profile>
    </Container>
  )
}