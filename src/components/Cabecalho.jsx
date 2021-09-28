import React from "react";
import "../css/Cabecalho.css";
import "../css/Reset.css";
import book from "../assests/img/book.svg";
import Buscar from "../components/Buscar";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="menu__list">
          <Link className="menu__link" to="/">
            <img className="logo" src={book} alt="logo" />
          </Link>

          <li className="menu__links">
            <Link className="menu__link" to="/">
              Lendo
            </Link>
          </li>
          <li className="menu__links">
            <Link className="menu__link" to="/QuerLer">
              Quero ler
            </Link>
          </li>
          <li className="menu__links">
            <Link className="menu__link" to="/Lidos">
              Ja lidos
            </Link>
          </li>
          <li className="menu__links">
            <Buscar />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Cabecalho;
