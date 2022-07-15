import './App.scss';
import NavigationBar from '../NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Box, createTheme, ThemeProvider } from '@material-ui/core';
import HomePage from '../pages/HomePage/HomePage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';
import TeamPage from 'components/pages/TeamPage/TeamPage';
import BeersPage from 'components/pages/BeersPage/BeersPage';
import StoryPage from 'components/pages/StoryPage/StoryPage';
import Footer from 'components/Footer/Footer';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Oswald",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ].join(",")
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <NavigationBar 
            options={[
                {text: "Home", link: "/"},
                {text: "About", dropdown: [
                  {text: "Meet the Team", link: "/meet-the-team"},
                  {text: "Our Story", link: "/our-story"}
                ]},
                {text: "Beers", link: "/beers"},
                {text: "Shop", link: "/shop"}
            ]}>
              <Box display={"flex"}>
                <img style={{height: "6rem", marginRight: "1rem"}} alt="CBP logo" src="/images/cbp-text-logo-inverse.png"/>
              </Box>
          </NavigationBar>

          <Switch>
            <Route path="/beers">
              <BeersPage/>
            </Route>
            <Route path="/meet-the-team">
              <TeamPage/>
            </Route>
            <Route path="/our-story">
              <StoryPage/>
            </Route>
            <Route path="/shop">
              <ComingSoonPage/>
            </Route>
            <Route path="/">
              <div className="background">
                <div className="mask">
                  <HomePage/>
                </div>
              </div>
            </Route>
          </Switch>
        </div>

        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
