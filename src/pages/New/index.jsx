import { useState } from "react"
import { api } from "../../services/api"

import { Container, Form, Tags} from "./styles"

import { Link, useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

export function New(){
  const [ title, setTitle] = useState("")
  const [ rating, setRating ] = useState("")
  const [ description, setDescription ] = useState("")

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title || !rating) {
      return alert("Digite o título e a nota do filme.")
    }

    if (rating > 5 || !Number.isInteger(rating)) {
      return alert("Digite uma nota de 0 à 5.")
    }

    if(newTag) {
      return alert("Existem tags não adicionadas. Clique em adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags,
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <button onClick={handleBack}>
              <BsArrowLeft />
              Voltar
            </button>

            <h1>Novo filme</h1>
          </header>

          <section>
            <Input 
              placeholder="Título" 
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              type="number"
              placeholder="Sua nota(de 0 a 5)" 
              onChange={e => setRating(Number(e.target.value))}
            />
          </section>
          
          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)} 
          />

          <h2>Marcadores</h2>

          <Tags>
            {
              tags.map((tag, index) => (
                <MovieItem 
                  key={String(index)}
                  value={tag} 
                  onClick={() => handleRemoveTag(tag)}
                />

              ))
            }

            <MovieItem 
              isNew 
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag} 
            />
          </Tags>

          <Button title="Salvar alterações" onClick={handleNewNote} />

        </Form>
      </main>
    </Container>
  )
}