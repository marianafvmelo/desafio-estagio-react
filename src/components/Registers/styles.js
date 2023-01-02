import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 4.8rem 4.8rem 1rem 4.8rem;
  width: 60rem;
  max-width: 90%;

  label {
    display: block;
    margin-bottom: .8rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content:center;

    width: 2.4rem;

    background: ${((props) => props.theme.colors.mediumBlue)};
    border: 1px solid ${((props) => props.theme.colors.mediumGray)};
    
    border-radius: 3px;    
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    &:not(:disabled):hover {
      background: ${((props) => props.theme.colors.darkBlue)};
      cursor: pointer;
    }

    &:not(:disabled):focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.colors.mediumBlue};
    }

  }
`
export const AddRegisterContainer = styled.div`
  display: flex;
  gap: .2rem;
`
export const BoxRegisters = styled.div`
  display: flex;
  flex-direction: column;

  gap: .4rem;

  font-size: 1.4rem;

  width: 60rem;
  padding: 0 4.8rem 0 4.8rem;
`