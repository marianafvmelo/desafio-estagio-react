import { useState, useEffect } from "react";
import { FormContainer, AddRegisterContainer, InputAddRegister, BoxRegisters } from "./styles";
import { RegisterItem } from '../RegisterItem'
import { Plus } from "phosphor-react";

export function Registers({ labelText, placeholderText, inputId }) {

  const [registers, setRegisters] = useState([])

  const [newRegister, setNewRegister] = useState('')


  const handleCreateNewRegister = (e) => {
    e.preventDefault();

    setRegisters((oldRegisters, i) => ([...oldRegisters, { id: i, title: newRegister, isComplete: false }]))
    setNewRegister('')
  }

  function handleNewRegisterChange(e) {
    setNewRegister(e.target.value);
  }

  return (
    <section>
      <form onSubmit={handleCreateNewRegister}>
        <FormContainer>
          <label htmlFor={inputId}>{labelText}</label>
          <AddRegisterContainer>
            <InputAddRegister type="text" id={inputId} placeholder={placeholderText} onChange={handleNewRegisterChange} value={newRegister} />
            <button>
              <Plus size={16} color="#fff" />
            </button>
          </AddRegisterContainer>
        </FormContainer>
      </form>
      <BoxRegisters>
        {registers.map(register => {
          return <RegisterItem
            key={register.id}
            content={register.title} />;
        })}
      </BoxRegisters>
    </section>
  )
}