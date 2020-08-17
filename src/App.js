import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
//animation
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  deletePalette = (id) => {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((p) => p.id !== id),
      }),
      this.syncLocalStorage
    );
  };
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(rp) => (
                      <div className="page">
                        <PaletteList
                          palettes={this.state.palettes}
                          {...rp}
                          handleDelete={this.deletePalette}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={(rp) => (
                      <div className="page">
                        <NewPaletteForm
                          {...rp}
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={(rp) => (
                      <div className="page">
                        <Palette
                          palette={this.findPalette(rp.match.params.id)}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(rp) => (
                      <div className="page">
                        <SingleColorPalette
                          {...rp}
                          colorId={rp.match.params.colorId}
                          palette={this.findPalette(rp.match.params.paletteId)}
                        />
                      </div>
                    )}
                  />
                  <Route render={() => <h1>Not found</h1>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
