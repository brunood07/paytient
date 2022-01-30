import { FiTarget } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser, HiOutlineCog, HiOutlineBriefcase } from "react-icons/hi";
import { IoNewspaperOutline, IoExitOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";

import { SidebarContainer } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <ul>
          <li style={{ color: "var(--green)" }}>
            <VscGraph />
            <a href="#">
              Dashboard
            </a>
          </li>

          <li>
            <HiOutlineBriefcase />
            <a href="#">
              Leads
            </a>
          </li>

          <li>
            <FiTarget />
            <a href="#">
              Campanhas
            </a>
          </li>

          <li>
            <BsCart3 />
            <a href="#">
              Vendas
            </a>
          </li>

          <li>
            <HiOutlineUser />
            <a href="#">
            Clientes
            </a>
          </li>

          <li>
            <IoNewspaperOutline />
            <a href="#">
              Cobrança
            </a>
          </li>

          <li>
            <HiOutlineCog />
            <a href="#">
              Configurações
            </a>
          </li>

          <li>
            <IoExitOutline />
            <a href="#">
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
}