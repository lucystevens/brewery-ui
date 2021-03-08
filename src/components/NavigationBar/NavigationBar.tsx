import React, { useState } from 'react'
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import './NavigationBar.css';


interface NavigationBarProps {
    options: NavigationOption[]
}

export interface NavigationOption {
    text: string
    link?: string
    onClick?: (option: NavigationOption) => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({options, children}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  let history = useHistory()

    const handleOnClick = (option: NavigationOption) => {
      if(option.onClick) option.onClick(option)
      if(option.link) history.push(option.link)
      setMenuOpen(false)
    }

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

  
    return (
    <Box className={"navigation-bar"}
        display="flex"
        p={1}
        alignItems="center" 
        justifyContent="space-between">

        <Box display="flex" alignItems="center" p={1}
        justifyContent="space-between">
          {children}
        </Box>

        <Box className="full-menu">
            {options.map(option => 
                <Button
                    className={"nav-option"}
                    key={option.text}
                    onClick={() => handleOnClick(option)}>{option.text}
                </Button>
            )}
        </Box>

        <Box className="small-menu" >
          <IconButton onClick={toggleMenu}>
            <MenuIcon style={{fontSize: "3rem", color: "white"}} />
          </IconButton>
          <Drawer anchor={"right"} open={menuOpen} onClose={() => setMenuOpen(false)}>
            <List>
              {options.map((option) => (
                <ListItem button onClick={() => handleOnClick(option)} key={option.text}>
                  <ListItemText className={"nav-option"} primary={option.text.toUpperCase()} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Box>
    );

};
  
  export default NavigationBar;