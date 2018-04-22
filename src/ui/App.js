import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import CarOfWeekContainer from './pages/car-of-week/CarOfTheWeekContainer';
import SearchContainer from './pages/search/SearchContainer';
import ModelDetailsContainer from './pages/model-details/ModelDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Route exact path="/" component={CarOfWeekContainer} />
          <Route exact path="/search" component={SearchContainer} />
          <Route
            exact
            path="/make/model/:id"
            component={ModelDetailsContainer}
          />
        </main>
      </div>
    );
  }
}

export default App;
