import { useState, useEffect } from "react";

import { MainContent, FormContainer, AddRegisterContainer, List } from "./styles";

import { RegisterItem } from './Item'
import { RegisterInput } from "./Input";

import { Plus } from "phosphor-react";

export function Registers({
  labelText,
  placeholderText,
  inputId,
  hasCompletion
}) {

  const [register, setRegister] = useState('');
  const [registers, setRegisters] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [editedRegister, setEditedRegister] = useState('');

  useEffect(() => {
    if (localStorage.getItem(`@desafio-estagio-react:${inputId}-1.0.0`)) {
      const storedRegisters = JSON.parse(localStorage.getItem(`@desafio-estagio-react:${inputId}-1.0.0`));
      setRegisters(storedRegisters);
    }
  }, []);

  const handleCreateRegister = (event) => {
    event.preventDefault();

    if (register) {
      const newRegister = {
        id: new Date().getTime().toString(),
        title: register,
        isComplete: false
      };

      setRegisters([...registers, newRegister]);
      localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify([...registers, newRegister]));
      setRegister('');
    }
  }

  const handleRegisterChange = (event) => {
    setRegister(event.target.value);
  }

  const deleteRegister = (id) => {
    const registersWithoutDeletedOne = registers.filter((register) => register.id !== id);

    setRegisters(registersWithoutDeletedOne)
    localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify(registersWithoutDeletedOne));
  }


  const handleSubmitEditedRegister = (id) => {
    const index = registers.findIndex((register) => register.id === id);

    const newRegistersArray = [...registers];

    newRegistersArray[index].title = editedRegister;

    setRegisters(() => newRegistersArray);
    localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify(newRegistersArray));
  }

  const handleRegisterCompletion = (id) => {
    const completedRegister = registers.map((previousRegisters) => previousRegisters.id === id ? { ...previousRegisters, isComplete: !previousRegisters.isComplete } : { ...previousRegisters });

    setRegisters(completedRegister);
    localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify(completedRegister));
  }

  const isNewRegisterEmpty = register.trim().length === 0;

  return (
    <MainContent>
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
            <button type="submit" title="Adicionar" disabled={isNewRegisterEmpty}>
              <Plus size={16} color="#fff" />
            </button>
          </AddRegisterContainer>
        </FormContainer>
      </form>

      <List>
        {registers.map((register) => {
          return (
            <RegisterItem
              key={register.id}
              content={register.title}
              register={register}
              hasCompletion={hasCompletion}
              onDeleteRegister={deleteRegister}
              handleRegisterCompletion={handleRegisterCompletion}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              editedRegister={editedRegister}
              setEditedRegister={setEditedRegister}
              onHandleSubmitEditedRegister={handleSubmitEditedRegister}
            />
          )
        })}
      </List>
    </MainContent >
  )
}