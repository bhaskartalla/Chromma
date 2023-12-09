import {
  REQUEST_CART_OUTLINE_API_RESPONSE,
  RECEIVE_CART_OUTLINE_API_RESPONSE,
  ERROR_CART_OUTLINE_API_RESPONSE,
  REQUEST_ADD_WISHLIST_API_RESPONSE,
  RECEIVE_ADD_WISHLIST_API_RESPONSE,
  ERROR_ADD_WISHLIST_API_RESPONSE,
  REQUEST_REMOVE_WISHLIST_API_RESPONSE,
  RECEIVE_REMOVE_WISHLIST_API_RESPONSE,
  ERROR_REMOVE_WISHLIST_API_RESPONSE,
  RESET_TOAST_MESSAGE,
} from './action_types'

export const requestCartOutlineApiRequest = () => ({
  type: REQUEST_CART_OUTLINE_API_RESPONSE,
})

export const receiveCartOutlineApiRequest = (payload) => ({
  type: RECEIVE_CART_OUTLINE_API_RESPONSE,
  payload,
})

export const errorCartOutlineApiRequest = () => ({
  type: ERROR_CART_OUTLINE_API_RESPONSE,
})

export const requestAddToWishlistApiRequest = () => ({
  type: REQUEST_ADD_WISHLIST_API_RESPONSE,
})

export const receiveAddToWishlistApiRequest = (payload) => ({
  type: RECEIVE_ADD_WISHLIST_API_RESPONSE,
  payload,
})

export const errorAddToWishlistApiRequest = () => ({
  type: ERROR_ADD_WISHLIST_API_RESPONSE,
})

export const requestRemoveFromWishlistApiRequest = () => ({
  type: REQUEST_REMOVE_WISHLIST_API_RESPONSE,
})

export const receiveRemoveFromWishlistApiRequest = (payload) => ({
  type: RECEIVE_REMOVE_WISHLIST_API_RESPONSE,
  payload,
})

export const errorRemoveFromWishlistApiRequest = () => ({
  type: ERROR_REMOVE_WISHLIST_API_RESPONSE,
})

export const resetToastMessage = () => ({
  type: RESET_TOAST_MESSAGE,
})
