import { BoxRegister } from "./styles"
import { Trash } from "phosphor-react"

export function RegisterItem({ content }) {
  return (
    <BoxRegister>
      <input type="radio" aria-label="Marcar tarefa como concluída" />
      <span>{content}</span>
      <button aria-label="Deletar tarefa">
        <Trash size={16} ></Trash>
      </button>
    </BoxRegister>
  )
}