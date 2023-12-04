import React from 'react'
import styles from './neupass.module.css'
import Typography from 'uiKit/Typography/typography'
import neuIcon from 'assets/icons/neu-icon.svg'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

const Neupass = ({ isLoggedIn, coins }) => {
  const theme = useTheme()

  const loggedInState = (
    <div className={styles.loggedIn_wrapper}>
      <img
        width={16}
        height={16}
        src={neuIcon}
        alt='neuIcon'
        style={{ marginRight: '4px' }}
      />
      <Typography
        variant='caption-xxx-small-regular'
        text={'Earn up to '}
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
          marginRight: '3px',
        }}
      />
      <Typography
        variant='caption-xxx-small-semibold'
        text={`${coins} NeuCoins`}
        style={{ color: theme.palette.color.onBackgroundHighContrast }}
      />
    </div>
  )

  const anonymousState = (
    <div className={styles.anonymous_wrapper}>
      <img
        width={16}
        height={16}
        src={neuIcon}
        alt='neuIcon'
        style={{ marginRight: '4px' }}
      />
      <Typography
        variant='caption-xxx-small-semibold'
        text={`${coins} NeuCoins`}
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
          marginRight: '3px',
        }}
      />
      <Typography
        variant='caption-xxx-small-regular'
        text={'with NeuPass'}
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
        }}
      />
    </div>
  )

  return <>{!isLoggedIn ? loggedInState : anonymousState}</>
}

Neupass.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  coins: PropTypes.number.isRequired,
}

export default React.memo(Neupass)
