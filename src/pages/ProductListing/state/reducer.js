import {
  REQUEST_PLP_API_RESPONSE,
  RECEIVE_PLP_API_RESPONSE,
  UPDATE_FACET_VALUE,
  ERROR_PLP_API_RESPONSE,
  RESET_ALL_FACETS,
} from "./action_types";

const initialState = {
  isLoading: false,
  response: {},
  isError: false,
};

const plpReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_PLP_API_RESPONSE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case RECEIVE_PLP_API_RESPONSE:
      const selectedFacetCounts = payload.facets.map((facet) => {
        facet.selectedValueCount = facet.values.filter(
          (value) => value.selected
        ).length;
        return facet;
      });

      return {
        ...state,
        isLoading: false,
        response: {
          ...payload,
          facets: selectedFacetCounts,
        },
        isError: false,
      };

    case ERROR_PLP_API_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case UPDATE_FACET_VALUE:
      const updatedFacets = state.response.facets.map((facet) => {
        let count = 0;
        if (facet.code === payload.facetCode) {
          facet.values.map((value) => {
            if (value.code === payload.valueCode) {
              value.selected = payload.state;
            }
            if (value.selected) {
              count++;
            }
            return value;
          });
          facet.selectedValueCount = count;
        }
        return facet;
      });

      return {
        ...state,
        response: {
          ...state.response,
          facets: updatedFacets,
        },
      };

    case RESET_ALL_FACETS:
      const resetedFacets = state.response.facets.map((facet) => {
        facet.values.map((value) => {
          value.selected = false;
          return value;
        });
        facet.selectedValueCount = 0;
        return facet;
      });

      return {
        ...state,
        response: {
          ...state.response,
          facets: resetedFacets,
        },
      };
    default:
      return state;
  }
};

export default plpReducer;
