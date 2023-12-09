import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import { Container, Content, NewMovie } from "./styles"
import { AiOutlinePlus } from "react-icons/ai"

import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

export function Home() {
  const [ notes, setNotes ] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [])
  
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
          notes.map(note => (
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