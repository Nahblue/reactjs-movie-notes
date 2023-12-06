import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai"

import { Container, Content, Title, Autor, Tags, Stars } from "./styles"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Star } from "../../components/Star"
import { Tag } from "../../components/Tag"

export function Preview() {
  const [ data, setData ] = useState(null)
  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
        <Content>
          <section>
            <a onClick={handleBack}>
            <BsArrowLeft />
            <span>Voltar</span>
          </a>

          <button onClick={handleRemove}>Excluir nota</button>
          </section>
          <Title>
            <h1>{data.title}</h1> 
            
            <Stars>
              <Star rating={data.rating} />
            </Stars>

          </Title>

          
          
          <Autor>
            <img src={avatarUrl} alt={user.name} />
            <span>{user.name}</span>

            <AiOutlineClockCircle />
            <span>{data.created_at}</span>
          </Autor>

          {
            data.tags &&
            <Tags>
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name} 
                  />
                ))
              }
            </Tags>
          }

          

          <p>{data.description}</p>
        </Content>
      </main>
      }
      
    </Container>
  )
}
