import React, { ChangeEventHandler, useState } from 'react'
import { TextField } from '@material-ui/core';
import Beer from '../../../../models/Beer';

export interface BeerFilterProps {
    beers: Beer[];
    onFilterChange: (filteredBeers: Beer[]) => void
}

const BeerFilter: React.FC<BeerFilterProps> = ({ beers, onFilterChange }) => {

    const onSearchTermChanged = (event: any) => {
      let value = event.target.value.toLowerCase();
      onFilterChange(beers.filter(
        b => b.name.toLowerCase().includes(value)))
    }

    return (
      <form noValidate>
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={onSearchTermChanged}/>
      </form>
    );

};

export default BeerFilter;