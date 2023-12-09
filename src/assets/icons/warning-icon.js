import React from 'react'
import PropTypes from 'prop-types'

const WaringIcon = ({ width = 24, height = 24, fill, style }) => {
  return (
    <div style={{ display: 'flex', ...style }}>
      <svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.5 12.04C2.5 6.7712 6.7712 2.5 12.04 2.5C17.3088 2.5 21.58 6.7712 21.58 12.04C21.58 17.3088 17.3088 21.58 12.04 21.58C6.7712 21.58 2.5 17.3088 2.5 12.04ZM12.04 1C5.94278 1 1 5.94278 1 12.04C1 18.1372 5.94278 23.08 12.04 23.08C18.1372 23.08 23.08 18.1372 23.08 12.04C23.08 5.94278 18.1372 1 12.04 1ZM12.04 6.80005C12.4543 6.80005 12.79 7.13584 12.79 7.55005V13.41C12.79 13.8243 12.4543 14.16 12.04 14.16C11.6258 14.16 11.29 13.8243 11.29 13.41V7.55005C11.29 7.13584 11.6258 6.80005 12.04 6.80005ZM12.04 17.36C12.5426 17.36 12.95 16.9526 12.95 16.45C12.95 15.9475 12.5426 15.54 12.04 15.54C11.5374 15.54 11.13 15.9475 11.13 16.45C11.13 16.9526 11.5374 17.36 12.04 17.36Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}
WaringIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  style: PropTypes.object,
}

export default WaringIcon
