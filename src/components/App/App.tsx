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
            //{text: "Blog", link: "/blog"},
            {text: "Beers", link: "/beers"},
            //{text: "Shop", link: "/shop"}
        ]}>
          <Box display={"flex"}>
            <img style={{height: "6rem", marginRight: "1rem"}} alt="CBP logo" src="/images/cbp-text-logo-inverse.png"/>
          </Box>
      </NavigationBar>

        <Switch>
          <Route path="/beers">
            <ComingSoonPage></ComingSoonPage>
          </Route>
          <Route path="/orderform">
            <OrderForm></OrderForm>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
