import { NavLink } from "react-router-dom";
import { SidebarContainer } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Metas">
              Cadastro de metas
            </NavLink>
          </li>
          <li>
            <NavLink to="/areas" title="Áreas">
              Cadastro de áreas
            </NavLink>
          </li>
          <li>
            <NavLink to="/origins" title="Origens">
              Cadastro de origens
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" title="Habilidades">
              Cadastro de habilidades
            </NavLink>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  )
}