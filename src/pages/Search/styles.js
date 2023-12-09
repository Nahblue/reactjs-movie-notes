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

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.CORAL_100};
      display: flex;
      gap: 8px;
    }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

  gap: 40px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > svg {
    font-size: 200px;
  }

  > span {
    font-size: 24px;
  }
`