import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, IconButton, SvgIcon, SvgIconTypeMap, Typography } from '@material-ui/core';
import './DeliveryTypeCard.scss'
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface DeliveryTypeCardProps {
    name: string
    description: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    selected: boolean;
    onClick: () => void
}

const DeliveryTypeCard: React.FC<DeliveryTypeCardProps> = ({name, description, icon, selected, onClick, children }) => {

    return (
        <Card className={"card-root" + (selected? " selected" : "")} onClick={onClick}>
          <CardContent className="card-content">
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <SvgIcon component={ icon }/>
            </div>
            <div className="card-desc">
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </div>
          </CardContent>
      </Card>
    );

};

export default DeliveryTypeCard;