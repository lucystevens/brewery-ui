import './App.css';
import NavigationBar from '../NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { Box, Typography } from '@material-ui/core';
import HomePage from '../pages/HomePage/HomePage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';
import OrderForm from 'components/pages/OrderForm/OrderForm';

function App() {

  return (
    <Router>
      <NavigationBar 
        options={[
            {text: "Home", link: "/"},
            {text: "About", dropdown: [
              {text: "Meet the Team", link: "/meet-the-team"},
              {text: "Our Story", link: "/our-story"}
            ]},
            {text: "Beers", dropdown: [
              {text: "Our Beers", link: "/beers"},
              {text: "People's Pint", link: "/peoples-pint"},
              {text: "Events", link: "/events"}
            ]},
            {text: "Shop", link: "/shop"}
        ]}>
          <Box display={"flex"}>
            <img style={{height: "6rem", marginRight: "1rem"}} alt="CBP logo" src="/images/cbp-text-logo-inverse.png"/>
          </Box>
      </NavigationBar>

        <Switch>
          <Route path="/beers">
            <h1>Our Beers</h1>
          </Route>
          <Route path="/meet-the-team">
            <h1>Meet the Team</h1>
          </Route>
          <Route path="/our-story">
            <h1>Our Story</h1>
          </Route>
          <Route path="/shop">
            <h1>Shop</h1>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
