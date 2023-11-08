import { Link } from "react-router-dom"
import { Container, Profile } from "./styles"

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <input type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <Link to="/profile" >
            <strong>Ana Paula</strong>
          </Link>
          <a href="#">sair</a>
        </div>
      
        <img 
          src="https://github.com/Nahblue.png" 
          alt="imagem do usuário" 
        />
      </Profile>
    </Container>
  )
}