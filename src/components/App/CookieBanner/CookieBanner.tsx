import React, { useState } from 'react'
import { Button, Drawer, Typography } from '@material-ui/core';
import './CookieBanner.scss';
import { dismissCookieBanner, setCookiePrefs, showCookieBanner } from 'services/CookieService/CookieService';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {

    const [open, setOpen] = useState(
        showCookieBanner()
    )

    const closeCookieBanner = (allowAllCookies: boolean) => {
        setCookiePrefs({ analyticsAllowed: allowAllCookies })
        dismissCookieBanner()
        setOpen(false)
    }

    const doNothing = () => { }

    return (
      <Drawer
      variant="persistent"
      anchor="bottom"
      open={open}>
        <div className={"cookie-banner"}>
          <Typography variant="body1">
            This site uses cookies to help us improve the site,
            for more info checkout our <Link to="/cookie-policy">Cookie Policy</Link>.
          </Typography>
          <div className="cookie-buttons">
            <Button 
              color="primary" 
              variant="contained" 
              onClick={() => closeCookieBanner(true)}>
                Allow all
              </Button>
              <Button 
                variant="contained" 
                onClick={() => closeCookieBanner(false)}>
                Allow only essential
              </Button>
            </div>
          </div>
      </Drawer>
    )

}

export default CookieBanner