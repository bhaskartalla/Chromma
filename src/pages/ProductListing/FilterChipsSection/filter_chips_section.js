import React from 'react'
import Chip from 'components/Chip/chip'
import styles from './filter_chips_section.module.css'
import FiltersIcon from 'assets/icons/filters-icon'
import PropTypes from 'prop-types'
import Typography from 'uiKit/Typography'
import { useTheme } from '@mui/material'

const FilterChipsSection = ({
  isSortChipSelected,
  facets,
  handleSortOpenBS,
  handleFilterModal,
}) => {
  const theme = useTheme()

  let filtersSelectedCount = facets.filter(
    (facet) => facet.selectedValueCount > 0
  ).length

  const selectedFacets = []
  const unSelectedFacets = []
  facets.forEach((facet) => {
    if (facet.selectedValueCount > 0) {
      selectedFacets.push(facet)
    } else {
      unSelectedFacets.push(facet)
    }
  })
  const newFacets = [...selectedFacets, ...unSelectedFacets]

  const selectedFilterIcon = (count) => {
    count = isSortChipSelected ? count + 1 : count
    const selected = count > 0
    return (
      <div
        id='filter_icon'
        style={{
          border: `1px solid ${
            selected ? theme.palette.color.primary : theme.palette.color.outline
          }66`,
          background: `${
            selected
              ? `${theme.palette.color.primary}14`
              : `${theme.palette.color.surface}3D`
          }`,
        }}
        className={styles.filter_icon_wrapper}
        onClick={() => handleFilterModal('')}
      >
        {selected ? (
          <>
            <div
              style={{
                background: theme.palette.color.primary,
              }}
              className={styles.filter_selected_count}
            >
              <Typography
                variant='caption-xx-small-semibold'
                text={count}
                style={{
                  color: theme.palette.color.onPrimary,
                }}
              />
            </div>
            <FiltersIcon fill={theme.palette.color.primary} />
          </>
        ) : (
          <FiltersIcon fill={theme.palette.color.onSurfaceMidContrast} />
        )}
      </div>
    )
  }

  return (
    <div className={styles.filter_chips_wrapper}>
      {selectedFilterIcon(filtersSelectedCount)}
      <div className={styles.filter_chips_section}>
        <Chip
          textVariant='caption-xx-small-semibold'
          text='Sort'
          withIcon
          isSelected={isSortChipSelected}
          handleChipClick={handleSortOpenBS}
        />
        {newFacets.map((facet, index) => {
          const isSelected = facet.values.some((value) => value.selected)
          return (
            <Chip
              textVariant='caption-xx-small-semibold'
              key={facet.code}
              text={facet.name}
              withIcon
              isSelected={isSelected}
              handleChipClick={() => handleFilterModal(facet.code)}
              style={{
                marginRight: `${
                  index === facets.length - 1 ? '12px' : 'unset'
                }`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

FilterChipsSection.propTypes = {
  facets: PropTypes.array.isRequired,
  handleFilterModal: PropTypes.func.isRequired,
  handleSortOpenBS: PropTypes.func.isRequired,
}

export default React.memo(FilterChipsSection)
