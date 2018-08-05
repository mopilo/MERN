import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppNavbar from './componenets/AppNavbar'
import ShoppingList from './componenets/ShoppinList'


class App extends Component {
  render() {
    return (
      <div className="App">
       <AppNavbar/>
       <ShoppingList/>
      </div>
    );
  }
}

export default App;
