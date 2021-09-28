import React, { useEffect, useState } from "react";
import { searchBooks, updateBook } from "../api/api.js";
import "../css/Buscar.css";
import Autocomplete from "@material-ui/core/Autocomplete";
import { TextField } from "@material-ui/core";
import {option} from '../helpers/Globals.js'

import Modal from "./Modal";

function Buscar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);
  const [livros, setLivros] = useState([]);
  const options= option();
  

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (options.includes(input)) {
        setPesquisa(input);
        setRefresh(true);
      } else {
        alert("Palvra não aceita");
      }
    }
  };
  useEffect(() => {
    searchBooks(pesquisa).then(function (data) {
      setLivros(data.books);
    });
    if (refresh) {
      setRefresh(false);
    }
  }, [pesquisa, refresh]);

  return (
    <div className="buscar">
      <button className="botao" onClick={() => setIsModalVisible(true)}>
        Buscar
      </button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div className="buscar">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{
                width: 350,
                backgroundColor: "white",
                marginTop: 2,
                alignItems: "center",
              }}
              renderInput={(params) => (
                <TextField
                  onSelect={(event) => setInput(event.target.value)}
                  onKeyPress={handleKeyPress}
                  {...params}
                  label="Buscar"
                />
              )}
            />
          </div>
          {livros.map((livro) => {
            return (
              <div className="card-livro" key={livro.id}>
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
                        <option value="move" disabled defaultValue>
                          Mover para...
                        </option>
                        <option value="currentlyReading">Lendo</option>
                        <option value="wantToRead">Quero ler</option>
                        <option value="read">Ja lidos</option>
                        <option value="none">Remover livro</option>
                      </select>
                    </div>
                  </div>

                  <section>
                    <div className="book-title">{livro.title}</div>
                    <div className="book-authors">{livro.authors}</div>
                  </section>
                </div>
              </div>
            );
          })}
        </Modal>
      ) : null}
    </div>
  );
  function handleChange(books, estante) {
    updateBook(books, estante).then(() => setRefresh(true));
  }
}
export default Buscar;
