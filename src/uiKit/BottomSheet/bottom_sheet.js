import React from 'react'
import PropTypes from 'prop-types'
import styles from './bottom_sheet.module.css'

const BottomSheet = ({ open = true, onClose, children, theme }) => {
  return (
    <>
      <div
        // style={{ background: `${theme.palette.color.background}99` }}
        className={`${styles.bottom_sheet_wrapper} ${
          open ? styles.open_wrapper : ''
        }`}
        onClick={onClose}
      />
      <div
        style={{ background: `${theme.palette.color.background}` }}
        className={`${styles.bottom_sheet_content} ${
          open ? styles.open_content : ''
        } `}
      >
        <div className={styles.drag_handle_wrapper}>
          <div
            style={{ background: `${theme.palette.color.onSurfaceVariant}` }}
            className={styles.drag_handle}
          ></div>
        </div>
        {children}
      </div>
    </>
  )
}

BottomSheet.propTypes = {}

export default BottomSheet
