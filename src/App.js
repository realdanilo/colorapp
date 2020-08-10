import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";

function App() {
  function findPalette(id) {
    return generatePalette(seedColors.find((p) => p.id === id));
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <p>Home</p>} />
        <Route
          exact
          path="/palette/:id"
          render={(rp) => <Palette palette={findPalette(rp.match.params.id)} />}
        />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
      {/* <Palette palette={generatePalette(seedColors[2])} /> */}
    </div>
  );
}

export default App;
