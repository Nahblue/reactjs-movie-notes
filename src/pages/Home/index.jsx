import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

import { Container, Content, NewMovie } from "./styles"
import { AiOutlinePlus } from "react-icons/ai"

import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

export function Home() {
  const { searchNotes } = useAuth()

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  return(
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Meus filmes</h1>
          
          <NewMovie to="/new" >
            <AiOutlinePlus />
            Adicionar filme
          </NewMovie>
        </div>

        {
          searchNotes.map(note => (
            <Movie 
              key={note.id}
              onClick={() => handlePreview(note.id)}
              data={
              { 
                title: note.title, 
                rating: note.rating,
                text: note.description,
                tags: note.tags
              }}
            />
          ))
        }
        

      </Content>
    </Container>
  )
}