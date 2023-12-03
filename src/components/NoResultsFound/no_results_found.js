import React from 'react'
import styles from './no_results_found.module.css'
import connectionImage from 'assets/images/connection-image.png'
import Typography from 'uiKit/Typography/typography'
import { useTheme } from '@mui/material'

const NoResultsFound = () => {
  const theme = useTheme()

  return (
    <div className={styles.no_results_found_wrapper}>
      <img
        src={connectionImage}
        width={142}
        height={125}
        alt='End of scroll card'
      />
      <Typography
        variant='title-medium-bold'
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
          marginTop: '16px',
        }}
        text='Sorry! No result found'
      />
      <Typography
        variant='body-x-small-regular '
        style={{
          color: theme.palette.color.onSurfaceLowContrast,
          marginTop: '8px',
          textAlign: 'center',
          width: '218px',
        }}
        text='We’re sorry you were looking for. Please try another way'
      />
    </div>
  )
}

export default React.memo(NoResultsFound)
