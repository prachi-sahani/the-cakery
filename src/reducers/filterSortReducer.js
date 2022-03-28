export function filterSortReducer(state, action) {
  switch (action.type) {
    case "SORT_BY": {
      if (action.payload === "LOW_TO_HIGH") {
        return { ...state, sortBy: "LOW_TO_HIGH" };
      } else if (action.payload === "HIGH_TO_LOW") {
        return { ...state, sortBy: "HIGH_TO_LOW" };
      } else {
        return { ...state };
      }
    }
    case "FILTER_BY_CATEGORY": {
      let categoryArray = [...state.filterByCategory];
      if (action.payload.checked) {
        categoryArray = isCategoryPresent(action.payload, categoryArray)
          ? [...categoryArray]
          : [...categoryArray, action.payload];
      } else {
        categoryArray = isCategoryPresent(action.payload, categoryArray)
          ? categoryArray.filter((item) => item !== action.payload)
          : [...categoryArray];
      }
      return { ...state, filterByCategory: categoryArray };
    }
    case "FILTER_BY_RATING":
      return { ...state, filterByRating: action.payload };
    case "FILTER_BY_PRICE":
      return { ...state, filterByPrice: action.payload };
    case "CLEAR_ALL":
      return {
        ...state,
        filterByCategory: [],
        filterByRating: 0,
        filterByPrice: 2000,
      };
    default:
      return { ...state };
  }
}

function isCategoryPresent(category, categoryArray) {
  return categoryArray.findIndex((item) => item === category) < 0
    ? false
    : true;
}
