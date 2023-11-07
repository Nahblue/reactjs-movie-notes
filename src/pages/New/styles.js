import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 1137px;
  margin: 40px auto;

  > header {
    margin-bottom: 40px;

    a {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.CORAL_100};

      svg {
        margin-right: 8px;
      }
    }

    h1 {
      margin-top: 24px;
      font-size: 36px;
    }

  }

  > section {
    display: flex;
    gap: 40px;

    margin-bottom: 40px;

    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.CORAL_100};
    }
  }

  > h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 24px;
  }

`

export const Tags = styled.div`
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  margin-bottom: 40px;
`