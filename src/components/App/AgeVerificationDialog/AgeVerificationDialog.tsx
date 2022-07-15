import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import './AgeVerificationDialog.scss';

const AgeVerificationDialog: React.FC = () => {

    const [showDialog, setShowDialog] = useState(
        localStorage.getItem("ageVerified") !== "true"
    )

    const setAgeVerified = () => {
        localStorage.setItem("ageVerified", "true")
        setShowDialog(false)
    }

    const doNothing = () => { }

    return (
        <Dialog
        className="age-verification-dialog"
        maxWidth={"sm"}
        fullWidth={true}
        open={showDialog}
        onClose={doNothing}
        aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">Are you over 18?</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button href="https://www.google.com" color="primary">
            No, I'll just stick to lemonade.
          </Button>
          <Button onClick={setAgeVerified} color="primary">
            Yes, take me to the beer!
          </Button>
        </DialogActions>
      </Dialog>
    )

}

export default AgeVerificationDialog