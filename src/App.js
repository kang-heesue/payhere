import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Search from './pages/Search';
import Register from './pages/Register';
import Issue from './pages/Issue';
import Header from './components/Header';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/issue" component={Issue} />
      </Switch>
    </div>
  );
}

export default App;
