import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart";
import Wishlist from "./pages/Wishlist/wishlist";
import PlpPage from "./pages/ProductListing/plp_page";
import GlobalSearchPage from "./pages/GlobalSearch/global_search";
import FiltersPage from "./pages/ProductListing/Filters/filters";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<PlpPage />} />
        <Route path="/global-search" element={<GlobalSearchPage />} />
        <Route path="/filters" element={<FiltersPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

/**
 * No. pages
 * Home page with banner links
 * PLP
 * mega menu
 * cart
 * wishlist
 * global search
 * filters page
 *
 */

/**
 * remove product with no skuid
 * create facets array for inline filters with popular value true
 * make -> below props as required
- facets: PropTypes.array,
- handleCloseFilterModal: PropTypes.func,
 * 
 * 
 * 
 * 
 * 
 * 
 */

export default App;
