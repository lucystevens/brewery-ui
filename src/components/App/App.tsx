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
import BeersPage from '../pages/BeersPage/BeersPage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';

function App() {

  function BeerPage() {
    let { slug } = useParams<{slug: string}>();
    return <Typography>Now showing beer {slug}</Typography>;
  }

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
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
