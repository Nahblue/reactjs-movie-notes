import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  padding: 50px 123px;
  overflow-y: auto;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;

    h1 {
      font-weight: 400;
      font-size: 32px;
    }
  }
`

export const NewMovie = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 32px;

  background-color: ${({ theme }) => theme.COLORS.CORAL_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-size: 16px;

  > svg {
    margin-right: 8px;
  }

`