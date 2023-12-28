import React from 'react'
import PropTypes from 'prop-types'
import defaultImageUrl from 'assets/images/placeholder-image.png'

const PlaceHolderImage = ({
  src,
  alt,
  fallBackImageUrl,
  className,
  ...rest
}) => {
  const [imgError, setImgError] = React.useState(false)
  const [onLoad, setOnLoad] = React.useState(true)

  if (onLoad) {
    return (
      <img
        {...rest}
        src={defaultImageUrl}
        alt={alt}
        className={className}
        onLoad={() => setOnLoad(false)}
      />
    )
  }

  return imgError ? (
    <img
      {...rest}
      src={fallBackImageUrl || defaultImageUrl}
      alt={alt}
      className={className}
    />
  ) : (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  )
}

PlaceHolderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBackImageUrl: PropTypes.string,
}

export default PlaceHolderImage
