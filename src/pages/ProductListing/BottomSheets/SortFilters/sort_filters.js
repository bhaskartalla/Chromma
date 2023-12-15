import React from 'react'
import PropTypes from 'prop-types'
import BottomSheet from 'uiKit/BottomSheet/bottom_sheet'
import themeHoc from 'utils/themeHoc'
import { lightTheme } from 'theme'
import Typography from 'uiKit/Typography/typography'
import Checkbox from 'uiKit/Checkbox/checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const SortFilters = ({
  isSortFiltersBSOpen,
  handleSorFiltersCloseBS,
  theme = lightTheme,
}) => {
  return (
    <BottomSheet
      open={isSortFiltersBSOpen}
      onClose={handleSorFiltersCloseBS}
      theme={lightTheme}
    >
      <Typography
        text='Sort By'
        variant='title-medium-bold'
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
        }}
      />
      <div style={{}}>
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel
              value='male'
              control={<Radio color='success' />}
              label='Male'
            />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </RadioGroup>
        </FormControl>
      </div>
    </BottomSheet>
  )
}

SortFilters.propTypes = {}

export default themeHoc(SortFilters)
