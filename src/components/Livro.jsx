import React, { useEffect, useState } from "react";
import { getMyBooks, updateBook } from "../api/api.js";
import "../css/Livro.css";

function Livro(props) {
  const [livros, setLivro] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const estante = props.estante;
  useEffect(() => {
    getMyBooks().then(function (data) {
      setLivro(data.books);
    });
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);
  return (
    <div>
      {livros.map((livro) => {
        if (livro.shelf === estante)
          return (
            <li className="card-livro" key={livro.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${livro.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div></div>
                  <div className="seletor">
                    <select
                      onChange={(event) =>
                        handleChange(livro, event.target.value)
                      }
                    >
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
                  <div className="book-title">{livro.title}</div>
                  <div className="book-authors">{livro.authors}</div>
                </section>
              </div>
            </li>
          );
      })}
    </div>
  );

  function handleChange(books, shelf) {
    updateBook(books, shelf).then(() => setRefresh(true));
  }
}
export default Livro;
