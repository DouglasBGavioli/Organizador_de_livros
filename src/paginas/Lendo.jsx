import React from "react";
import "../css/Lendo.css";
import Livro from "../components/Livro";


function Home() {

  return (
    <section>
      <h2 className="bookshelf-title">LENDO</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Livro estante="currentlyReading"/>
        </ol>
      </div>
    </section>
  );
}
export default Home;
