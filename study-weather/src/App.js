import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';

import Dashboard from "./components/Dashboard";
import SearchCity from "./components/SearchCity";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <Route exact path='/' component={Dashboard}/>
                  <Route exact path='/search' component={SearchCity}/>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
