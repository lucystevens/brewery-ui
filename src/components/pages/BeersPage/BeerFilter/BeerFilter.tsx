import React, { useEffect, useState } from 'react'
import { FormHelperText, TextField, Typography } from '@material-ui/core';
import Beer from 'models/Beer';
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
    onFilterChange: (filters: ((beer: Beer) => boolean)[]) => void
}

const BeerFilter: React.FC<BeerFilterProps> = ({ beers, onFilterChange }) => {

  const [searchTerm, setSearchTerm] = useState<string>()
  const [selectedStyles, setSelectedStyles] = useState(new Set())

    const onSearchTermChanged = (event: any) => {
      setSearchTerm(event.target.value.toLowerCase())
    }

    const handleTagSelected = (event: any) => {
      let updatedStyles = new Set(selectedStyles);
      if(event.target.checked){
        updatedStyles.add(event.target.name)
      }
      else {
        updatedStyles.delete(event.target.name)
      }
      setSelectedStyles(updatedStyles)
    }

    const getAllTags = (): FilterQuality[] => {
      let tags = new Map<string, FilterQuality>()
      beers.flatMap(b => b.tags || [])
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
      beers.forEach(beer => {
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

    useEffect(() => {
      onFilterChange([
        b => !searchTerm || b.name.toLowerCase().includes(searchTerm),
        b => selectedStyles.size == 0 || selectedStyles.has(b.style)
      ])
    }, [onFilterChange, searchTerm, selectedStyles]);

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
                <FormControlLabel key={style.key}
                  control={<Checkbox onChange={handleTagSelected} name={style.name} />}
                  label={`${style.name} (${style.count})`}/>)
              }
            </FormGroup>
            </div>
        </FormControl>
      </div>
    );

};

export default BeerFilter;