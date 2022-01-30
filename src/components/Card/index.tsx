import { FaDollarSign, FaExchangeAlt, FaRegUser, FaSortDown, FaSortUp } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

import { Container, HeadContainer } from "./styles";

export function Card() {
  return (
    <>
      <HeadContainer>
      <h1>Indicadores</h1>
    
        <p className="filter">
          <strong>Período: </strong>
          Últimos 12 meses
        </p>
        <button>
          <FiFilter className="filterIcon" />
          <p>Filtrar</p>
        </button>
      </HeadContainer>
      <Container>
        <div className="cardContainer">
          <div className="header">
            <BsCart3 className="shopping-cart" />
            <p>Vendas</p>
          </div>

          <p className="value">245</p>

          <div className="footer">
            <FaSortUp className="sort-up" />
            <p>12.67%</p>
          </div>
        </div>

        <div className="cardContainer">
          <div className="header">
            <FaDollarSign className="dollar-sign" />
            <p>Faturamento</p>
          </div>

          <p className="value"><span>R$</span>12.167.943</p>

          <div className="footer">
            <FaSortUp className="sort-up" />
            <p>4.67%</p>
          </div>
        </div>

        <div className="cardContainer">
          <div className="header">
            <FaExchangeAlt className="exchange-alt" />
            <p>Conversão</p>
          </div>

          <p className="value">12%</p>

          <div className="footer">
            <FaSortDown className="sort-down" />
            <p>21.67%</p>
          </div>
        </div>

        <div className="cardContainer">
          <div className="header">
            <FaRegUser className="user" />
            <p>Leads</p>
          </div>

          <p className="value">1347</p>

          <div className="footer">
            <FaSortUp className="sort-up" />
            <p>2.73%</p>
          </div>
        </div>
      </Container>
    </>
    
  );
}