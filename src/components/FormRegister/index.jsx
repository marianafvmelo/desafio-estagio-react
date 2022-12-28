import { FormContainer, InputContainer, BaseInput } from "./styles";
import { Plus } from "phosphor-react";

export function FormRegister() {
  return (
    <FormContainer>
      <label htmlFor="goals">Metas:</label>
      <InputContainer>
        <BaseInput type="text" id="goals" placeholder="Adicionar metas" />
        <button>
          <Plus size={12} />
        </button>
      </InputContainer>
    </FormContainer>
  )
}