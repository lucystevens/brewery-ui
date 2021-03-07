import React from 'react'
import { Box, Button, IconButton, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';


interface NavigationBarProps {
    title: String
    options: NavigationOption[]
}

export interface NavigationOption {
    text: String
    link?: String
    onClick?: (option: NavigationOption) => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({title, options}) => {

    const handleOnClick = (option: NavigationOption) => {
      if(option.onClick) option.onClick(option)
    }
  
    return (
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Typography>{title}</Typography>
        <Box>
            {options.map(option => 
                <Button
                    color="primary"
                    onClick={() => handleOnClick(option)}>{option.text}
                </Button>
            )}
        </Box>
        <Box flexGrow={1} textAlign="right">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    );

};
  
  export default NavigationBar;