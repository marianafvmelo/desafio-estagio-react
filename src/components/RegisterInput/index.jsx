import { Input } from "./styles"

export function RegisterInput({ type, inputId, value, placeholderText, onHandleRegisterChange }) {
  return (
    <Input type={type} required id={inputId} value={value} placeholder={placeholderText} onChange={onHandleRegisterChange} />
  )
}