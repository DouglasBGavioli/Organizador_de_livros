import React from "react";
import "../css/Lendo.css";
import Livro from "../components/Livro";

function Lidos() {
  return (
    <section>
      <h2 className="bookshelf-title">LIDOS</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Livro estado="read"/>
        </ol>
      </div>
    </section>
  );
}
export default Lidos;
