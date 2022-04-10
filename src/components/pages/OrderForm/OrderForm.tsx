import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Snackbar, SvgIconTypeMap, TextField, Tooltip, Typography } from '@material-ui/core';
import MuiAlert, { Color } from '@material-ui/lab/Alert';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MailIcon from '@material-ui/icons/Mail';
import React, { useCallback } from 'react'
import { Redirect } from 'react-router-dom';
import { useAccessCode, useService } from '../../../hooks/ApiHook';
import Beer from '../../../models/Beer';
import BeerService from '../../../services/BeerService';
import BeerDetailsCard from './BeerDetailsCard/BeerDetailsCard';
import DeliveryTypeCard from './DeliveryTypeCard/DeliveryTypeCard';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { BeerOrderDto, CreatedOrder } from 'models/BeerOrder';
import './OrderForm.scss'
import Skeleton from '@material-ui/lab/Skeleton';
import OrderCompleteDialog from './OrderCompleteDialog/OrderCompleteDialog';

interface DeliveryOption {
    name: string
    description: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const OrderForm: React.FC = () => {

    const deliveryOptions: DeliveryOption[] = [
        {name: "Collection", description: "Pickup from brewery", icon: HomeIcon},
        {name: "Local Delivery", description: "Local delivery within EH7 and EH6 postcodes", icon: DirectionsBikeIcon},
        {name: "Postal Delivery", description: "Delivery via Royal Mail within UK. £5 surcharge.", icon: MailIcon}
    ]

    let code = useAccessCode()

    const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState<Color>();
    const [snackbarMessage, setSnackbarMessage] = React.useState<string>();

    const openSnackbar = (severity: Color, message: string) => {
        setSnackbarSeverity(severity)
        setSnackbarMessage(message)
        setSnackbarOpen(true)
    }

    const closeSnackbar = () => setSnackbarOpen(false)

    const makeRequest = useCallback(() => {
        return new BeerService().getBeers();
    }, []);

    const handleError = useCallback((error) => {
        console.error(error)
        openSnackbar("error", "Something went wrong. Please try again later");
    }, []);

    const [{ data, isLoading }] = useService(makeRequest, handleError);

    const [expandedPanel, setExpandedPanel] = React.useState<number>(1);
    const [beerQuantities, setBeerQuantities] = React.useState<Map<Beer, number>>(new Map())
    const [deliveryType, setDeliveryType] = React.useState<string>();
    const [name, setName] = React.useState<string>();
    const [phoneNumber, setPhoneNumber] = React.useState<string>();
    const [address, setAddress] = React.useState<string>();
    const [notes, setNotes] = React.useState<string>();

    const [orderSubmitted, setOrderSubmitted] = React.useState<boolean>();
    const [orderCompleteDialogOpen, setOrderCompleteDialogOpen] = React.useState<boolean>(false);
    const [createdOrder, setCreatedOrder] = React.useState<CreatedOrder>();

    const openOrderCompleteDialog = (createdOrder: CreatedOrder) => {
        setCreatedOrder(createdOrder)
        setOrderCompleteDialogOpen(true)
    }
    const closeOrderCompleteDialog = () => {
        setOrderSubmitted(true)
        setOrderCompleteDialogOpen(false)
    }

    const next = () => setExpandedPanel(expandedPanel+1);
    const previous = () => setExpandedPanel(expandedPanel-1);

    const updateBeerQuantity = (beer: Beer, newQuantity: number) => {
        setBeerQuantities(
            new Map(
                beerQuantities.set(beer, newQuantity)))
    }

    const getSubTotal = () => {
        let total = deliveryType === "Postal Delivery"? 500 : 0
        beerQuantities.forEach((quantity, beer) => {
            total += (beer.price || 0) * quantity
        })
        return total/100
    }

    const getAvailableBeers = () => {
        return data?.filter(b => b.quantityAvailable > 0) || []
    }

    const beersSelected = () => {
        let result = false
        beerQuantities.forEach((quantity, _beer) => {
            result = result || quantity > 0
        })
        return result
    }

    const order = () => {
        let dto: BeerOrderDto = {
            beerQuantities: [],
            deliveryOption: deliveryType,
            name: name,
            phoneNumber: phoneNumber,
            address: address,
            notes: notes
        }
        beerQuantities.forEach((quantity, beer) => {
            dto.beerQuantities.push({
                beerId: beer.id,
                quantity: quantity
            })
        })

        new BeerService().createOrder(dto)
            .then(({ data }) => {
                if(data.success && data.data){
                    openOrderCompleteDialog(data.data)
                }
                else {
                    console.error(data.errors)
                    openSnackbar("error", data.errors);
                }    
            })
            .catch((e) => {
                console.error(e)
                openSnackbar("error", "Something went wrong. Please try again later");
            })
    }

    if (code != "DDNAbeerclub") {
        return <Redirect to='/'/>;
    }

    return (
        <div className="orderform-root">
            <div className="orderform-container">
                { orderSubmitted? 
                    <div className="orderform-header">
                        <Typography className="title" variant={"h3"}>Order submitted successfully!</Typography>
                    </div> : <>
                    <Snackbar open={snackbarOpen} onClose={ closeSnackbar}>
                        <MuiAlert elevation={6} variant="filled"  onClose={closeSnackbar} severity={snackbarSeverity}>
                            {snackbarMessage}
                        </MuiAlert>
                    </Snackbar>

                    <div className="orderform-header">
                        <Typography className="title" variant={"h3"}>CBP Order form</Typography>
                        <Typography className="subtotal" variant={"h3"}>Subtotal: £{getSubTotal().toFixed(2)}</Typography>
                    </div>
                    <Accordion expanded={expandedPanel === 1}>
                        <AccordionSummary aria-controls="choose-beers" id="choose-beers">
                            <Typography className="accordion-title" variant={"h4"}>Step 1: Choose your beers</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection: "column"}}>
                            <Grid container alignItems="stretch" className={"beers"} style={{padding:"1rem"}} spacing={2}>
                                { isLoading?
                                    <Skeleton variant="rect" width={210} height={118} /> :
                                    getAvailableBeers().length == 0? <Typography variant={"h5"}>No beers currently available, come back soon!</Typography>                                :
                                    getAvailableBeers()
                                        .map((beer) => 
                                            <Grid item xs={12} md={6} lg={4} key={beer.id}>
                                                <BeerDetailsCard beer={beer} onChangeQuantity={(q => updateBeerQuantity(beer, q))}/> 
                                            </Grid>
                                        )
                                }
                            </Grid>
                            <div className="accordion-actions first">
                                { beersSelected()? 
                                    <Button variant="contained" color="primary" onClick={next}>Next</Button> :
                                    <Tooltip title="You gotta pick some beer!">
                                        <span><Button disabled variant="contained" color="primary" onClick={next}>Next</Button></span>
                                    </Tooltip> }
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expandedPanel === 2}>
                        <AccordionSummary aria-controls="choose-delivery" id="choose-delivery">
                            <Typography className="accordion-title" variant={"h4"}>Step 2: Delivery</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection: "column"}}>
                            <Grid container alignItems="stretch" className={"delivery-options"} style={{padding:"1rem"}} spacing={2}>
                                { deliveryOptions.map( option =>
                                    <Grid item xs={12} md={6} lg={4} key={option.name}>
                                        <DeliveryTypeCard 
                                            name={option.name} 
                                            description={option.description} 
                                            icon={option.icon}
                                            selected={deliveryType === option.name} 
                                            onClick={() => setDeliveryType(option.name)}/>
                                    </Grid>
                                )}
                            </Grid>
                            <div className="accordion-actions">
                                <Button variant="contained" color="primary" onClick={previous}>Previous</Button>
                                { deliveryType? 
                                    <Button variant="contained" color="primary" onClick={next}>Next</Button> :
                                    <Tooltip title="Choose a delivery option!">
                                        <span><Button disabled variant="contained" color="primary" onClick={next}>Next</Button></span>
                                    </Tooltip> }
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expandedPanel === 3}>
                        <AccordionSummary aria-controls="enter-details" id="enter-details">
                            <Typography className="accordion-title" variant={"h4"}>Step 3: Enter details</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="form-inputs" style={{flexDirection: "column"}}>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                variant="outlined"
                                value={name || ""}
                                onChange={event => setName(event.target.value)} />
                            <TextField
                                id="phone"
                                label="Phone Number"
                                variant="outlined"
                                value={phoneNumber || ""}
                                onChange={event => setPhoneNumber(event.target.value)} />
                            {deliveryType != "Collection" && <TextField
                                required
                                multiline
                                id="address"
                                label="Address"
                                variant="outlined"
                                value={address || ""}
                                onChange={event => setAddress(event.target.value)} /> }
                            <TextField
                                id="notes"
                                multiline
                                label="Anything else? (e.g. preferred collection/delivery time)"
                                variant="outlined"
                                value={notes || ""}
                                onChange={event => setNotes(event.target.value)} />
                            <div className="accordion-actions">
                                <Button variant="contained" color="primary" onClick={previous}>Previous</Button>
                                <Button variant="contained" color="primary" onClick={order}>Order!</Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </>}
            </div>
            <OrderCompleteDialog 
                handleClose={closeOrderCompleteDialog}
                isOpen={orderCompleteDialogOpen}
                order={createdOrder} />
        </div>  
    );

};

export default OrderForm;
