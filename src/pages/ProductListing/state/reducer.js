import {
  REQUEST_PLP_API_RESPONSE,
  RECEIVE_PLP_API_RESPONSE,
  UPDATE_FACET_VALUE,
  ERROR_PLP_API_RESPONSE,
  RESET_ALL_FACETS,
} from "./action_types";

const initialState = {
  isLoading: false,
  products: [],
  apiFacets: [],
  internalFacets: [],
  apiFilter: "",
  internalFilter: "",
  pagination: {},
  sorts: [],
  filterItemCount: 0,
  pickAStoreList: {},
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

    case RECEIVE_PLP_API_RESPONSE: {
      // filter the product with no SkuId or price value as 0
      const filteredProducts = payload.response.products.filter(
        (product) => product.skuId && product.price.value
      );

      // set the `selectedValueCount` value for all the values selected for a particular facet and extract the store list facet
      const selectedFacetCounts = [];
      let pickAStoreList = {};
      payload.response.facets.forEach((facet) => {
        if (facet.code !== "category") {
          facet.selectedValueCount = facet.values.filter(
            (value) => value.selected
          ).length;
          selectedFacetCounts.push(facet);
        } else {
          pickAStoreList = facet;
        }
      });

      return {
        ...state,
        isLoading: false,
        products: filteredProducts,
        apiFacets: selectedFacetCounts,
        internalFacets: selectedFacetCounts,
        pagination: payload.response.pagination,
        sorts: payload.response.sorts,
        filterItemCount: payload.response.filterItemCount,
        pickAStoreList: pickAStoreList,
        isError: false,
        apiFilter: payload.params.filter,
        internalFilter: payload.params.filter,
        query: payload.params.query,
      };
    }

    case ERROR_PLP_API_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case UPDATE_FACET_VALUE: {
      let count = 0;

      // set value of a particular facet with the payload value and update the facet.selectedValueCount
      const updatedFacets = state.internalFacets.map((facet) => {
        if (facet.code === payload.facetCode) {
          count = 0;
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

      // Create the filter string
      let appliedFilter = "";
      state.internalFacets.forEach((facet) => {
        facet.values.forEach((value) => {
          if (value.selected) {
            appliedFilter = `${facet.code}:${value.code}:${appliedFilter}`;
          }
        });
      });

      return {
        ...state,
        internalFacets: updatedFacets,
        internalFilter: appliedFilter,
      };
    }
    case RESET_ALL_FACETS: {
      const resetedFacets = state.internalFacets.map((facet) => {
        facet.values.map((value) => {
          value.selected = false;
          return value;
        });
        facet.selectedValueCount = 0;
        return facet;
      });

      return {
        ...state,
        internalFacets: resetedFacets,
        internalFilter: "",
      };
    }
    default:
      return state;
  }
};

export default plpReducer;
