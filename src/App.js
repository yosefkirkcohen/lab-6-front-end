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
import UpdatePage from './UpdatePage';

export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
                <header>
                
                  <NavLink exact className='nav-link' activeClassName='active-link' to='/'>List</NavLink> 
                  <NavLink exact className='nav-link' activeClassName='active-link' to='/create'>Create</NavLink>
                  
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
                      <Route 
                          path="/edit/:id" 
                          exact
                          render={(routerProps) => <UpdatePage {...routerProps} />} 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}
