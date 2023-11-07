import { Container, Stars } from "./styles"

import { Star } from "../Star"
import { Tag } from "../Tag"

export function Movie({ data, ...rest}) {
  return(
    <Container>
      <h1>{data.title}</h1>

      <Stars>
        <Star />
      </Stars>

      <p>{data.text}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}