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
  facets: [],
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
      const filteredProducts = payload.products.filter(
        (product) => product.skuId && product.price.value
      );

      // set the `selectedValueCount` value for all the values selected for a particular facet and extract the store list facet
      const selectedFacetCounts = [];
      let pickAStoreList = {};
      payload.facets.forEach((facet) => {
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
        facets: selectedFacetCounts,
        pagination: payload.pagination,
        sorts: payload.sorts,
        filterItemCount: payload.filterItemCount,
        pickAStoreList: pickAStoreList,
        isError: false,
      };
    }

    case ERROR_PLP_API_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case UPDATE_FACET_VALUE: {
      const updatedFacets = state.facets.map((facet) => {
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
        facets: updatedFacets,
      };
    }
    case RESET_ALL_FACETS: {
      const resetedFacets = state.facets.map((facet) => {
        facet.values.map((value) => {
          value.selected = false;
          return value;
        });
        facet.selectedValueCount = 0;
        return facet;
      });

      return {
        ...state,
        facets: resetedFacets,
      };
    }
    default:
      return state;
  }
};

export default plpReducer;
