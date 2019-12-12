import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Component Imports
import Navbar from './components/Misc/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/layout/Dashboard';
import Search from './components/feature/Search';
import SearchPage from './components/tmp/SearchPage';
import Friends from './components/feature/Friends';
import Profile from './components/tmp/Profile';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <div id="main">
            <Route path="/" exact component={Dashboard} />
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/search" exact component={Search} />
              <Route path="/friends" exact component={Friends} />

              {/* temp */}
              <Route path="/res" exact component={SearchPage} />
              <Route path="/profile" exact component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
