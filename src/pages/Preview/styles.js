import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
  }
`
export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > section {
    display: flex;
    justify-content: space-between;

    a {
      color: ${({ theme }) => theme.COLORS.CORAL_100};
      display: flex;
      gap: 8px;
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.CORAL_100};
    }
  }


  > p {
    text-align: justify;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 24PX 0;

  > h1 {
    font-size: 36px;
  }
`

export const Stars = styled.div`
  margin-left: 19px;

  > svg {
  font-size: 24px;
  }
`

export const Autor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  > img {
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.CORAL_100};
    margin-left: 5px;
  }
`

export const Tags = styled.div`
  margin: 40px 0;
`