import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";
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
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(rp) => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          {...rp}
                          handleDelete={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={(rp) => (
                      <Page>
                        <NewPaletteForm
                          {...rp}
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={(rp) => (
                      <Page>
                        <Palette
                          palette={this.findPalette(rp.match.params.id)}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(rp) => (
                      <Page>
                        <SingleColorPalette
                          {...rp}
                          colorId={rp.match.params.colorId}
                          palette={this.findPalette(rp.match.params.paletteId)}
                        />
                      </Page>
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
