import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import './OrderCompleteDialog.scss'
import { CreatedOrder } from 'models/BeerOrder';

export interface OrderCompleteDialogProps {
    order?: CreatedOrder
    isOpen: boolean
    handleClose: () => void
}

const OrderCompleteDialog: React.FC<OrderCompleteDialogProps> = ({ order, isOpen, handleClose }) => {

    const getMonzoUrl = () => {
        if(order){
            let price = (order.orderTotal / 100).toFixed(2)
            return `https://monzo.me/lucycmstevens/${price}?d=Ref%3A%20%23${order.orderRef}%20%F0%9F%8D%BA`
        } else return ""
    }

    return (
        <Dialog onClose={handleClose} open={isOpen}>
            <DialogTitle>Thanks for your order!</DialogTitle>
            <DialogContent className="dialog-content">
            <Typography gutterBottom>
                Not long to go until you can taste your cold, refreshing beer, but
                before we get to that, can you please click the link below to pay via Monzo.
            </Typography>
            <Button 
                className="pay-button"
                color="primary"
                variant="contained" 
                href={getMonzoUrl()} 
                target="_blank"
                size="large">
                    Pay!
                </Button>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>
                Done!
            </Button>
            </DialogActions>
        </Dialog>
    );

};

export default OrderCompleteDialog;