import { Registers } from "../../components/Registers";

export function Goals() {
  return (
    <Registers labelText="Metas:" inputId="goals" placeholderText="Digite uma meta..." hasCompletion={true} />
  )
}