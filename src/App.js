import React, { Component } from 'react';
import './App.css';
import * as lib from './Author';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Nav } from './Nav';
import { MissionCarousel } from './MissionCarousel';
import { MissionOne } from './MissionOne';
import { MissionTwo } from './MissionTwo';
import { MissionThree } from './MissionThree';
import { MissionFour } from './MissionFour';
import { MissionFive } from './MissionFive';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <main>
            <Route exact path="/" component={Welcome} />
            <Route path="/missions" component={MissionCarousel} />
            <Route path="/missions/1" component={MissionOne} />
            <Route path="/missions/2" component={MissionTwo} />
            <Route path="/missions/3" component={MissionThree} />
            <Route path="/missions/4" component={MissionFour} />
            <Route path="/missions/5" component={MissionFive} />

            {/* <Route
              exact
              path="/"
              render={() => <Welcome missions={json.missions} />}
            /> */}
            {/* <Route path="/notebook" component={Notebook} /> */}
            {/* <Route path="/missons" component={Notebook} /> */}
            {/* <MissionCarousel /> */}
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
