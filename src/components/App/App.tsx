import './App.css';
import React from 'react';
import NavigationBar from '../NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Box, Typography } from '@material-ui/core';

function App() {
  return (
    <Router>
      <NavigationBar 
        options={[
            {text: "Home", link: "/"},
            {text: "Beers", link: "/beers"},
            {text: "Shop", link: "/shop"}
        ]}>
          <Box display={"flex"}>
            <img style={{height: "6rem", marginRight: "1rem"}} alt="CBP logo" src="/images/cbp-text-logo-inverse.png"/>
          </Box>
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
