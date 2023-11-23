import {
  requestPlpApiRequest,
  receivePlpApiRequest,
  errorPlpApiRequest,
  updateInternalFacet,
  resetAllFacets,
} from "./actions";
import plpResponse from "apiData/plp_response.json";

export const fetchPlpApiResponse = () => {
  return (dispatch) => {
    dispatch(requestPlpApiRequest());
    try {
      setTimeout(() => {
        dispatch(receivePlpApiRequest(plpResponse.data));
      }, 1000);
    } catch (error) {
      dispatch(errorPlpApiRequest());
    }
  };
};

export const updateInternalFacetValue = (payload) => {
  return (dispatch) => {
    dispatch(updateInternalFacet(payload));
  };
};

export const resetAllFacetsValues = () => {
  return (dispatch) => {
    dispatch(resetAllFacets());
  };
};
