import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/product-listing">PLP Page</Link>
        </li>
        <li>
          <Link to="/global-search">Search page</Link>
        </li>
        <li>
          <Link to="/cart">Cart page</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
