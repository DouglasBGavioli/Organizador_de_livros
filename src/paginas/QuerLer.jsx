import React from "react";
import "../css/Lendo.css";
import Livro from "../components/Livro";

function QuerLer() {
  return (
    <section>
      <h2 className="bookshelf-title">QUERO LER</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Livro estante="wantToRead"/>
        </ol>
      </div>
    </section>
  );
}
export default QuerLer;
