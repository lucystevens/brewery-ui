import React, { useEffect, useState } from 'react'
import { TextField, Typography } from '@material-ui/core';
import Beer from 'models/Beer';
import { distinct } from 'utils/ArrayUtils';

export interface BeerFilterProps {
    beers: Beer[];
    onFilterChange: (filteredBeers: Beer[]) => void
}

const BeerFilter: React.FC<BeerFilterProps> = ({ beers, onFilterChange }) => {

  const [searchTerm, setSearchTerm] = useState<string>()

    const onSearchTermChanged = (event: any) => {
      setSearchTerm(event.target.value.toLowerCase())
    }

    const getAllTags = () => {
      return distinct(
        beers.flatMap(b => b.tags || []));
    }

    useEffect(() => {
      onFilterChange(beers.filter(
        b => !searchTerm || b.name.toLowerCase().includes(searchTerm)))
  }, [searchTerm, beers, onFilterChange]);

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