import React from 'react'
import PropTypes from 'prop-types'

const LeftChevronIcon = ({
  width = '24',
  height = '24',
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
        viewBox='0 0 12 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.896 2.36L3.528 8.6L10.896 14.84C11.104 15.016 11.216 15.24 11.232 15.512C11.264 15.784 11.192 16.032 11.016 16.256C10.84 16.464 10.608 16.576 10.32 16.592C10.048 16.608 9.808 16.528 9.6 16.352L1.344 9.368C1.088 9.144 0.976001 8.864 1.008 8.528C1.04 8.256 1.152 8.024 1.344 7.832L9.6 0.847999C9.808 0.671999 10.048 0.592 10.32 0.607999C10.608 0.623999 10.84 0.743999 11.016 0.967999C11.192 1.176 11.264 1.416 11.232 1.688C11.216 1.96 11.104 2.184 10.896 2.36Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

LeftChevronIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export default LeftChevronIcon
