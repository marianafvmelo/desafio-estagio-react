import { ListItem, Actions, ButtonEdit, ButtonDelete } from "./styles"
import { Pencil, Trash } from "phosphor-react"

export function RegisterItem({ register, content, onEditClick, onDeleteRegister, handleRegisterCompletion, hasCompletion = false }) {
  return (
    <ListItem>
      {hasCompletion ? <input type="checkbox" title="Marcar tarefa como concluída" defaultChecked={register.isComplete} onClick={() => handleRegisterCompletion(register.id)} /> : ''}
      <span>{content}</span>
      <Actions>
        <ButtonEdit /*onClick={() => onEditClick(register)}*/>
          <Pencil size={16} />
        </ButtonEdit>
        <ButtonDelete onClick={() => onDeleteRegister(register.id)} title="Deletar tarefa">
          <Trash size={16} />
        </ButtonDelete>
      </Actions>
    </ListItem>
  )
}