import { useState, useEffect } from "react";
import { FormContainer, AddRegisterContainer, BoxRegisters } from "./styles";
import { RegisterItem } from '../RegisterItem'
import { RegisterInput } from "../RegisterInput";
import { Plus } from "phosphor-react";

export function Registers({ labelText, placeholderText, inputId }) {

  const [register, setRegister] = useState('');
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('@desafio-estagio-react:registers-1.0.0')) {
      const storedRegisters = JSON.parse(localStorage.getItem('@desafio-estagio-react:registers-1.0.0'));
      setRegisters(storedRegisters);
    }
  }, []);

  const handleCreateRegister = (e) => {
    e.preventDefault();
    if (register) {
      // const newRegister = (oldRegisters, i) => ([...oldRegisters, { id: i, title: register, isComplete: false }]);
      const newRegister = { id: new Date().getTime().toString(), title: register, isComplete: false };

      setRegisters([...registers, newRegister]);
      localStorage.setItem('@desafio-estagio-react:registers-1.0.0', JSON.stringify([...registers, newRegister]));
      setRegister('');
    }
  }

  const handleRegisterChange = (e) => {
    setRegister(e.target.value);
  }

  const deleteRegister = (id) => {
    const registerWithoutDeletedOne = registers.filter(register => register.id !== id);

    setRegisters(registerWithoutDeletedOne)
    localStorage.setItem('@desafio-estagio-react:registers-1.0.0', JSON.stringify(registerWithoutDeletedOne));
  }

  const handleRegisterCompletion = (id) => {
    const completedRegister = registers.map(oldRegisters => oldRegisters.id === id ? { ...oldRegisters, isComplete: !oldRegisters.isComplete } : { ...oldRegisters });

    setRegisters(completedRegister);
    localStorage.setItem('@desafio-estagio-react:registers-1.0.0', JSON.stringify(completedRegister));
  }

  const isNewRegisterEmpty = register.length === 0;

  return (
    <section>
      <form onSubmit={handleCreateRegister}>
        <FormContainer>
          <label htmlFor={inputId}>{labelText}</label>
          <AddRegisterContainer>
            <RegisterInput
              type={"text"}
              inputId={inputId}
              value={register}
              placeholderText={placeholderText}
              onHandleRegisterChange={handleRegisterChange}
            />
            <button type="submit" disabled={isNewRegisterEmpty}>
              <Plus size={16} color="#fff" />
            </button>
          </AddRegisterContainer>
        </FormContainer>
      </form>
      <BoxRegisters>
        {registers.map(register => {
          return <RegisterItem
            key={register.id}
            content={register.title}
            register={register}
            onDeleteRegister={deleteRegister}
            handleRegisterCompletion={handleRegisterCompletion}
          />
        })}
      </BoxRegisters>
    </section>
  )
}