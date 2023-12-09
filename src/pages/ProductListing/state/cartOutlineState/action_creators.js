import {
  requestCartOutlineApiRequest,
  receiveCartOutlineApiRequest,
  errorCartOutlineApiRequest,
  requestAddToWishlistApiRequest,
  receiveAddToWishlistApiRequest,
  errorAddToWishlistApiRequest,
  requestRemoveFromWishlistApiRequest,
  receiveRemoveFromWishlistApiRequest,
  errorRemoveFromWishlistApiRequest,
} from './actions'
import apiInstance from 'api'

export const fetchCartOutlineResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestCartOutlineApiRequest())
    try {
      const wishlistApiResponse = await apiInstance.get(
        'https://ppapi.tatadigital.com/api/v1/commerce/cart-outline',
        {
          params,
        }
      )
      dispatch(receiveCartOutlineApiRequest(wishlistApiResponse?.data?.data))
    } catch (error) {
      dispatch(errorCartOutlineApiRequest())
    }
  }
}

export const addItemToWishlist = (skuId) => {
  return async (dispatch) => {
    dispatch(requestAddToWishlistApiRequest())
    try {
      await apiInstance.post(
        'https://ppapi.tatadigital.com/api/v1/commerce/add-wishlist',
        {
          category: 'electronics',
          pinCode: '400001',
          skuIds: [skuId],
        }
      )
      dispatch(receiveAddToWishlistApiRequest({ skuId }))
    } catch (error) {
      dispatch(errorAddToWishlistApiRequest())
    }
  }
}

export const removeItemFromWishList = (skuId) => {
  return async (dispatch) => {
    dispatch(requestRemoveFromWishlistApiRequest())
    try {
      await apiInstance.delete(
        'https://ppapi.tatadigital.com/api/v1/commerce/remove-wishlist',
        {
          data: {
            category: 'electronics',
            skuIds: [skuId],
          },
        }
      )
      dispatch(receiveRemoveFromWishlistApiRequest({ skuId }))
    } catch (error) {
      dispatch(errorRemoveFromWishlistApiRequest())
    }
  }
}
