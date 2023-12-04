import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { Container, Profile } from "./styles"

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <h1>RocketMovies</h1>

      <input type="text" placeholder="Pesquisar pelo título" />

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