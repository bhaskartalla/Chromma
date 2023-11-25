import React from "react";
import { useLocation } from "react-router-dom";

const ProductDescription = () => {
  const location = useLocation();
  return <div>ProductDescription {location.state.skuId}</div>;
};

ProductDescription.propTypes = {};

export default ProductDescription;
