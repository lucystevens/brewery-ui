import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { TextField, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
import { Slider } from '@material-ui/core';

export interface BeerFilterProps {
    beers: Beer[];
    onFilterChange: (filteredBeers: Beer[]) => void
}

const BeerFilter: React.FC<BeerFilterProps> = ({ beers, onFilterChange }) => {

  const [searchTerm, setSearchTerm] = useState<string>()

    const onSearchTermChanged = (event: any) => {
      setSearchTerm(event.target.value.toLowerCase())
    }

    useEffect(() => {
      onFilterChange(beers.filter(
        b => !searchTerm || b.name.toLowerCase().includes(searchTerm)))
  }, [searchTerm, beers]);

    return (
      <form noValidate>
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" 
          onChange={onSearchTermChanged}/>
      </form>
    );

};

export default BeerFilter;