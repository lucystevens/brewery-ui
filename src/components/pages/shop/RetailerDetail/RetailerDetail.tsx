import React from 'react'
import { Box, Typography } from '@material-ui/core';
import './RetailerDetail.scss';
import Retailer, { RetailerLink } from 'models/Retailer';
import InstagramIcon from '@material-ui/icons/Instagram';
import SatelliteIcon from '@material-ui/icons/Satellite';
import LanguageIcon from '@material-ui/icons/Language';


interface RetailerDetailProps {
    retailer: Retailer
}

const RetailerDetail: React.FC<RetailerDetailProps> = ({ retailer }) => {

    const createLink = (link: RetailerLink) => {
        let href = link.type === "instagram" ? `https://instagram.com/${link.url}` : 
                    link.type === "maps"? `https://goo.gl/maps/${link.url}` : link.url
        return (<a key={link.type} target="_blank" rel="noreferrer" title={"open in " + link.type} href={href}>
            { link.type === "instagram" ? <InstagramIcon/> :
                link.type === "maps"? <SatelliteIcon/> : <LanguageIcon/> }
        </a>)
    }

    return (
        <Box className="retailer-box" display={"flex"}>
            <Box className="icon-img" 
                style={{backgroundImage:`url('${retailer.iconUrl}')`}}>

            </Box>
            <Box className="info">
                <Typography className="name" variant={"h3"}>
                    {retailer.name}
                </Typography>
                <Typography className="address" variant={"subtitle1"}>
                    {retailer.address}
                </Typography>
                <Box className="icons" display={"flex"}>
                    {retailer.links.map(link => createLink(link))}
                </Box>
            </Box>
        </Box>
    )

}

export default RetailerDetail;