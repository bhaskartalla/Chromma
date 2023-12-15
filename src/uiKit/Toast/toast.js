import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './toast.module.css'
import WaringIcon from 'assets/icons/warning-icon'
import CloseIcon from 'assets/icons/close-icon'
import themeHoc from 'utils/themeHoc'
import Typography from 'uiKit/Typography/typography'

const Toast = ({
  theme,
  title,
  description = '',
  duration = 5000,
  open = false,
  onClose,
}) => {
  useEffect(() => {
    let timer
    if (open) timer = setTimeout(() => onClose(), duration)
    return () => clearTimeout(timer)
  }, [open])

  const onCloseClick = () => onClose()

  return (
    open && (
      <div
        id='toast'
        style={{ background: theme.palette.color.background }}
        className={styles.toast_wrapper}
      >
        <div
          style={{ background: theme.palette.color.primary }}
          className={styles.left_line}
        />
        <div className={styles.content_wrapper}>
          <div className={styles.text_content}>
            <WaringIcon fill={theme.palette.color.primary} />
            <div className={styles.title_description}>
              <Typography
                variant='label-button-x-small'
                text={title}
                style={{ color: theme.palette.color.primary }}
              />
              {description && (
                <Typography
                  variant='caption-xx-small-regular'
                  text={description}
                  style={{ color: theme.palette.color.primary }}
                />
              )}
            </div>
          </div>
          <CloseIcon
            width={10}
            height={10}
            fill={theme.palette.color.outline}
            onClick={onCloseClick}
            backgroundColor={theme?.palette.color.surfaceVariant}
          />
        </div>
      </div>
    )
  )
}

Toast.propTypes = {
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  duration: PropTypes.number,
  open: PropTypes.bool.isRequired,
}

export default themeHoc(Toast)
