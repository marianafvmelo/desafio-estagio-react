import styled from "styled-components"

export const BoxRegister = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center ;
  gap: 2.4rem;

  padding: .8rem;

  font-size: 1.2rem;

  background: ${(props) => props.theme.colors.lighterGray};
  border: 1px solid ${((props) => props.theme.colors.mediumGray)};
  border-radius: 3px;

  span {
    flex: 1;
  }

  button {
    background: 0;
    border: 0;
    line-height: 0;
    cursor: pointer;

    border-radius: 1px;

    &:hover{
      color: ${((props) => props.theme.colors.danger)};
      backdrop-filter: brightness(95%);
    }
  }
`