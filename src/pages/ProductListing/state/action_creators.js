import {
  requestPlpApiRequest,
  errorPlpApiRequest,
  updateInternalFacet,
  resetAllFacets,
  requestFilterApiRequest,
  receiveApiRequest,
  errorFilterApiRequest,
  requestPageApiRequest,
  receivePageApiRequest,
} from "./actions";
import apiInstance from "api";

export const fetchPlpApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestPlpApiRequest());
    try {
      if (!params.query) throw Error("query is missing");

      const plpApiResponse = await apiInstance.get(
        "https://ppapi.tatadigital.com/api/v1/commerce/search",
        {
          params,
        }
      );
      dispatch(
        receiveApiRequest({
          response: { ...plpApiResponse?.data?.data },
          params,
          isForFilter: false,
        })
      );
    } catch (error) {
      console.log({ error });
      dispatch(errorPlpApiRequest());
    }
  };
};

export const fetchFilterApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestFilterApiRequest());
    try {
      if (!params.query) throw Error("query is missing");

      const plpApiResponse = await apiInstance.get(
        "https://ppapi.tatadigital.com/api/v1/commerce/search",
        {
          params,
        }
      );
      dispatch(
        receiveApiRequest({
          response: { ...plpApiResponse?.data?.data },
          params,
          isForFilter: true,
        })
      );
    } catch (error) {
      console.log({ error });
      dispatch(errorFilterApiRequest());
    }
  };
};

export const fetchPaginationApiResponse = (params) => {
  return async (dispatch) => {
    dispatch(requestPageApiRequest());
    try {
      if (!params.query) throw Error("query is missing");

      const plpApiResponse = await apiInstance.get(
        "https://ppapi.tatadigital.com/api/v1/commerce/search",
        {
          params,
        }
      );
      dispatch(
        receivePageApiRequest({
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
