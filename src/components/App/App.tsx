import './App.scss';
import NavigationBar from '../NavigationBar';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Box } from '@material-ui/core';
import HomePage from '../pages/HomePage/HomePage';
import TeamPage from 'components/pages/TeamPage/TeamPage';
import BeersPage from 'components/pages/BeersPage/BeersPage';
import StoryPage from 'components/pages/StoryPage/StoryPage';
import Footer from 'components/Footer/Footer';
import AgeVerificationDialog from './AgeVerificationDialog/AgeVerificationDialog';
import { usePageViews } from 'hooks/AnalyticsHook';
import CookiePolicy from 'components/pages/policies/CookiePolicy/CookiePolicy';
import CookieBanner from './CookieBanner/CookieBanner';
import RetailerPage from 'components/pages/shop/RetailerPage';

function App() {

  usePageViews()

  return (<>
        <AgeVerificationDialog/>
        <CookieBanner/>

        <div className="app">
          <NavigationBar 
            options={[
                {text: "Home", link: "/"},
                {text: "About", dropdown: [
                  {text: "Meet the Team", link: "/meet-the-team"},
                  {text: "Our Story", link: "/our-story"}
                ]},
                {text: "Beers", link: "/beers"},
                {text: "Shop", dropdown: [
                  {text: "Retailers", link: "/retailers"},
                  {text: "Merch", link: "https://shop.closetbrewingproject.co.uk/"}
                ]},
            ]}>
              <Box display={"flex"}>
                <a href="/">
                  <img className="logo" alt="CBP logo" src="/images/cbp-text-logo-inverse.png"/>
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
            <Route path="/retailers">
              <RetailerPage/>
            </Route>

            <Route path="/cookie-policy">
              <CookiePolicy/>
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>

        <Footer/>
        </>
  );
}

export default App;
