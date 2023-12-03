import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  Fragment,
} from 'react'
import PlpAppbar from 'components/Appbar/plp_appbar'
import Searchbar from 'components/Searchbar/searchbar'
import FilterChipsSection from './FilterChipsSection/filter_chips_section'
import PlpCard from './PlpCard/plp_card'
import styles from './plp_page.module.css'
import Typography from 'uiKit/Typography/typography'
import Dropdown from 'components/Dropdown/dropdown'
import EndOfScroll from './EndOfScroll/end_of_scroll'
import NoResultsFound from 'components/NoResultsFound/no_results_found'
import InlineFilters from './InlineFilterCard/inline_filters'
import Filters from 'pages/ProductListing/Filters/filters'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchPlpApiResponse,
  fetchPaginationApiResponse,
} from './state/action_creators'
import PageLoader from 'uiKit/Loaders/page_loader'
import InlineLoader from 'uiKit/Loaders/inline_loader'
import { useTheme } from '@mui/material'
import { darkTheme } from 'theme'

const PlpPage = () => {
  const plpResponse = useSelector((state) => state.plpReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [filterModal, setFilterModal] = useState({
    state: false,
    facetCode: '',
  })

  const scrollToTop = useRef(null)
  const [params] = useSearchParams()
  const theme = useTheme()
  const query = params.get('query')

  useEffect(() => {
    dispatch(
      fetchPlpApiResponse({
        category: 'electronics',
        pinCode: '400001',
        query,
        sortBy: 'relevance',
        currentPage: 0,
        filter: '',
      })
    )
    // eslint-disable-next-line
  }, [])
  // console.log("PlpPage", plpResponse);

  const {
    apiResponse,
    internalResponse,
    pickAStoreList,
    filterString,
    pagination,
  } = plpResponse

  const { currentPage, totalPages, isPageApiLoading } = pagination

  const [isApiCalled, setIsApiCalled] = useState(isPageApiLoading)
  useEffect(() => setIsApiCalled(isPageApiLoading), [isPageApiLoading])

  const { isPlpApiLoading, apiProducts, apiFacets, apiFilterItemCount } =
    apiResponse

  const { internalFacets, internalFilterString } = internalResponse
  const showNoResultsCard = !apiProducts?.length

  let start = 0
  let end = 0
  const facetPerCard = 2
  const getPopularFacets = () => {
    start = end
    end = end + facetPerCard
    const newPopularFacet = internalFacets
      .filter((facet) => facet.popular)
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

  const renderHeaderBlock = () => (
    <div
      style={{
        backgroundColor: theme.palette.color.background,
      }}
      className={styles.header_section}
    >
      <PlpAppbar theme={darkTheme} pincode={400013} />
      <Searchbar
        searchedText={query}
        closeIconType={'CircleCloseIcon'}
        handleSearchBarClick={() => {
          const queryString = query ? `?searchText=${query}` : ''
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
            facets={apiFacets}
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
          } ${pickAStoreList.values.length > 0 ? 'from' : ''}`}
          style={{
            marginRight: '4px',
            color: theme.palette.color.onBackgroundLowContrast,
          }}
        />
        {pickAStoreList.values.length > 0 && (
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
              category: 'electronics',
              pinCode: '400001',
              query,
              sortBy: 'relevance',
              currentPage: currentPage + 1,
              filter: internalFilterString,
            })
          )
        }
      }
    }
  }

  const renderPlpScrollCardsBlock = () => (
    <div ref={scrollToTop} onScroll={onScroll} className={styles.cards_section}>
      {noOfProducts(pickAStoreList, apiFilterItemCount)}
      {apiProducts.map((product, index) => {
        return (
          <Fragment key={product.skuId}>
            <PlpCard productDetails={product} />
            <div className={styles.divider} />
            {!((index + 1) % 2) && !filterString && (
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

  return isPlpApiLoading ? (
    <PageLoader />
  ) : (
    <div
      style={{
        position: 'relative',
        backgroundColor: theme.palette.color.background,
      }}
    >
      <div className={styles.page_wrapper}>
        {renderHeaderBlock()}
        {showNoResultsCard ? (
          <NoResultsFound />
        ) : (
          <>{renderPlpScrollCardsBlock()}</>
        )}
      </div>
      {filterModal.state && (
        <Filters
          defaultSelectedFacet={filterModal.facetCode}
          handleCloseFilterModal={handleCloseFilterModal}
          handleFilterModal={handleFilterModal}
        />
      )}
    </div>
  )
}

export default PlpPage
