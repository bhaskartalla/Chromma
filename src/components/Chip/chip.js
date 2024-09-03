import React from 'react'
import DownChevronIcon from 'assets/icons/down-chevron-icon'
import Typography from 'uiKit/Typography'
import styles from './chip.module.css'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

const Chip = ({
  text,
  children,
  textVariant,
  isSelected,
  withIcon,
  handleChipClick,
  style,
}) => {
  const theme = useTheme()
  return (
    <div
      style={{
        ...style,
        border: `1px solid ${
          isSelected ? theme.palette.color.primary : theme.palette.color.outline
        }66`,
        background: `${
          isSelected
            ? `${theme.palette.color.primary}14`
            : `${theme.palette.color.surface}3D`
        }`,
      }}
      className={styles.chip_wrapper}
      onClick={handleChipClick}
    >
      <Typography
        variant={textVariant}
        style={{
          color: `${
            isSelected
              ? theme.palette.color.primary
              : theme.palette.color.onBackgroundLowContrast
          }`,
        }}
        text={text || children}
      />
      {withIcon && (
        <DownChevronIcon
          fill={
            isSelected
              ? theme.palette.color.primary
              : theme.palette.color.onSurfaceMidContrast
          }
          style={{
            marginLeft: '8px',
          }}
        />
      )}
    </div>
  )
}

Chip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  textVariant: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  withIcon: PropTypes.bool,
  handleChipClick: PropTypes.func,
  style: PropTypes.object,
}

export default React.memo(Chip)
