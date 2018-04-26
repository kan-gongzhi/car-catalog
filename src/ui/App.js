import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import CarOfWeekContainer from './pages/car-of-week/CarOfTheWeekContainer';
import SearchContainer from './pages/search/SearchContainer';
import ModelDetailsContainer from './pages/model-details/ModelDetailsContainer';
import Nav from './components/Nav/Nav';
import logo from './qantas-money_2x.png';

const App = () => (
  <div className="App">
    <header className="App__Header flex items-center flex-wrap">
      <Link to={'/'}>
        <img src={logo} alt="Logo" className={'App__Logo'} />
      </Link>
      <Nav />
    </header>
    <main>
      <Route exact path="/" component={CarOfWeekContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/make/model/:id" component={ModelDetailsContainer} />
    </main>
  </div>
);

export default App;
