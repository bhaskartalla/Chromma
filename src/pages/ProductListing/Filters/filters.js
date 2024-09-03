import React, { useState } from 'react'
import styles from './filters.module.css'
import Typography from 'uiKit/Typography'
import Button from 'uiKit/Button/button'
import CloseIcon from 'assets/icons/close-icon'
import PropTypes from 'prop-types'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import DownChevronIcon from 'assets/icons/down-chevron-icon'
import Searchbar from 'components/Searchbar/searchbar'
import Checkbox from 'uiKit/Checkbox/checkbox'
import Inputbox from 'uiKit/Inputbox/inputbox'
import LeftChevronIcon from 'assets/icons/left-chevron-icon'

import { useSelector, useDispatch } from 'react-redux'
import {
  updateInternalFacetValue,
  resetAllFacetsValues,
  fetchFilterApiResponse,
  fetchPlpApiResponse,
} from '../state/plpState/action_creators'
import PageLoader from 'uiKit/Loaders/page_loader'
import themeHoc from 'utils/themeHoc'

const Filters = ({
  defaultSelectedFacet,
  handleCloseFilterModal,
  handleFilterModal,
  theme,
}) => {
  const plpResponse = useSelector((state) => state.plpReducer)
  const dispatch = useDispatch()
  const [expandedFacet, setExpandedFacet] = useState(defaultSelectedFacet)
  const [filterSearch, setFilterSearch] = useState({
    state: false,
    facet: {},
    setFocus: false,
  })

  const { internalResponse, params } = plpResponse

  const {
    isFilterApiLoading,
    internalFacets,
    internalFilterItemCount,
    internalFilterString,
  } = internalResponse

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedFacet(isExpanded ? panel : false)
    handleFilterModal(panel)

    if (isExpanded && internalFilterString !== params.filter) {
      dispatch(
        fetchFilterApiResponse({
          ...params,
          filter: internalFilterString,
          currentPage: 0,
        })
      )
    }
  }

  const handleTextChange = (text) => {
    const filteredValues = internalFacets
      .filter((facet) => facet.code === filterSearch.facet.code)[0]
      .values.filter((value) => {
        return value.name.toLowerCase().includes(text.toLowerCase())
      })

    setFilterSearch((prev) => ({
      state: true,
      facet: {
        ...prev.facet,
        values: filteredValues,
      },
    }))
  }

  const handleFilterSearchModal = (facet, setFocus) => {
    setFilterSearch({ state: true, facet, setFocus })
  }

  const handleResetFilters = () => dispatch(resetAllFacetsValues())

  const filterHeader = (
    <div className={styles.filter_header_bar}>
      <Typography
        variant='body-medium-regular'
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
          left: '45%',
          position: 'absolute',
        }}
        text='Filters'
      />
      <CloseIcon
        fill={theme.palette.color.onBackgroundHighContrast}
        onClick={handleCloseFilterModal}
        backgroundColor={theme?.palette.color.surfaceVariant}
        style={{
          marginLeft: 'auto',
        }}
      />
    </div>
  )

  const filterSearchHeader = (
    <div className={styles.filter_search_header_bar}>
      <LeftChevronIcon
        fill={theme.palette.color.onBackgroundHighContrast}
        onClick={() => setFilterSearch({ state: false, facetName: {} })}
        style={{
          marginRight: '16px',
        }}
      />
      <Typography
        variant='body-medium-regular'
        style={{ color: theme.palette.color.onBackgroundHighContrast }}
        text={filterSearch?.facet?.name}
      />
      <CloseIcon
        fill={theme.palette.color.onBackgroundHighContrast}
        onClick={handleCloseFilterModal}
        backgroundColor={theme?.palette.color.surfaceVariant}
        style={{
          marginLeft: 'auto',
        }}
      />
    </div>
  )

  const bottomBlock = (
    <div
      style={{
        background: theme.palette.color.background,
      }}
      className={styles.bottom_bar}
    >
      <Typography
        variant='body-x-small-regular'
        style={{ color: theme.palette.color.onSurfaceLowContrast }}
        text={`${internalFilterItemCount} ${
          internalFilterItemCount > 1 ? 'items' : 'item'
        }`}
      />
      <div className={styles.rest_apply_wrapper}>
        <Typography
          variant='label-button-x-small'
          style={{ color: theme.palette.color.primary, cursor: 'pointer' }}
          text={'RESET'}
          onClick={handleResetFilters}
        />
        <Button
          text='Apply'
          textVariant='label-button-x-small'
          textColor='#FFFFFF'
          style={{
            backgroundColor: theme.palette.color.primary,
            width: '128px',
            height: '40px',
          }}
          handleOnClick={() => {
            handleCloseFilterModal()
            dispatch(
              fetchPlpApiResponse({
                ...params,
                filter: internalFilterString,
                currentPage: 0,
              })
            )
          }}
        />
      </div>
    </div>
  )

  const renderFacetValues = (facet, count) => (
    <div className={styles.accordion_details}>
      {facet?.values?.slice(0, count).map((value, index) => (
        <div
          key={value.code}
          style={{ marginTop: index === 0 ? '8px' : '24px' }}
          className={styles.checkbox_wrapper}
        >
          {facet.multiSelect ? (
            <Checkbox
              textVariant='label-x-small-regular'
              textColor={theme.palette.color.onBackgroundHighContrast}
              text={`${value.name} (${value.count})`}
              checked={value.selected}
              onChange={() => {
                dispatch(
                  updateInternalFacetValue({
                    facetCode: facet.code,
                    valueCode: value.code,
                    state: !value.selected,
                  })
                )
              }}
              fillChecked={theme.palette.color.secondary}
              fillOutline={theme.palette.color.outline}
            />
          ) : (
            <div id='radio-button' />
          )}
        </div>
      ))}
    </div>
  )

  const accordionCheckboxRadio = internalFacets?.map((facet) => (
    <div key={facet.code}>
      <Accordion
        id='Accordion'
        expanded={expandedFacet === facet.code}
        onChange={handleChange(facet.code)}
      >
        <AccordionSummary
          id={`${facet.code}-header`}
          expandIcon={
            <DownChevronIcon
              fill={theme.palette.color.onBackgroundHighContrast}
            />
          }
        >
          <Typography
            variant='body-small-regular'
            text={facet.name}
            style={{ color: theme.palette.color.onBackgroundHighContrast }}
          />
          {facet?.selectedValueCount > 0 && (
            <div
              style={{
                border: `2px solid ${theme.palette.color.background}`,
                background: theme.palette.color.primary,
              }}
              className={styles.selectedValueCount}
            >
              <Typography
                variant='caption-xx-small-semibold'
                text={facet?.selectedValueCount}
                style={{ color: theme.palette.color.onPrimary }}
              />
            </div>
          )}
        </AccordionSummary>
        <AccordionDetails id={`${facet.code}-details`}>
          {facet.isSearchEnabled && (
            <div style={{ marginBottom: '24px' }}>
              <Searchbar
                searchedText={`Search ${facet.name}`}
                closeIconType={'CircleCloseIcon'}
                handleSearchBarClick={() => {
                  handleFilterSearchModal(facet, true)
                }}
                withCloseIcon={false}
                theme={theme}
              />
            </div>
          )}
          {renderFacetValues(facet, 3)}
          {facet.values.length > 3 && (
            <div className={styles.view_more}>
              <Typography
                variant='label-button-x-small'
                text={`${facet.values.length - 3} more`.toUpperCase()}
                style={{
                  color: theme.palette.color.primary,
                  cursor: 'pointer',
                }}
                onClick={() => handleFilterSearchModal(facet, false)}
              />
            </div>
          )}
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          margin: '0 16px',
          background: theme.palette.color.outline,
        }}
        className={styles.accordion_divider}
      />
    </div>
  ))

  const filterSearchSection = (
    <div
      id='filter-search'
      className={styles.filter_search}
    >
      <div style={{ margin: '0 16px' }}>
        <Inputbox
          theme={theme}
          placeholder={`Search ${filterSearch?.facet?.name}`}
          onChange={handleTextChange}
          setFocus={filterSearch.setFocus}
        />
      </div>
      <div
        style={{
          margin: '16px 0 20px',
        }}
        className={styles.accordion_divider}
      />
      {renderFacetValues(filterSearch.facet)}
    </div>
  )

  return (
    <>
      {isFilterApiLoading && <PageLoader variant='transparent' />}
      <div
        id='filter_wrapper'
        style={{
          background: theme.palette.color.background,
        }}
        className={styles.filter_wrapper}
      >
        {filterSearch.state ? filterSearchHeader : filterHeader}
        <div
          id='accordion-wrapper'
          className={styles.accordion_wrapper}
        >
          {filterSearch.state ? filterSearchSection : accordionCheckboxRadio}
        </div>
        {bottomBlock}
      </div>
    </>
  )
}

Filters.propTypes = {
  defaultSelectedFacet: PropTypes.string,
  handleCloseFilterModal: PropTypes.func,
  handleFilterModal: PropTypes.func,
  theme: PropTypes.object.isRequired,
}

export default React.memo(themeHoc(Filters))
