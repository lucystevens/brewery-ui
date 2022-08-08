import { Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import './MailingListSignup.scss'


const MailingListSignup: React.FC = () => {

    const [state, setState] = useState<"READY" | "SUBMITTING" | "SUBMITTED">("READY")
    const [error, setError] = useState<String>("")
    const [email, setEmail] = useState("")

    const onEmailFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        setError("")
    }

    const onEnterPressed = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === "Enter"){
            event.stopPropagation()
            submit()
        }
    }

    const emailRegex = /\S+@\S+\.\S+/
    const submit = () => {
        if(emailRegex.test(email)){
            setState("SUBMITTING")
            axios.post("/api/users/mailer", { "email": email })
            .then(() => setState("SUBMITTED"))
            .catch(e => {
                setError(e.response.data)
                setState("READY")
            })
        }
        else {
            setError("Invalid email provided")
        }
    }

    return (
        <div className="mailing-list-signup">
            {state === "SUBMITTED"? 
            <>
                <Typography variant="h4" className="signup-complete">
                    Thanks for your email!
                </Typography>
                <Typography variant="subtitle1" className="signup-complete-sub">
                    We promise we won't do anything nefarious with it.
                </Typography>
            </> :
            <>
                <Typography variant="h4" className="signup-title">
                    Let's keep in touch!
                    </Typography>
                <Typography variant="subtitle1" className="signup-description">
                    Enter your email below to stay up to date with the latest releases.
                </Typography>
                <div className="textfield-wrapper">
                    <TextField 
                        id="email-input" 
                        label="Email address" 
                        variant="outlined"
                        value={email}
                        onChange={onEmailFieldChange} 
                        onKeyUp={onEnterPressed}
                        fullWidth
                        error={error !== ""}
                        helperText={error}
                        disabled={state === "SUBMITTING"}/>
                </div>
                <Button 
                    className="form-submit" 
                    size="large" 
                    variant="contained" 
                    color="primary"
                    onClick={submit}
                    disabled={state === "SUBMITTING"}>
                    Submit
                </Button>
                <Typography variant="body2" className="signup-tandc">
                    *By signing up you agree to let us store your email and use it to contact you.
                    To be honest, this shouldn't be a surprise, it is a mailing list after all.
                </Typography>
            </>}
        </div>
    );

};

export default MailingListSignup;