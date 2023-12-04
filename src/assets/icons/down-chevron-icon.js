import React from 'react'
import PropTypes from 'prop-types'

const DownChevronIcon = ({
  width = '16',
  height = '16',
  fill = '#FFFFFF',
  style,
}) => {
  return (
    <div
      style={{
        ...style,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox='0 0 12 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.184 1.16L6.512 6.664C6.384 6.81333 6.21867 6.888 6.016 6.888C5.92 6.89867 5.824 6.88267 5.728 6.84C5.632 6.79733 5.552 6.73867 5.488 6.664L0.832 1.16C0.714667 1.02133 0.661333 0.861333 0.672 0.679999C0.682667 0.498666 0.757334 0.349333 0.896 0.231999C1.03467 0.114666 1.19467 0.061333 1.376 0.0719995C1.568 0.0826661 1.72267 0.157333 1.84 0.296L6 5.208L10.16 0.296C10.2773 0.157333 10.4267 0.0826661 10.608 0.0719995C10.8 0.061333 10.9653 0.114666 11.104 0.231999C11.2427 0.338666 11.3173 0.487999 11.328 0.679999C11.3493 0.861333 11.3013 1.02133 11.184 1.16Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

DownChevronIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
}

export default DownChevronIcon
