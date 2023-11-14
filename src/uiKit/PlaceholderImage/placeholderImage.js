import React from "react";
import PropTypes from "prop-types";
import defaultImageUrl from "assets/images/placeholder-image.png";

const LoadDefaultImg = ({
  component: Component,
  src,
  alt,
  fallBackImageUrl,
  className,
  ...rest
}) => {
  const [imgError, setImgError] = React.useState(false);
  const [onLoad, setOnLoad] = React.useState(true);

  if (onLoad) {
    return (
      <Component
        {...rest}
        src={defaultImageUrl}
        alt={alt}
        className={className}
        onLoad={() => setOnLoad(false)}
      />
    );
  }

  return imgError ? (
    <Component
      {...rest}
      src={fallBackImageUrl || defaultImageUrl}
      alt={alt}
      className={className}
    />
  ) : (
    <Component
      {...rest}
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  );
};

LoadDefaultImg.propTypes = {
  component: PropTypes.any.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBackImageUrl: PropTypes.string,
};

export default LoadDefaultImg;
