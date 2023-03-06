import styled from "styled-components";

export const MainContent = styled.div`
  width: 60rem;
  max-width: 90%;
  padding: 4.8rem 4.8rem .6rem 4.8rem;
`

export const FormContainer = styled.div`

  label {
    display: block;
    margin-bottom: .8rem;
  }

  input {
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
  }

  button {
    display: flex;
    align-items: center;
    justify-content:center;

    width: 2.6rem;

    background: ${((props) => props.theme.colors.mediumBlue)};
    border: 1px solid ${((props) => props.theme.colors.mediumGray)};
    
    border-radius: 3px;    
    
    &:not(:disabled):hover {
      background: ${((props) => props.theme.colors.darkBlue)};
      cursor: pointer;
    }

    &:not(:disabled):focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.colors.darkBlue};
    }
  }
`
export const AddRegisterContainer = styled.div`
  display: flex;
  gap: .2rem;
  margin-bottom: .6rem;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  gap: .4rem;
`