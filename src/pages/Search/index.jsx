
import { useAuth } from "../../hooks/auth"

import { useNavigate } from "react-router-dom"
import { FaFaceSadTear } from "react-icons/fa6"
import { BsArrowLeft } from "react-icons/bs"

import { Container, Content, Section } from "./styles"


import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

export function Search() {
  const { filteredNotes } = useAuth()

  const checkedFilteredNotes = filteredNotes.length !== 0

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  function handleBack() {
    navigate("/")
  }
  
  return(
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Resultados</h1>

          <button onClick={handleBack}>
              <BsArrowLeft />
              <span>Voltar</span>
          </button>
        </div>

        {
          checkedFilteredNotes &&
          filteredNotes.map(note => (
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

        {
          !checkedFilteredNotes && 
          <Section>
            <FaFaceSadTear />
            <span>Nenhuma anotação encontrada.</span>
          </Section>
        }
        

      </Content>
    </Container>
  )
}