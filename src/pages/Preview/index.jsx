import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Tags } from "../../components/Tags"

export function Preview() {
  return(
    <Container>
      <Header />
      <main>

        <Tags title="Ficção Cientifica" />
        <Tags title="Drama" />
        <Tags title="Família" />
      </main>
      
    </Container>
  )
}