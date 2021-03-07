import logo from './logo.svg';
import './App.less';
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

function App() {
  return (
<NavigationBar 
    title={"Closet Brewing Project"}
    options={[
        {text: "Home", onClick: o=>console.log(o)},
        {text: "Beers", onClick: o=>console.log(o)},
        {text: "Shop", onClick: o=>console.log(o)}
    ]}> </NavigationBar>
  );
}

export default App;
