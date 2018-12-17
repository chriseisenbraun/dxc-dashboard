import React, {Component} from 'react';
import './Normalize.css';
import './App.css';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import {Welcome} from './Welcome';
import {Nav} from './Nav';
import {Notebook} from './Notebook';
import json from './db.json';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Nav />

          <main>
            <Route
              exact
              path="/"
              render={() => <Welcome missions={json.missions} />}
            />
            <Route path="/notebook" component={Notebook} />
            <Route path="/missons" component={Notebook} />
            </main>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
