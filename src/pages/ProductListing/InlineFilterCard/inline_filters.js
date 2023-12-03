import React from 'react'
import styles from './inline_filters.module.css'
import Typography from 'uiKit/Typography/typography'
import Button from 'uiKit/Button/button'
import PropTypes from 'prop-types'
import Chip from 'components/Chip/chip'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateInternalFacetValue,
  fetchPlpApiResponse,
} from '../state/action_creators'
import { useSearchParams } from 'react-router-dom'
import { useTheme } from '@mui/material'

const InlineFilters = ({ facets, handleSeeAllFilters }) => {
  const plpResponse = useSelector((state) => state.plpReducer)
  const dispatch = useDispatch()
  const [params] = useSearchParams()
  const theme = useTheme()
  const query = params.get('query')
  const { internalResponse } = plpResponse

  const handleShowItems = () => {
    dispatch(
      fetchPlpApiResponse({
        category: 'electronics',
        pinCode: '400001',
        query,
        sortBy: 'relevance',
        filter: internalResponse.internalFilterString,
        currentPage: 0,
      })
    )
  }

  return (
    facets.length > 0 && (
      <div className={styles.inline_filter_wrapper}>
        {facets?.map((facet) => (
          <div key={facet.code} style={{ marginTop: '16px' }}>
            <Typography
              variant='body-small-bold'
              text={`Filter by ${facet.name}`}
              style={{
                color: theme.palette.color.onBackgroundMidContrast,
                margin: '0 16px',
              }}
            />
            <div className={styles.filter_chips}>
              {facet.values.map((value, index) => (
                <div
                  key={value.code}
                  style={{
                    marginLeft: `${index === 0 ? '16px' : 'unset'}`,
                    marginRight: `${
                      index === facet.values.length - 1 ? '16px' : 'unset'
                    }`,
                  }}
                >
                  <Chip
                    text={value.name}
                    isSelected={value.selected}
                    textVariant='body-x-small-regular'
                    handleChipClick={() => {
                      dispatch(
                        updateInternalFacetValue({
                          facetCode: facet.code,
                          valueCode: value.code,
                          state: !value.selected,
                        })
                      )
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.see_all_filter}>
          <Typography
            variant='label-button-x-small'
            text={'See all filters'.toUpperCase()}
            style={{ color: theme.palette.color.primary, cursor: 'pointer' }}
            onClick={handleSeeAllFilters}
          />
          <Button
            textVariant='label-button-x-small'
            textColor={theme.palette.color.onPrimary}
            text={'Show items'.toUpperCase()}
            handleOnClick={handleShowItems}
          />
        </div>
      </div>
    )
  )
}

InlineFilters.propTypes = {
  facets: PropTypes.array.isRequired,
  handleSeeAllFilters: PropTypes.func.isRequired,
}

export default InlineFilters
