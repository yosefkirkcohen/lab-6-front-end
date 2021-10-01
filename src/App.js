import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import ListPage from './ListPage.js'
import CreatePage from './CreatePage';

export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <ListPage {...routerProps} />} 
                      />
                      <Route 
                          path="/create" 
                          exact
                          render={(routerProps) => <CreatePage {...routerProps} />} 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}
