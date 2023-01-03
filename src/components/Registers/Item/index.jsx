import { BoxRegister } from "./styles"
import { Trash } from "phosphor-react"

export function RegisterItem({ register, content, onDeleteRegister, handleRegisterCompletion }) {
  return (
    <BoxRegister>
      <input type="checkbox" title="Marcar tarefa como concluída" defaultChecked={register.isComplete} onClick={() => handleRegisterCompletion(register.id)} />
      <span>{content}</span>
      <button onClick={() => onDeleteRegister(register.id)} title="Deletar tarefa">
        <Trash size={16} ></Trash>
      </button>
    </BoxRegister>
  )
}