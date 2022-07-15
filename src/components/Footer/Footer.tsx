import React from 'react'
import { Grid } from '@material-ui/core';
import './Footer.scss';

const Footer: React.FC = () => {

    return (
        <Grid container className="footer">
            <Grid item lg={2} md={3} sm={4} xs={6} className="web-credit">
                Website by <a target="_blank" rel="noreferrer" href="https://github.com/lucystevens">Lucy Stevens</a>
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="logo-credit">
                Logo by Sam Westwood
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="contact">
                <a target="_blank" rel="noreferrer" href="https://us9.list-manage.com/contact-form?u=d8d22d02a5013739b8376d3f0&form_id=4743b5beebdda103bc1accd791577b03">Contact Us</a>
            </Grid>
        </Grid>
    )

}

export default Footer;