import { ListItem, Actions, ButtonEdit, ButtonDelete, ButtonSave, ButtonCancel } from "./styles"
import { Pencil, Trash, X, Check } from "phosphor-react"

export function RegisterItem({
  setSelectedId,
  selectedId,
  register,
  content,
  onDeleteRegister,
  handleRegisterCompletion,
  hasCompletion = false,
  setEditedRegister,
  editedRegister,
  onHandleSubmitEditedRegister
}) {

  return (
    selectedId === register.id ?
      <ListItem>
        {hasCompletion ?
          <input
            type="checkbox"
            title="Marcar tarefa como concluída"
            defaultChecked={register.isComplete}
            onClick={() => handleRegisterCompletion(register.id)}
          />
          : ''}
        <input
          type="text"
          value={editedRegister}
          onChange={(event) => setEditedRegister(event.target.value)}
        />
        <Actions>
          <ButtonSave
            onClick={() => {
              onHandleSubmitEditedRegister(register.id);
              setSelectedId(0);
            }}
            title="Salvar">
            <Check size={16} />
          </ButtonSave>
          <ButtonCancel
            onClick={() => setSelectedId(0)}
            title="Cancelar">
            <X size={16} />
          </ButtonCancel>
        </Actions>
      </ListItem>
      :
      <ListItem>
        {hasCompletion ?
          <input
            type="checkbox"
            title="Marcar tarefa como concluída"
            defaultChecked={register.isComplete}
            onClick={() => handleRegisterCompletion(register.id)}
          /> : ''}
        <span >{content}</span>
        <Actions>
          <ButtonEdit
            onClick={() => {
              setEditedRegister(content)
              setSelectedId(register.id)
            }}
            title="Editar">
            <Pencil size={16} />
          </ButtonEdit>
          <ButtonDelete
            onClick={() => onDeleteRegister(register.id)}
            title="Deletar">
            <Trash size={16} />
          </ButtonDelete>
        </Actions>
      </ListItem>

  )
}