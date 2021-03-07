import './App.css';
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Typography } from '@material-ui/core';

function App() {
  return (
    <Router>
      <NavigationBar 
        title={"Closet Brewing Project"}
        options={[
            {text: "Home", link: "/"},
            {text: "Beers", link: "/beers"},
            {text: "Shop", link: "/shop"}
        ]}>
      </NavigationBar>

        <Switch>
          <Route path="/beers">
            <Typography>{"BEERS"}</Typography>
          </Route>
          <Route path="/shop">
            <Typography>{"SHOP"}</Typography>
          </Route>
          <Route path="/">
            <Typography>{"HOME"}</Typography>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
