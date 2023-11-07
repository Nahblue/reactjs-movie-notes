import styled from "styled-components"

export const Container = styled.span`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.CORAL_900};

`