import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lendo from "./paginas/Lendo";
import Lidos from "./paginas/Lidos";
import QuerLer from "./paginas/QuerLer";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path="/">
          <Lendo />
        </Route>

        <Route path="/QuerLer">
          <QuerLer />
        </Route>

        <Route path="/Lidos">
          <Lidos />
        </Route>

        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
