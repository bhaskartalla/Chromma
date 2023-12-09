import {
  REQUEST_PLP_API_RESPONSE,
  RECEIVE_PLP_API_RESPONSE,
  UPDATE_FACET_VALUE,
  ERROR_PLP_API_RESPONSE,
  RESET_ALL_FACETS,
  REQUEST_FILTER_API_RESPONSE,
  RECEIVE_FILTER_API_RESPONSE,
  ERROR_FILTER_API_RESPONSE,
  REQUEST_PAGE_API_RESPONSE,
  RECEIVE_PAGE_API_RESPONSE,
} from './action_types'

const initialState = {
  apiResponse: {
    isPlpApiLoading: false,
    apiProducts: [],
    apiFacets: [],
    apiFilterItemCount: 0,
    isPlpApiError: false,
  },
  internalResponse: {
    isFilterApiLoading: false,
    internalProducts: [],
    internalFacets: [],
    internalFilterItemCount: 0,
    isFilterApiError: false,
    internalFilterString: '',
  },
  filterString: '',
  pagination: {
    isPageApiLoading: false,
  },
  sorts: [],
  pickAStoreList: {},
}

function filterApiResponseData(payload) {
  // filter the product with no SkuId or price value as 0
  const filteredProducts = payload.response.products.filter(
    (product) => product.skuId && product.price.value
  )
  const apiSelectedFacetCounts = []
  let pickAStoreList = {}
  // set the `selectedValueCount` value for all the values selected for a particular facet and extract the store list facet
  payload.response.facets.forEach((facet) => {
    if (facet.code !== 'category') {
      facet.selectedValueCount = facet.values.filter(
        (value) => value.selected
      ).length
      apiSelectedFacetCounts.push(facet)
    } else {
      pickAStoreList = facet
    }
  })

  const internalSelectedFacetCounts = apiSelectedFacetCounts.map((facet) => {
    let newFacet = { ...facet }
    newFacet.values = facet.values.map((value) => {
      return { ...value }
    })
    return newFacet
  })

  return [
    filteredProducts,
    apiSelectedFacetCounts,
    pickAStoreList,
    internalSelectedFacetCounts,
  ]
}

const plpReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REQUEST_PLP_API_RESPONSE: {
      return {
        ...state,
        apiResponse: {
          ...state.apiResponse,
          isPlpApiLoading: true,
          isPlpApiError: false,
        },
      }
    }

    case RECEIVE_PLP_API_RESPONSE: {
      const [
        filteredProducts,
        apiSelectedFacetCounts,
        pickAStoreList,
        internalSelectedFacetCounts,
      ] = filterApiResponseData(payload)

      const updateState = {
        ...state,
        pagination: { ...payload.response.pagination, isPageApiLoading: false },
        sorts: payload.response.sorts,
        pickAStoreList: pickAStoreList,
        query: payload.params.query,
        filterString: payload.params.filter,
      }
      updateState.apiResponse = {
        isPlpApiLoading: false,
        apiProducts: filteredProducts,
        apiFacets: apiSelectedFacetCounts,
        apiFilterItemCount: payload.response.filterItemCount,
        isPlpApiError: false,
      }
      updateState.internalResponse = {
        isFilterApiLoading: false,
        internalProducts: filteredProducts,
        internalFacets: internalSelectedFacetCounts,
        internalFilterItemCount: payload.response.filterItemCount,
        isFilterApiError: false,
        internalFilterString: payload.params.filter,
      }

      return updateState
    }

    case ERROR_PLP_API_RESPONSE: {
      return {
        ...state,
        apiResponse: {
          ...state.apiResponse,
          isPlpApiLoading: false,
          isPlpApiError: true,
        },
      }
    }

    case REQUEST_FILTER_API_RESPONSE: {
      return {
        ...state,
        internalResponse: {
          ...state.internalResponse,
          isFilterApiLoading: true,
          isFilterApiError: false,
        },
      }
    }

    case RECEIVE_FILTER_API_RESPONSE: {
      const [
        filteredProducts,
        // eslint-disable-next-line
        apiSelectedFacetCounts,
        pickAStoreList,
        internalSelectedFacetCounts,
      ] = filterApiResponseData(payload)

      const updateState = {
        ...state,
        pagination: { ...payload.response.pagination, isPageApiLoading: false },
        sorts: payload.response.sorts,
        pickAStoreList: pickAStoreList,
        query: payload.params.query,
        filterString: payload.params.filter,
      }

      updateState.internalResponse = {
        isFilterApiLoading: false,
        internalProducts: filteredProducts,
        internalFacets: internalSelectedFacetCounts,
        internalFilterItemCount: payload.response.filterItemCount,
        isFilterApiError: false,
        internalFilterString: payload.params.filter,
      }

      return updateState
    }

    case ERROR_FILTER_API_RESPONSE: {
      return {
        ...state,
        internalResponse: {
          ...state.internalResponse,
          isFilterApiLoading: false,
          isFilterApiError: true,
        },
      }
    }

    case UPDATE_FACET_VALUE: {
      let count = 0

      // set value of a particular facet with the payload value and update the facet.selectedValueCount
      const updatedFacets = state.internalResponse.internalFacets.map(
        (facet) => {
          if (facet.code === payload.facetCode) {
            count = 0
            facet.values = facet.values.map((value) => {
              if (value.code === payload.valueCode) {
                value.selected = payload.state
              }
              if (value.selected) {
                count++
              }
              return value
            })
            facet.selectedValueCount = count
          }
          return facet
        }
      )
      let filterString = ''
      updatedFacets.forEach((facet) => {
        facet.values.forEach((value) => {
          if (value.selected) {
            filterString = `${facet.code}:${value.code}:${filterString}`
          }
        })
      })

      return {
        ...state,
        internalResponse: {
          ...state.internalResponse,
          internalFacets: updatedFacets,
          internalFilterString: filterString,
        },
      }
    }

    case RESET_ALL_FACETS: {
      const resetedFacets = state.internalResponse.internalFacets.map(
        (facet) => {
          facet.values.map((value) => {
            value.selected = false
            return value
          })
          facet.selectedValueCount = 0
          return facet
        }
      )

      return {
        ...state,
        internalResponse: {
          ...state.internalResponse,
          internalFacets: resetedFacets,
          internalFilterString: '',
        },
        filterString: '',
      }
    }

    case REQUEST_PAGE_API_RESPONSE: {
      return {
        ...state,
        pagination: { isPageApiLoading: true },
      }
    }

    case RECEIVE_PAGE_API_RESPONSE: {
      const [
        filteredProducts,
        apiSelectedFacetCounts,
        pickAStoreList,
        internalSelectedFacetCounts,
      ] = filterApiResponseData(payload)

      const updateState = {
        ...state,
        pagination: { ...payload.response.pagination, isPageApiLoading: false },
        sorts: payload.response.sorts,
        pickAStoreList: pickAStoreList,
      }
      updateState.apiResponse = {
        ...state.apiResponse,
        apiProducts: [...state.apiResponse.apiProducts, ...filteredProducts],
        apiFacets: apiSelectedFacetCounts,
        apiFilterItemCount: payload.response.filterItemCount,
      }
      updateState.internalResponse = {
        ...state.internalResponse,
        internalProducts: [
          ...state.apiResponse.apiProducts,
          ...filteredProducts,
        ],
        internalFacets: internalSelectedFacetCounts,
        internalFilterItemCount: payload.response.filterItemCount,
      }
      return updateState
    }

    default:
      return state
  }
}

export default plpReducer
