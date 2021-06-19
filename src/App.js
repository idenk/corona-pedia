import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact={true} path="/">
          <Home/>
        </Route>
        <Route path="/vaccine">
          {/* <Vaccine/> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;