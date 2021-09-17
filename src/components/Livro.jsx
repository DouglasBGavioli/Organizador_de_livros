import React, { useState } from "react";
import { getMyBooks } from "../api/api.js";
import "../css/Livro.css";

function Livro(props) {
  const [livro, setLivro] = useState([]);
  const estado = props.estado;
  getMyBooks().then(function (data) {
    setLivro(data.books);
  });
  return (
    <container>
      {livro.map((livros) => {
        if (livros.shelf === estado)
          return (
            <li className="card-livro">
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${livros.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div></div>
                  <div className="seletor">
                    <select>
                      <option value="move" disabled selected>
                        Mover para...
                      </option>
                      <option value="currentlyReading">Lendo atualmente</option>
                      <option value="wantToRead">Desejo ler</option>
                      <option value="read">Lidos</option>
                      <option value="none">Remover livro</option>
                    </select>
                  </div>
                </div>

                <section>
                  <div className="book-title">{livros.title}</div>
                  <div className="book-authors">{livros.authors}</div>
                </section>
              </div>
            </li>
          );
      })}
    </container>
  );
}
export default Livro;
