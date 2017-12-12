import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'><p>Home</p></Link>
        <Link to='/second'><p>Second</p></Link>
        <Link to='/third'><p>Third</p></Link>
        { routes }
      </div> 
    );
  }
}

export default App;
