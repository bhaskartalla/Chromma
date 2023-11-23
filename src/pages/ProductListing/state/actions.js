import {
  REQUEST_PLP_API_RESPONSE,
  RECEIVE_PLP_API_RESPONSE,
  ERROR_PLP_API_RESPONSE,
  UPDATE_FACET_VALUE,
  RESET_ALL_FACETS,
} from "./action_types";

export const requestPlpApiRequest = () => ({
  type: REQUEST_PLP_API_RESPONSE,
});

export const receivePlpApiRequest = (payload) => ({
  type: RECEIVE_PLP_API_RESPONSE,
  payload,
});

export const errorPlpApiRequest = () => ({
  type: ERROR_PLP_API_RESPONSE,
});

export const updateInternalFacet = (payload) => ({
  type: UPDATE_FACET_VALUE,
  payload,
});

export const resetAllFacets = () => ({
  type: RESET_ALL_FACETS,
});
