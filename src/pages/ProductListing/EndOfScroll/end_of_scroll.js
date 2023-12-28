import React from 'react'
import styles from './end_of_scroll.module.css'
import endOfScrollImage from 'assets/images/end-of-scroll-image.png'
import Typography from 'uiKit/Typography/typography'
import TopArrowIcon from 'assets/icons/top-arrow-icon'

import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

const EndOfScroll = ({ handleScrollToTop }) => {
  const theme = useTheme()
  return (
    <div
      style={{
        background: theme.palette.color.surface,
      }}
      className={styles.end_of_scroll_wrapper}
    >
      <img src={endOfScrollImage} alt='End of scroll card' />
      <Typography
        variant='title-medium-bold'
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
          marginTop: '8px',
        }}
        text='Grab it Now!'
      />
      <Typography
        variant='body-x-small-regular '
        style={{
          color: theme.palette.color.onSurfaceLowContrast,
          marginTop: '8px',
        }}
        text='Tomorrow it might be gone forever'
      />
      <div className={styles.back_to_top_button} onClick={handleScrollToTop}>
        <TopArrowIcon fill={theme.palette.color.onBackgroundHighContrast} />
      </div>
    </div>
  )
}

EndOfScroll.propTypes = {
  handleScrollToTop: PropTypes.func.isRequired,
}

export default React.memo(EndOfScroll)
