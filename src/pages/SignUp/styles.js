import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 163px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.CORAL_100};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > a {
    text-align: center;
    font-size: 16px;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.CORAL_100};

    svg {
      margin-right: 8px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5) contrast(0.8);
`