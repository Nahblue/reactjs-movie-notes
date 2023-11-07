import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  border: ${({ theme, $isnew }) => $isnew ? `4px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.CORAL_100};
    }
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.GRAY_300};
    }
  }
`