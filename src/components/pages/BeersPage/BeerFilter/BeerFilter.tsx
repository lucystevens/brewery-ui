import React, { useEffect, useState } from 'react'
import { FormHelperText, TextField, Typography } from '@material-ui/core';
import Beer from 'models/Beer';
import { distinct } from 'utils/ArrayUtils';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import FilterQuality from 'models/FilterQuality';
import BeerStyle from 'models/BeerStyle';
import { useCallback } from 'react';
import './BeerFilter.scss'

export interface BeerFilterProps {
    beers: Beer[];
    onFilterChange: (filteredBeers: Beer[]) => void
}

const BeerFilter: React.FC<BeerFilterProps> = ({ beers, onFilterChange }) => {

  const [searchTerm, setSearchTerm] = useState<string>()

    const onSearchTermChanged = (event: any) => {
      setSearchTerm(event.target.value.toLowerCase())
    }

    const handleTagSelected = (event: any) => {
      console.log(event.target.name + " " + event.target.checked)
    }

    const getAllTags = (): FilterQuality[] => {
      let tags = new Map<string, FilterQuality>()
      applyFilters(beers).flatMap(b => b.tags || [])
        .forEach(tag => {
        let quality = tags.get(tag) || {
          key: tag,
          name: tag,
          count: 0,
          selected: false
        }
        quality.count++
        tags.set(tag, quality)
      })
      return Array.from(tags.values())
    }

    
    const getAllStyles = (): FilterQuality[] => {
      let styles = new Map<BeerStyle, FilterQuality>()
      applyFilters(beers).forEach(beer => {
        let quality = styles.get(beer.style) || {
          key: beer.style,
          name: beer.style,
          count: 0,
          selected: false
        }
        quality.count++
        styles.set(beer.style, quality)
      })
      return Array.from(styles.values())
    }

    const applyFilters = useCallback((beers: Beer[]): Beer[] => {
      return beers.filter(
        b => !searchTerm || b.name.toLowerCase().includes(searchTerm))
    }, [searchTerm]);

    useEffect(() => {
      onFilterChange(applyFilters(beers))
    }, [applyFilters, beers, onFilterChange]);

    return (

      <div>
        <FormControl component="fieldset">
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" 
          style={{margin:"1rem"}}
          onChange={onSearchTermChanged}/>

          <div className="tags" style={{margin:"1rem"}}>
            <FormLabel component="label">Styles</FormLabel>
            <FormGroup>
              {getAllStyles().map(style => 
                <FormControlLabel
                  control={<Checkbox onChange={handleTagSelected} key={style.key} name={style.name} />}
                  label={`${style.name} (${style.count})`}/>)
              }
            </FormGroup>
            </div>
        </FormControl>
      </div>
    );

};

export default BeerFilter;