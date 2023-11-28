import {
  REQUEST_PLP_API_RESPONSE,
  RECEIVE_API_RESPONSE,
  ERROR_PLP_API_RESPONSE,
  UPDATE_FACET_VALUE,
  RESET_ALL_FACETS,
  APPLY_NEW_FACETS,
  REQUEST_FILTER_API_RESPONSE,
  ERROR_FILTER_API_RESPONSE,
  REQUEST_PAGE_API_RESPONSE,
  RECEIVE_PAGE_API_RESPONSE,
} from "./action_types";

export const requestPlpApiRequest = () => ({
  type: REQUEST_PLP_API_RESPONSE,
});

export const receiveApiRequest = (payload) => ({
  type: RECEIVE_API_RESPONSE,
  payload,
});

export const errorPlpApiRequest = () => ({
  type: ERROR_PLP_API_RESPONSE,
});

export const requestFilterApiRequest = () => ({
  type: REQUEST_FILTER_API_RESPONSE,
});

export const errorFilterApiRequest = () => ({
  type: ERROR_FILTER_API_RESPONSE,
});

export const updateInternalFacet = (payload) => ({
  type: UPDATE_FACET_VALUE,
  payload,
});

export const resetAllFacets = () => ({
  type: RESET_ALL_FACETS,
});

export const applyAllFacets = () => ({
  type: APPLY_NEW_FACETS,
});

export const requestPageApiRequest = () => ({
  type: REQUEST_PAGE_API_RESPONSE,
});

export const receivePageApiRequest = (payload) => ({
  type: RECEIVE_PAGE_API_RESPONSE,
  payload,
});
