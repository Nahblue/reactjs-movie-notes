import { Container } from "./styles"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export function Star({rating}) {
  let ratingStars = [];
  const maxStars = 5;

  for (let i = 0; i < maxStars; i++) {
    ratingStars = [...ratingStars, i < rating];
  };

  return(
    <Container>
      {
        ratingStars.map((star, index) => (
          <li key={String(index)}>
            {star ? <AiFillStar /> : <AiOutlineStar />}
          </li>
        ))
      }     
    </Container>
  )
}