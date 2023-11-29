import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Container, Profile } from "./styles"

export function Header() {
  const { signOut } = useAuth()

  return(
    <Container>
      <h1>RocketMovies</h1>

      <input type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <Link to="/profile" >
            <strong>Ana Paula</strong>
          </Link>
          <button onClick={signOut}>sair</button>
        </div>
      
        <img 
          src="https://github.com/Nahblue.png" 
          alt="imagem do usuário" 
        />
      </Profile>
    </Container>
  )
}