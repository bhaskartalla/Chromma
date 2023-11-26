import {
  requestPlpApiRequest,
  receivePlpApiRequest,
  errorPlpApiRequest,
  updateInternalFacet,
  resetAllFacets,
} from "./actions";
import apiInstance from "api";

export const fetchPlpApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestPlpApiRequest());
    try {
      const plpApiResponse = await apiInstance.get(
        "https://ppapi.tatadigital.com/api/v1/commerce/search",
        {
          params,
        }
      );
      dispatch(
        receivePlpApiRequest({
          response: { ...plpApiResponse?.data?.data },
          params,
        })
      );
    } catch (error) {
      console.log({ error });
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
