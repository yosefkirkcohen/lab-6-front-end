import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    NavLink,
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
                <header>
                  <NavLink to='/'>List</NavLink> 
                  <NavLink to='/create'>Create</NavLink>
                </header>
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
