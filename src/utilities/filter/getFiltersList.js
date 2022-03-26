export function getFiltersList(state) {
    let filters = [];
    if (state.sortBy === "HIGH_TO_LOW") {
      filters.push("PRICE - HIGH TO LOW");
    } else if (state.sortBy === "LOW_TO_HIGH") {
      filters.push("PRICE - LOW TO HIGH");
    }
    filters.push(...state.filterByCategory);
    if (state.filterByRating) {
      filters.push(`RATING MORE THAN ${state.filterByRating}⭐`);
    }
    filters.push(`PRICE LESS THAN ₹${state.filterByPrice}`);
    return filters;
  }