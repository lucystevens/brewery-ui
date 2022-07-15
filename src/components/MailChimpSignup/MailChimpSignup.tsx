import { Box } from '@material-ui/core'
import React from 'react'
import "./MailChimpSignup.scss"

const MailChimpSignup: React.FC = () => {
    return (
        <Box className="mailchimp-signup">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css"/>
            <div id="mc_embed_signup">
                <form action="https://closetbrewingproject.us9.list-manage.com/subscribe/post?u=d8d22d02a5013739b8376d3f0&amp;id=0d3ab0daa9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                    <h2>Join our mailing list and be the first to hear about new beers!</h2>
                <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address<span className="asterisk">*</span></label>
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
                </div>
                <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                    <div className="content__gdpr">
                        <label>Marketing Permissions</label>
                        <p>Please select all the ways you would like to hear from Closet Brewing Project:</p>
                        <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                        <label className="checkbox subfield" htmlFor="gdpr_39105"><input type="checkbox" id="gdpr_39105" name="gdpr[39105]" value="Y" className="av-checkbox "/><span>Email</span> </label>
                        </fieldset>
                        <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
                    </div>
                    <div className="content__gdprLegal">
                        <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
                    </div>
                </div>
                <div hidden={true}><input type="hidden" name="tags" value="12703373"/></div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                        <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                    </div>
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_d8d22d02a5013739b8376d3f0_0d3ab0daa9" tabIndex={-1} value=""/></div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                                <p className="brandingLogo"><a href="http://eepurl.com/h6tczH" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"/></a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Box>
    )
}
export default MailChimpSignup