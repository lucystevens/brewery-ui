import './App.scss';
import NavigationBar from '../NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { init } from '@amplitude/analytics-browser';
import { Box, createTheme, ThemeProvider } from '@material-ui/core';
import HomePage from '../pages/HomePage/HomePage';
import TeamPage from 'components/pages/TeamPage/TeamPage';
import BeersPage from 'components/pages/BeersPage/BeersPage';
import StoryPage from 'components/pages/StoryPage/StoryPage';
import Footer from 'components/Footer/Footer';
import AgeVerificationDialog from './AgeVerificationDialog/AgeVerificationDialog';
import ShopPage from 'components/pages/ShopPage/ShopPage';
import { usePageViews } from 'hooks/AnalyticsHook';
import CookiePolicy from 'components/pages/policies/CookiePolicy/CookiePolicy';

function App() {

  usePageViews()

  return (<>
        <AgeVerificationDialog/>
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
                <a href="/">
                  <img style={{height: "6rem", marginRight: "1rem"}} alt="CBP logo" src="/images/cbp-text-logo-inverse.png"/>
                </a>
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
              <ShopPage/>
            </Route>

            <Route path="/cookie-policy">
              <CookiePolicy/>
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
        </>
  );
}

export default App;
