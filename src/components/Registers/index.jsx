import { useState, useEffect } from "react";
import { MainContent, FormContainer, AddRegisterContainer, List } from "./styles";
import { RegisterItem } from './Item'
import { RegisterInput } from "./Input";
import { Plus, Pencil, X } from "phosphor-react";

export function Registers({ labelText, placeholderText, inputId, hasCompletion }) {

  const [register, setRegister] = useState('');
  const [registers, setRegisters] = useState([]);
  const [isAddSubmit, setIsAddSubmit] = useState(true);
  const [isEditRegister, setIsEditRegister] = useState(null);


  useEffect(() => {
    if (localStorage.getItem(`@desafio-estagio-react:${inputId}-1.0.0`)) {
      const storedRegisters = JSON.parse(localStorage.getItem(`@desafio-estagio-react:${inputId}-1.0.0`));
      setRegisters(storedRegisters);
    }
  }, []);

  const handleCreateRegister = (e) => {
    e.preventDefault();
    if (register) {
      const newRegister = { id: new Date().getTime().toString(), title: register, isComplete: false };

      setRegisters([...registers, newRegister]);
      localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify([...registers, newRegister]));
      setRegister('');
    }
  }

  const handleRegisterChange = (e) => {
    setRegister(e.target.value);
  }

  const deleteRegister = (id) => {
    const registerWithoutDeletedOne = registers.filter(register => register.id !== id);

    setRegisters(registerWithoutDeletedOne)
    localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify(registerWithoutDeletedOne));
  }

  const handleEditClick = (id) => {
    const newEditRegister = registers.find((register) => register.id === id);

    setIsAddSubmit(false);

    setRegister(newEditRegister.title);

    setIsEditRegister(id);
  }

  const handleEditRegister = (e) => {
    e.preventDefault();
    if (register && !isAddSubmit) {
      const edittedRegister = registers.map((oldRegister) => {
        if (oldRegister.id === isEditRegister) {
          return { ...oldRegister, title: register }
        }
        return oldRegister;
      })
      setRegisters(
        edittedRegister
      )
      localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify(edittedRegister));

      setIsAddSubmit(true);

      setRegister('');

      setIsEditRegister(null);
    }
  }

  const handleCancelEdit = () => {
    setIsAddSubmit(true);
    setRegister('');
  }

  const handleRegisterCompletion = (id) => {
    const completedRegister = registers.map(oldRegisters => oldRegisters.id === id ? { ...oldRegisters, isComplete: !oldRegisters.isComplete } : { ...oldRegisters });

    setRegisters(completedRegister);
    localStorage.setItem(`@desafio-estagio-react:${inputId}-1.0.0`, JSON.stringify(completedRegister));
  }

  const isNewRegisterEmpty = register.trim().length === 0;

  return (
    <MainContent>
      {
        isAddSubmit ?
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
          </form> :
          <form onSubmit={handleEditRegister}>
            <FormContainer>
              <label htmlFor={inputId}>Editar {labelText}</label>
              <AddRegisterContainer>
                <RegisterInput
                  type={"text"}
                  inputId={inputId}
                  value={register}
                  placeholderText={placeholderText}
                  onHandleRegisterChange={handleRegisterChange}
                />
                <button type="submit" title="Editar" disabled={isNewRegisterEmpty}>
                  <Pencil size={16} color="#fff" />
                </button>
                <button type="button" title="Cancelar" onClick={handleCancelEdit}>
                  <X size={16} color="#fff" />
                </button>
              </AddRegisterContainer>
            </FormContainer>
          </form>
      }
      <List>
        {registers.map(register => {
          return <RegisterItem
            key={register.id}
            content={register.title}
            register={register}
            hasCompletion={hasCompletion}
            onDeleteRegister={deleteRegister}
            onHandleEditClick={handleEditClick}
            handleRegisterCompletion={handleRegisterCompletion}
          />
        })}
      </List>
    </MainContent >
  )
}