import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CarOfWeekContainer from './pages/car-of-week/CarOfTheWeekContainer';
import SearchContainer from './pages/search/SearchContainer';
import ModelDetailsContainer from './pages/model-details/ModelDetailsContainer';
import Nav from './components/Nav/Nav';
import logo from './qantas-money_2x.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__Header flex items-center flex-wrap">
          <img src={logo} alt="Logo" className={'App__Logo'} />
          <Nav />
        </header>
        <main>
          <Route exact path="/" component={CarOfWeekContainer} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/make/model/:id" component={ModelDetailsContainer} />
        </main>
      </div>
    );
  }
}

export default App;
