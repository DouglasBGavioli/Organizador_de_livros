import React, { Component } from "react";
import "../css/Cabecalho.css";
import "../css/Reset.css";
import book from "../assests/img/book.svg";
import { Link } from "react-router-dom";

class Cabecalho extends Component {
  render() {
    return (
      <header className="header">
        
        <nav className="header__menu">

          <ul className="menu__list">
          <Link classname="menu__link" to="/">
          <img class="logo" src={book} alt="logo"/>
              </Link>

          
            <li class="menu__links">
              <Link classname="menu__link" to="/">
                Lendo
              </Link>
            </li>
            <li class="menu__links">
              <Link classname="menu__link" to="/QuerLer">
                Quero ler
              </Link>
            </li>
            <li class="menu__links">
              <Link classname="menu__link" to="/Lidos">
                Ja lidos
              </Link>
            </li>
            <label classname="busca" for="busca"></label>
            <input
              classname="busca"
              type="text"
              id="busca"
              name="busca"
              placeholder="Buscar livros"
            />
          </ul>
        </nav>
      </header>
    );
  }
}
export default Cabecalho;
