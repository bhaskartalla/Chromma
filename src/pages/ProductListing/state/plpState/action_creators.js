import {
  requestPlpApiRequest,
  receivePlpApiRequest,
  errorPlpApiRequest,
  updateInternalFacet,
  resetAllFacets,
  requestFilterApiRequest,
  receiveFilterApiRequest,
  errorFilterApiRequest,
  requestPageApiRequest,
  receivePageApiRequest,
  requestStorePickupApiRequest,
  receiveStorePickupApiRequest,
  errorStorePickupApiRequest,
} from './actions'
import apiInstance from 'api'

export const fetchPlpApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestPlpApiRequest())
    try {
      if (!params.query) throw Error('query is missing')

      const plpApiResponse = await apiInstance.get(
        `${process.env.REACT_APP_API_GATEWAY_URL}/api/v1/commerce/search`,
        {
          params,
        }
      )
      dispatch(
        receivePlpApiRequest({
          response: { ...plpApiResponse?.data?.data },
          params,
          isForFilter: false,
        })
      )
    } catch (error) {
      dispatch(errorPlpApiRequest())
    }
  }
}

export const fetchFilterApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestFilterApiRequest())
    try {
      if (!params.query) throw Error('query is missing')

      const plpApiResponse = await apiInstance.get(
        `${process.env.REACT_APP_API_GATEWAY_URL}/api/v1/commerce/search`,
        {
          params,
        }
      )
      dispatch(
        receiveFilterApiRequest({
          response: { ...plpApiResponse?.data?.data },
          params,
          isForFilter: true,
        })
      )
    } catch (error) {
      dispatch(errorFilterApiRequest())
    }
  }
}

export const fetchPaginationApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestPageApiRequest())
    try {
      if (!params.query) throw Error('query is missing')

      const plpApiResponse = await apiInstance.get(
        `${process.env.REACT_APP_API_GATEWAY_URL}/api/v1/commerce/search`,
        {
          params,
        }
      )
      dispatch(
        receivePageApiRequest({
          response: { ...plpApiResponse?.data?.data },
          params,
        })
      )
    } catch (error) {
      dispatch(errorPlpApiRequest())
    }
  }
}

export const fetchStorePickupApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestStorePickupApiRequest())
    try {
      const storePickStores = await apiInstance.get(
        `${process.env.REACT_APP_API_GATEWAY_URL}/api/v1/commerce/detail`,
        {
          params,
        }
      )
      dispatch(
        receiveStorePickupApiRequest({
          stores: storePickStores?.data?.data.storeDetails,
          shipNode: params.shipNode,
        })
      )
    } catch (error) {
      dispatch(errorStorePickupApiRequest())
    }
  }
}

export const updateInternalFacetValue = (payload) => {
  return (dispatch) => {
    dispatch(updateInternalFacet(payload))
  }
}

export const resetAllFacetsValues = () => {
  return (dispatch) => {
    dispatch(resetAllFacets())
  }
}
