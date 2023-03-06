import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  gap: 1rem;

  padding: .5rem;

  font-size: 1.2rem;

  border: 1px solid ${((props) => props.theme.colors.mediumGray)};
  border-radius: 3px;

  input[type="checkbox"] {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 10px; 
  }

  input[type="checkbox"]:checked ~ span {
    text-decoration: line-through;
  }

  span {
    flex: 1;
    text-align: justify;
  }

`
export const Actions = styled.div`
  display: flex;
  gap: .2rem;
`
export const Button = styled.button`
   width: 1.6rem;
    height: 1.6rem;

    line-height: 0;
    background: 0;
    
    border: 0;
    border-radius: 1px;

    &:not(:disabled):hover{
       backdrop-filter: brightness(95%);
       cursor: pointer;
     }
`
export const ButtonEdit = styled(Button)`
   &:not(:disabled):hover {
      color: ${((props) => props.theme.colors.mediumBlue)};
    }
`
export const ButtonDelete = styled(Button)`
   &:not(:disabled):hover {
      color: ${((props) => props.theme.colors.danger)};
    }
`
export const EditInput = styled.input`
   flex: 1;
    border: none;

    font-size:1.2rem;

    &:focus {
      box-shadow: none;
    }
`

export const ButtonSave = styled(Button)`
  &:hover{
    color: ${((props) => props.theme.colors.success)};
  }
  `
export const ButtonCancel = styled(Button)`
   &:hover{
      color: ${((props) => props.theme.colors.danger)};
    }
`


