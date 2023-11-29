import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 123px;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.CORAL_100};
  }

  > input {
    width: 630px;
    height: 56px;

    padding: 24px 19px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 0;
    border-radius: 10px;

    &:placeholder {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  text-align: right;

  > div {
    display: flex;
    flex-direction: column;

    margin-right: 16px;
    line-height: 24px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background: none;
      border: none;
      text-align: right;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`