import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

    this.state = {
      palettes: savedPalettes || seedColors,
    };
  }

  findPalette = (id) => {
    return generatePalette(this.state.palettes.find((p) => p.id === id));
  };
  savePalette = (newPalette) => {
    this.setState(
      (st) => ({
        palettes: [...st.palettes, newPalette],
      }),
      this.syncLocalStorage
    );
  };
  syncLocalStorage = () => {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <PaletteList palettes={this.state.palettes} {...rp} />
            )}
          />
          <Route
            exact
            path="/palette/new"
            render={(rp) => (
              <NewPaletteForm
                {...rp}
                savePalette={this.savePalette}
                palettes={this.state.palettes}
              />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(rp) => (
              <Palette palette={this.findPalette(rp.match.params.id)} />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(rp) => (
              <SingleColorPalette
                {...rp}
                colorId={rp.match.params.colorId}
                palette={this.findPalette(rp.match.params.paletteId)}
              />
            )}
          />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
