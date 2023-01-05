import { ListItem, Actions, ButtonEdit, ButtonDelete } from "./styles"
import { Pencil, Trash } from "phosphor-react"

export function RegisterItem({ register, content, onHandleEditClick, onDeleteRegister, handleRegisterCompletion, hasCompletion = false }) {
  return (
    <ListItem>
      {hasCompletion ? <input type="checkbox" title="Marcar tarefa como concluída" defaultChecked={register.isComplete} onClick={() => handleRegisterCompletion(register.id)} /> : ''}
      <span>{content}</span>
      <Actions>
        <ButtonEdit onClick={() => onHandleEditClick(register.id)} title="Editar">
          <Pencil size={16} />
        </ButtonEdit>
        <ButtonDelete onClick={() => onDeleteRegister(register.id)} title="Deletar">
          <Trash size={16} />
        </ButtonDelete>
      </Actions>
    </ListItem>
  )
}