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
import ShopPage from 'components/pages/ShopPage/ShopPage';
import { usePageViews } from 'hooks/AnalyticsHook';
import CookiePolicy from 'components/pages/policies/CookiePolicy/CookiePolicy';
import CookieBanner from './CookieBanner/CookieBanner';
import { useConfig } from 'hooks/ApiHook';

function App() {

  usePageViews()
  const {value, error} = useConfig("shopEnabled", "true")

  const shopEnabled = (): boolean => {
    if(error) console.error(error)
    return value === "true"
  }

  const shopLink = (): string => 
    shopEnabled()? "https://shop.closetbrewingproject.co.uk/" : "/shop"

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
                {text: "Shop", link: shopLink()}
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
            <Route path="/shop">
              <ShopPage/>
            </Route>

            <Route path="/cookie-policy">
              <CookiePolicy/>
            </Route>

            <Route path="/">
              <HomePage shopEnabled={shopEnabled()}/>
            </Route>
          </Switch>
        </div>

        <Footer/>
        </>
  );
}

export default App;
