import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 10px;  
  color: ${({ theme }) => theme.COLORS.CORAL_100};

  > li {
    display: flex;
  }
`