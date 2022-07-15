import React, { useEffect, useState } from 'react'
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, useLocation } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './NavigationBar.css';


interface NavigationBarProps {
    options: NavigationOption[]
}

export interface NavigationOption {
    text: string
    link?: string
    onClick?: (option: NavigationOption) => void
    dropdown?: NavigationOption[]
}

const NavigationBar: React.FC<NavigationBarProps> = ({options, children}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdownAnchor, setDropdownAnchor] = React.useState<null | string>(null);

  let history = useHistory()

    const handleOnClick = (option: NavigationOption, e: React.MouseEvent) => {
      if(option.onClick) {
        option.onClick(option)
        setMenuOpen(false)
      }

      if(option.link) {
        history.push(option.link)
        setMenuOpen(false)
      }

      if(option.dropdown && option.text !== dropdownAnchor) 
        setDropdownAnchor(option.text)
      else closeDropdown()

      e.stopPropagation()
    }

    const closeDropdown = () => {
      setDropdownAnchor(null)
    }

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

    const location = useLocation();

    const isSelected = (option: NavigationOption): boolean => {
      if(location.pathname === option.link) return true
      else if(option.dropdown){
        return option.dropdown.find(opt => isSelected(opt)) !== undefined
      }
      else return false
    }
    
    const getOptionClasses = (option: NavigationOption): string => {
      return "nav-option" + (isSelected(option)? " selected" : "")
    }
    
    useEffect(() => {
      const handleClickOutside = () => {
        if (dropdownAnchor) {
          closeDropdown();
        }
      };

      document.addEventListener("click", handleClickOutside, false);
      return () => {
        document.removeEventListener("click", handleClickOutside, false);
      };
    }, [dropdownAnchor]);
  
    const optionButton = (option: NavigationOption) => {
      return (
        <Button
            className={getOptionClasses(option)}
            key={option.text}
            onClick={(e) => handleOnClick(option, e)}>{option.text}
        </Button>
      )
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
              <div className="menu-option">
                { optionButton(option) }
                { option.dropdown && <ArrowDropDownIcon className="dropdown-icon" />}
                { dropdownAnchor === option.text && 
                  <div className="dropdown">
                    { option.dropdown?.map(optionButton) }
                  </div>}
              </div>
            )}
        </Box>

        <Box className="small-menu" >
          <IconButton onClick={toggleMenu}>
            <MenuIcon style={{fontSize: "3rem", color: "white"}} />
          </IconButton>
          <Drawer className="side-menu" anchor={"right"} open={menuOpen} onClose={() => setMenuOpen(false)}>
            <List>
              {options.map((option) => (<>
                <ListItem button onClick={(e) => handleOnClick(option, e)} key={option.text}>
                  <ListItemText 
                    className={getOptionClasses(option)}
                    primary={option.text.toUpperCase()} />
                  { option.dropdown && <ArrowDropDownIcon className="dropdown-icon" />}
                </ListItem>
                <div className="dropdown-options">
                  { dropdownAnchor === option.text && option.dropdown?.map(dropdown => 
                    <ListItem className="dropdown" button onClick={(e) => handleOnClick(dropdown, e)} key={dropdown.text}>
                      <ListItemText 
                      className={getOptionClasses(dropdown)}
                      primary={dropdown.text.toUpperCase()} />
                    </ListItem>
                  )}
                </div>
              </>))}
            </List>
          </Drawer>
        </Box>
      </Box>
    );

};
  
export default NavigationBar;