import React, { useState } from 'react'
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import './NavigationBar.css';


interface NavigationBarProps {
    title: string
    options: NavigationOption[]
}

export interface NavigationOption {
    text: string
    link?: string
    onClick?: (option: NavigationOption) => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({title, options}) => {

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
    <Box className="navigation-bar"
        display="flex"
        bgcolor="grey.200"
        p={2}
        alignItems="center" 
        justifyContent="space-between">

        <Box className={"title"} display="flex">
          <Typography>{title}</Typography>
        </Box>

        <Box className="full-menu">
            {options.map(option => 
                <Button
                    color="primary"
                    key={option.text}
                    onClick={() => handleOnClick(option)}>{option.text}
                </Button>
            )}
        </Box>

        <Box className="small-menu" >
          <IconButton onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor={"right"} open={menuOpen} onClose={() => setMenuOpen(false)}>
            <List>
              {options.map((option) => (
                <ListItem button onClick={() => handleOnClick(option)} key={option.text}>
                  <ListItemText primary={option.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Box>
    );

};
  
  export default NavigationBar;