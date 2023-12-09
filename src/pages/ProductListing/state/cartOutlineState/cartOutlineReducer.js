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

const initialState = {
  isCartOutlineApiLoading: false,
  wishlistSkuList: [],
  itemCount: 0,
  isCartOutlineApiError: false,
  isAddToWishlistApiLoading: false,
  isAddToWishlistApiError: false,
  isRemoveFromWishlistApiLoading: false,
  isRemoveFromWishlistApiError: false,
  showToast: '',
}

const cartOutlineReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REQUEST_CART_OUTLINE_API_RESPONSE: {
      return {
        ...state,
        isCartOutlineApiLoading: true,
      }
    }

    case RECEIVE_CART_OUTLINE_API_RESPONSE: {
      return {
        ...state,
        isCartOutlineApiLoading: false,
        wishlistSkuList: [
          ...new Set([...state.wishlistSkuList, ...payload.wishlistSkuList]),
        ],
        itemCount: payload.itemCount,
      }
    }

    case ERROR_CART_OUTLINE_API_RESPONSE: {
      return {
        ...state,
        isCartOutlineApiLoading: false,
        isCartOutlineApiError: true,
      }
    }

    case REQUEST_ADD_WISHLIST_API_RESPONSE: {
      return {
        ...state,
        isAddToWishlistApiLoading: true,
      }
    }

    case RECEIVE_ADD_WISHLIST_API_RESPONSE: {
      return {
        ...state,
        isAddToWishlistApiLoading: false,
        showToast: 'Product added to Wishlist',
        wishlistSkuList: [
          ...new Set([...state.wishlistSkuList, payload.skuId]),
        ],
      }
    }

    case ERROR_ADD_WISHLIST_API_RESPONSE: {
      return {
        ...state,
        isAddToWishlistApiLoading: false,
        showToast: 'Error adding to Wishlist',
        isAddToWishlistApiError: true,
      }
    }

    case REQUEST_REMOVE_WISHLIST_API_RESPONSE: {
      return {
        ...state,
        isRemoveFromWishlistApiLoading: true,
      }
    }

    case RECEIVE_REMOVE_WISHLIST_API_RESPONSE: {
      return {
        ...state,
        isRemoveFromWishlistApiLoading: false,
        showToast: 'Product removed from Wishlist',
        wishlistSkuList: state.wishlistSkuList.filter(
          (skuId) => skuId !== payload.skuId
        ),
      }
    }

    case ERROR_REMOVE_WISHLIST_API_RESPONSE: {
      return {
        ...state,
        isRemoveFromWishlistApiLoading: false,
        showToast: 'Error removing from Wishlist',
        isRemoveFromWishlistApiError: true,
      }
    }

    case RESET_TOAST_MESSAGE: {
      return {
        ...state,
        showToast: '',
      }
    }

    default:
      return state
  }
}

export default cartOutlineReducer
