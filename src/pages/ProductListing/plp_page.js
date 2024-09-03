import { useTheme } from '@mui/material'
import PlpAppbar from 'components/Appbar/plp_appbar'
import Dropdown from 'components/Dropdown/dropdown'

import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  lazy,
} from 'react'
import Searchbar from 'components/Searchbar/searchbar'
import { closeToast, openToast } from 'globalState/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { cromaLightTheme, darkTheme, lightTheme } from 'theme'

// redux
import { fetchCartOutlineResponse } from './state/cartOutlineState/action_creators'
import { resetToastMessage } from './state/cartOutlineState/actions'
import {
  fetchPaginationApiResponse,
  fetchPlpApiResponse,
} from './state/plpState/action_creators'

// custom components
import InlineLoader from 'uiKit/Loaders/inline_loader'
import PageLoader from 'uiKit/Loaders/page_loader'
import Typography from 'uiKit/Typography'
import FilterChipsSection from './FilterChipsSection/filter_chips_section'
import InlineFilters from './InlineFilterCard/inline_filters'
import PlpCard from './PlpCard/plp_card'
import styles from './plp_page.module.css'

// lazy imports
const SortFilters = lazy(() =>
  import('./BottomSheets/SortFilters/sort_filters')
)
const StorePickup = lazy(() =>
  import('./BottomSheets/StorePickup/store_pickup')
)

const NoResultsFound = lazy(() =>
  import('components/NoResultsFound/no_results_found')
)
const EndOfScroll = lazy(() => import('./EndOfScroll/end_of_scroll'))
const Filters = lazy(() => import('pages/ProductListing/Filters/filters'))

const PlpPage = () => {
  const plpResponse = useSelector((state) => state.plpReducer)
  const cartOutlineResponse = useSelector((state) => state.cartOutlineReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [filterModal, setFilterModal] = useState({
    state: false,
    facetCode: '',
  })
  const [isSortFiltersBSOpen, setSortFilterBottomSheetOpen] = useState(false)
  const [storePickupData, setStorePickupData] = useState({})

  const scrollToTop = useRef(null)
  const [queryParams] = useSearchParams()
  const theme = useTheme()
  const searchQuery = queryParams.get('query')

  const {
    apiResponse,
    internalResponse,
    pickAStoreList,
    pagination,
    sorts,
    params,
    storePickupStoreDetails,
  } = plpResponse

  const { wishlistSkuList, showToast } = cartOutlineResponse

  useEffect(() => {
    dispatch(
      fetchCartOutlineResponse({ category: 'electronics', pinCode: '400069' })
    )
    dispatch(
      fetchPlpApiResponse({
        category: 'electronics',
        pinCode: '400001',
        query: searchQuery,
        sortBy: 'relevance',
        currentPage: 0,
        filter: '',
      })
    )

    return () => dispatch(resetToastMessage())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (showToast !== '') {
      dispatch(
        openToast({
          title: showToast,
        })
      )
    } else {
      dispatch(closeToast())
    }
    // eslint-disable-next-line
  }, [showToast])

  const { currentPage, totalPages, isPageApiLoading } = pagination

  const [isApiCalled, setIsApiCalled] = useState(isPageApiLoading)

  useEffect(() => setIsApiCalled(isPageApiLoading), [isPageApiLoading])

  const {
    isPlpApiLoading,
    apiProducts,
    apiFacets,
    apiFilterItemCount,
    isPlpApiError,
  } = apiResponse

  const [showNoResultsCard, setShowNoResultsCard] = useState(false)

  useEffect(() => {
    if (!isPlpApiLoading && !isPlpApiError) {
      setShowNoResultsCard(!apiProducts?.length)
    }
  }, [isPlpApiLoading, isPlpApiError, apiProducts])

  const { internalFacets } = internalResponse

  let start = 0
  let end = 0
  const facetPerCard = 2
  const getPopularFacets = () => {
    start = end
    end = end + facetPerCard
    const newPopularFacet = internalFacets
      ?.filter((facet) => facet.popular)
      .slice(start, end)
    return newPopularFacet
  }

  const handleScrollToTop = useCallback(
    () =>
      scrollToTop.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  )

  const handleCloseFilterModal = useCallback(
    () => setFilterModal({ state: false, facetCode: '' }),
    []
  )

  const handleFilterModal = useCallback((facetCode) => {
    setFilterModal({ state: true, facetCode })
  }, [])

  const handleSortOpenBS = useCallback(
    () => setSortFilterBottomSheetOpen(true),
    []
  )

  const handleSortCloseBS = useCallback(
    () => setSortFilterBottomSheetOpen(false),
    []
  )

  const handleStorePickupOpenBS = useCallback(
    ({ productName, mop, imageUrl }) => {
      setStorePickupData({
        state: true,
        productName,
        mop,
        imageUrl,
      })
    },
    []
  )

  const handleStorePickupCloseBS = useCallback(
    () => setStorePickupData((prev) => ({ ...prev, state: false })),
    []
  )

  const renderHeaderBlock = () => (
    <div
      style={{
        backgroundColor: theme.palette.color.background,
      }}
      className={styles.header_section}
    >
      <PlpAppbar
        theme={theme.themeValue === 'cromaDarkTheme' ? theme : darkTheme}
        pincode={400013}
      />
      <Searchbar
        searchedText={searchQuery}
        closeIconType={'CircleCloseIcon'}
        handleSearchBarClick={() => {
          const queryString = searchQuery ? `?searchText=${searchQuery}` : ''
          navigate(`/global-search${queryString}`)
        }}
        handleOnCloseClick={(event) => {
          navigate('/global-search')
          event.stopPropagation()
        }}
        theme={theme}
      />
      <div
        className={`${styles.filter_chips_section} ${
          showNoResultsCard && styles.filter_chips_section_remove_margin
        }`}
      >
        {!showNoResultsCard && (
          <FilterChipsSection
            isSortChipSelected={params.sortBy !== 'relevance'}
            facets={apiFacets || []}
            handleSortOpenBS={handleSortOpenBS}
            handleFilterModal={handleFilterModal}
          />
        )}
      </div>
    </div>
  )

  const noOfProducts = (pickAStoreList, filterItemCount) => {
    return (
      <div className={styles.no_of_products}>
        <Typography
          variant='body-x-small-regular'
          text={`${filterItemCount} ${
            filterItemCount > 0 ? 'Products' : 'Product'
          } ${pickAStoreList.values?.length > 0 ? 'from' : ''}`}
          style={{
            marginRight: '4px',
            color: theme.palette.color.onBackgroundLowContrast,
          }}
        />
        {pickAStoreList.values?.length > 0 && (
          <Dropdown brandList={pickAStoreList.values} />
        )}
      </div>
    )
  }

  const onScroll = () => {
    if (scrollToTop.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollToTop.current

      if (scrollTop + clientHeight > scrollHeight - 160) {
        if (!isApiCalled && currentPage < totalPages - 1) {
          setIsApiCalled(true)

          dispatch(
            fetchPaginationApiResponse({
              ...params,
              currentPage: currentPage + 1,
            })
          )
        }
      }
    }
  }

  const renderPlpScrollCardsBlock = () => (
    <div
      ref={scrollToTop}
      onScroll={onScroll}
      className={styles.cards_section}
    >
      {noOfProducts(pickAStoreList, apiFilterItemCount)}
      {apiProducts.map((product, index) => {
        return (
          <Fragment key={product.skuId}>
            <PlpCard
              productDetails={product}
              wishlistSkuList={wishlistSkuList}
              handleStorePickupOpenBS={handleStorePickupOpenBS}
            />
            <div className={styles.divider} />
            {!((index + 1) % 2) && !params.filter && (
              <InlineFilters
                facets={getPopularFacets()}
                handleSeeAllFilters={() =>
                  setFilterModal({ state: true, facetCode: '' })
                }
              />
            )}
          </Fragment>
        )
      })}
      {isPageApiLoading && <InlineLoader />}
      {currentPage === totalPages - 1 && (
        <EndOfScroll handleScrollToTop={handleScrollToTop} />
      )}
    </div>
  )

  if (isPlpApiLoading && !isPlpApiError) {
    return <PageLoader />
  } else {
    return (
      <div
        style={{
          position: 'relative',
          backgroundColor: theme.palette.color.background,
          overflow: 'hidden',
        }}
      >
        <div className={styles.page_wrapper}>
          {renderHeaderBlock()}
          {!isPlpApiLoading && apiProducts && !isPlpApiError ? (
            <>{renderPlpScrollCardsBlock()}</>
          ) : (
            <>{showNoResultsCard && <NoResultsFound />}</>
          )}
          <SortFilters
            sorts={sorts}
            isSortFiltersBSOpen={isSortFiltersBSOpen}
            handleSortCloseBS={handleSortCloseBS}
          />
          <StorePickup
            storePickupData={{
              ...storePickupData,
              stores: storePickupStoreDetails.stores,
            }}
            isStorePickupBSOpen={
              !!(
                storePickupStoreDetails.stores?.length && storePickupData.state
              )
            }
            handleStorePickupCloseBS={handleStorePickupCloseBS}
          />
        </div>
        {filterModal.state && (
          <Filters
            defaultSelectedFacet={filterModal.facetCode}
            handleCloseFilterModal={handleCloseFilterModal}
            handleFilterModal={handleFilterModal}
            theme={
              theme.themeValue === 'lightTheme' ? lightTheme : cromaLightTheme
            }
          />
        )}
      </div>
    )
  }
}

export default PlpPage
