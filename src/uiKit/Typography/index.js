import React, { forwardRef } from 'react'
import styles from './typography.module.css'
import PropTypes from 'prop-types'

const Typography = forwardRef(
  ({ variant, text, children, style, ...rest }, ref) => (
    <span
      ref={ref}
      style={{ ...style }}
      className={styles[variant]}
      {...rest}
    >
      {children || text}
    </span>
  )
)

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.any,
  children: PropTypes.any,
  style: PropTypes.object,
}

export default Typography
