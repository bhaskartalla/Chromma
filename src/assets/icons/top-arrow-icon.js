import React from 'react'
import PropTypes from 'prop-types'

const TopArrowIcon = ({
  width = '16',
  height = '16',
  fill = '#FFFFFF',
  style,
  onClick,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        width={width}
        height={height}
        viewBox='0 0 12 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.632 0.183999C5.728 0.0986662 5.84 0.0559998 5.968 0.0559998C6.096 0.0559998 6.208 0.0986662 6.304 0.183999L11.68 4.984C11.7867 5.08 11.84 5.19733 11.84 5.336C11.8507 5.464 11.808 5.58133 11.712 5.688C11.6267 5.79467 11.5147 5.85333 11.376 5.864C11.2373 5.864 11.1147 5.82133 11.008 5.736L6.528 1.72V14.248C6.528 14.3867 6.48 14.504 6.384 14.6C6.288 14.696 6.17067 14.744 6.032 14.744C5.89333 14.744 5.77067 14.696 5.664 14.6C5.568 14.504 5.52 14.3867 5.52 14.248V1.624L0.976 5.752C0.869334 5.848 0.746667 5.896 0.608 5.896C0.48 5.88533 0.368 5.82667 0.272 5.72C0.176 5.61333 0.128 5.496 0.128 5.368C0.138667 5.22933 0.197333 5.112 0.304 5.016L5.632 0.183999Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

TopArrowIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export default TopArrowIcon
