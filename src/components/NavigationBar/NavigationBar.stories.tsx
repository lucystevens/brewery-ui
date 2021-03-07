import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import NavigationBar from './NavigationBar';

export default {
  title: 'NavigationBar',
  component: NavigationBar,
} as Meta;

export const ExampleNavigationBar = 
<NavigationBar 
    title={"Closet Brewing Project"}
    options={[
        {text: "Home", onClick: o=>console.log(o)},
        {text: "Beers", onClick: o=>console.log(o)},
        {text: "Shop", onClick: o=>console.log(o)}
    ]}> </NavigationBar>