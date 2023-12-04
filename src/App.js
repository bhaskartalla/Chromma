import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Wishlist from './pages/Wishlist/wishlist'
import PlpPage from './pages/ProductListing/plp_page'
import ProductDescription from './pages/ProductDescription/pdp_page'
import GlobalSearchPage from './pages/GlobalSearch/global_search'
import FiltersPage from './pages/ProductListing/Filters/filters'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-listing' element={<PlpPage />} />
        <Route path='/product-description' element={<ProductDescription />} />
        <Route path='/global-search' element={<GlobalSearchPage />} />
        <Route path='/filters' element={<FiltersPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  )
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
 * radio facet ui development for multiselect value false
 * lazy loading of components
 * create theme setup for light and dark
 * Add a error boundry HOC component
 * pincode and view store text alignment need to be fixed
 * keep all the urls in constant file
 * move all hardcoded string values in other file
 * add env file
 * Remove the palate object from theme
 *
 */

export default App
