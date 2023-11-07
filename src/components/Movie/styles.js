import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.CORAL_900};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 24px;
  text-align: left;


  > h1 {
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    height: 40px;
    overflow-y: hidden;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 19px;
    margin: 15px 0;
    text-align: justify;

  }

  > footer {
    width: 100%;
    display: flex;
    
    > span {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`

export const Stars = styled.div`
  margin-top: 8px;

  > svg {
    font-size: 12px;
  }
`