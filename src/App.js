import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calcs from './component/homePage/Calcs';
import Login from './component/logIn/Login';
import SignUp from './component/signUp/SignUp';
import MainCalc from './component/calcs/MainCalc';

function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route path="/" exact component={Calcs} />
        <Route path="/Login" exact component={Login} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Calculator" exact component={MainCalc} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
