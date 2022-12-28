import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 4.8rem;

  label {
    display: block;
    margin-bottom: .8rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content:center;

    width: 2.4rem;

    background: 0;
    border: 1px solid ${((props) => props.theme.colors.mediumGray)};

    border-radius: 3px;
    
    cursor: pointer;
  }
`
export const InputContainer = styled.div`
  display: flex;
  gap: .2rem;
`

export const BaseInput = styled.input`
  flex: 1;
  background: transparent;
  height: 2.5rem;

  border: 1px solid ${((props) => props.theme.colors.mediumGray)};
  border-radius: 3px;

  font-size: 1.2rem;
  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
`