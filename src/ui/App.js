import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import CarOfWeekContainer from './pages/car-of-week/CarOfTheWeekContainer';
import SearchContainer from './pages/search/SearchContainer';
import ModelDetailsContainer from './pages/model-details/ModelDetailsContainer';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<Nav />*/}
          <ul className={'Nav__list-unstyled'}>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/search'}>search</Link>
            </li>
          </ul>
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
