import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Provider} from 'react-redux'
import store from './store'

import AppNavbar from './componenets/AppNavbar'
import ShoppingList from './componenets/ShoppinList'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <ShoppingList/>
        </div>
      </Provider>
     
    );
  }
}

export default App;
