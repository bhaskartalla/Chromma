import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Toast from 'uiKit/Toast/toast'
import { useTheme } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { closeToast } from './globalState/actions'
import PageLoader from 'uiKit/Loaders/page_loader'

// lazy imports
const Home = lazy(() => import('./pages/Home/home'))
const Cart = lazy(() => import('./pages/Cart/cart'))
const Wishlist = lazy(() => import('./pages/Wishlist/wishlist'))
const PlpPage = lazy(() => import('./pages/ProductListing/plp_page'))
const ProductDescription = lazy(() =>
  import('./pages/ProductDescription/pdp_page')
)
const GlobalSearchPage = lazy(() =>
  import('./pages/GlobalSearch/global_search')
)

function App() {
  const toast = useSelector((state) => state.commonReducer)
  const dispatch = useDispatch()
  const theme = useTheme()

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-listing' element={<PlpPage />} />
          <Route path='/product-description' element={<ProductDescription />} />
          <Route path='/global-search' element={<GlobalSearchPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </Suspense>

      <Toast
        theme={toast?.theme || theme}
        title={toast.title}
        open={toast.isOpen}
        description={toast.description}
        duration={toast.duration}
        onClose={() => {
          dispatch(closeToast())
        }}
      />
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
 * create theme setup for light and dark
 * Add a error boundry HOC component
 * pincode and view store text alignment need to be fixed
 * keep all the urls in constant file
 * move all hardcoded string values in other file
 * add env file
 * Remove the pallate object from theme
 *
 */

export default App
