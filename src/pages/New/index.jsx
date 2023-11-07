import { Container, Form, Tags} from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { BsArrowLeft } from "react-icons/bs"
import { TextArea } from "../../components/TextArea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">
              <BsArrowLeft />
              Voltar
            </a>

            <h1>Novo filme</h1>
          </header>

          <section>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </section>
          
          <TextArea placeholder="Observações" />

          <h2>Marcadores</h2>

          <Tags>
            <MovieItem value="Terror" />
            <MovieItem isNew placeholder="Novo marcador" />
          </Tags>

          <section>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </section>
        </Form>
      </main>
    </Container>
  )
}