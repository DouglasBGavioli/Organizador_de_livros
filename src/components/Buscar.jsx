import React, { useEffect, useState} from "react";
import { searchBooks, updateBook } from "../api/api.js";
import "../css/Buscar.css";

import Modal from "./Modal";

function Buscar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);
  const [livros, setLivros] = useState([]);
  const arr = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        if(arr.includes(input)){
          setPesquisa(input);
          setRefresh(true);
        }else{
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
  }, [refresh]);

  return (
    <div className="buscar">
      <button className="botao" onClick={() => setIsModalVisible(true)}>
        Buscar
      </button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div className="buscar">
            <label for="busca"></label>
            <input
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
              onKeyPress={handleKeyPress}
              classname="busca"
              type="text"
              id="busca"
              name="busca"
              placeholder="Buscar livros"
            />
          </div>
          {livros.map((livro) => {
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
                        <option value="currentlyReading">
                          Lendo atualmente
                        </option>
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
        </Modal>
      ) : null}
    </div>
  );
  function handleChange(books, estante) {
    updateBook(books, estante).then(() => setRefresh(true));
  }
}
export default Buscar;
