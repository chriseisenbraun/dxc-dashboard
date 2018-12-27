import React, {Component} from 'react'
import './App.css';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import {Welcome} from './Welcome';
import {Nav} from './Nav';
import { MissionCarousel } from './MissionCarousel';
import {Notebook} from './Notebook';
import {Accordion} from './Accordion';
import json from './db.json';
import {MissionTitle} from './MissionTitle';
import {Checkpoint} from './Checkpoint';
import {Footer} from './Footer';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <main>
          <Welcome />
            {/* <Route
              exact
              path="/"
              render={() => <Welcome missions={json.missions} />}
            /> */}
            {/* <Route path="/notebook" component={Notebook} /> */}
            {/* <Route path="/missons" component={Notebook} /> */}
            <MissionCarousel />
            <MissionTitle />
            <Accordion />
            <Checkpoint />
            <Footer />
            </main>

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
