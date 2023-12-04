import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = ({
  width = '16',
  height = '16',
  style,
  withBackground,
  onClick,
  fillBackground,
  fill,
}) => {
  const withoutBackgroundIcon = (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.344 1.312L9.056 7.6L15.344 13.888C15.488 14.032 15.56 14.208 15.56 14.416C15.56 14.624 15.488 14.8 15.344 14.944C15.2 15.088 15.024 15.16 14.816 15.16C14.608 15.16 14.432 15.088 14.288 14.944L8 8.656L1.712 14.944C1.568 15.088 1.392 15.16 1.184 15.16C0.976 15.16 0.8 15.088 0.656 14.944C0.512 14.8 0.44 14.624 0.44 14.416C0.44 14.208 0.512 14.032 0.656 13.888L6.944 7.6L0.656 1.312C0.512 1.168 0.44 0.991999 0.44 0.784C0.44 0.576 0.512 0.4 0.656 0.256C0.8 0.112 0.976 0.0399995 1.184 0.0399995C1.392 0.0399995 1.568 0.112 1.712 0.256L8 6.544L14.288 0.256C14.432 0.112 14.608 0.0399995 14.816 0.0399995C15.024 0.0399995 15.2 0.112 15.344 0.256C15.488 0.4 15.56 0.576 15.56 0.784C15.56 0.991999 15.488 1.168 15.344 1.312Z'
        fill={fill}
      />
    </svg>
  )
  const withBackgroundIcon = (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='24' height='24' rx='12' fill={fillBackground} />
      <path
        d='M16.896 8.208L12.704 12.4L16.896 16.592C16.992 16.688 17.04 16.8053 17.04 16.944C17.04 17.0827 16.992 17.2 16.896 17.296C16.8 17.392 16.6827 17.44 16.544 17.44C16.4053 17.44 16.288 17.392 16.192 17.296L12 13.104L7.808 17.296C7.712 17.392 7.59467 17.44 7.456 17.44C7.31733 17.44 7.2 17.392 7.104 17.296C7.008 17.2 6.96 17.0827 6.96 16.944C6.96 16.8053 7.008 16.688 7.104 16.592L11.296 12.4L7.104 8.208C7.008 8.112 6.96 7.99467 6.96 7.856C6.96 7.71733 7.008 7.6 7.104 7.504C7.2 7.408 7.31733 7.36 7.456 7.36C7.59467 7.36 7.712 7.408 7.808 7.504L12 11.696L16.192 7.504C16.288 7.408 16.4053 7.36 16.544 7.36C16.6827 7.36 16.8 7.408 16.896 7.504C16.992 7.6 17.04 7.71733 17.04 7.856C17.04 7.99467 16.992 8.112 16.896 8.208Z'
        fill={fill}
      />
    </svg>
  )

  return (
    <div onClick={onClick} style={{ ...style }}>
      {withBackground ? withBackgroundIcon : withoutBackgroundIcon}
    </div>
  )
}

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fillBackground: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
  withBackground: PropTypes.bool,
  onClick: PropTypes.func,
}

export default CloseIcon
