import PropTypes from 'prop-types'
import React from 'react'
import { lightTheme } from 'theme'
import BottomSheet from 'uiKit/BottomSheet/bottom_sheet'
import Typography from 'uiKit/Typography/typography'
import themeHoc from 'utils/themeHoc'
import Radio from 'uiKit/Radio/radio'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlpApiResponse } from '../../state/plpState/action_creators'

const SortFilters = ({
  sorts,
  isSortFiltersBSOpen,
  handleSorFiltersCloseBS,
  theme = lightTheme,
}) => {
  const params = useSelector((state) => state.plpReducer.params)
  const dispatch = useDispatch()

  const handleOnChange = (code) => {
    dispatch(
      fetchPlpApiResponse({
        ...params,
        sortBy: code,
      })
    )
    handleSorFiltersCloseBS()
  }

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
      <div
        style={{
          margin: '8px 0 16px',
        }}
      >
        {sorts?.map((sort) => (
          <div style={{ marginTop: '16px' }} key={sort.code}>
            <Radio
              textVariant='label-x-small-regular'
              fillChecked={theme.palette.color.secondary}
              fillOutline={theme.palette.color.outline}
              text={sort.name}
              textColor={theme.palette.color.onBackgroundHighContrast}
              checked={sort.selected}
              onChange={() => handleOnChange(sort.code)}
            />
          </div>
        ))}
      </div>
    </BottomSheet>
  )
}

SortFilters.propTypes = {
  sorts: PropTypes.array,
  isSortFiltersBSOpen: PropTypes.bool,
  handleSorFiltersCloseBS: PropTypes.func,
  theme: PropTypes.object,
}

export default themeHoc(SortFilters)
