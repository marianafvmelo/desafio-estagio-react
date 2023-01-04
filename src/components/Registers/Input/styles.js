import styled from "styled-components";

export const Input = styled.input`
  flex: 1;
  background: transparent;
  height: 2.8rem;

  border: 1px solid ${((props) => props.theme.colors.mediumGray)};
  border-radius: 3px;

  font-size: 1.2rem;
  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors.darkBlue};
  }
`