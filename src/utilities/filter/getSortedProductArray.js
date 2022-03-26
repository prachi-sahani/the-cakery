export function getSortedProductArray(sortBy, filteredArray) {
    if (sortBy === "HIGH_TO_LOW") {
      return [...filteredArray].sort(
        (itemA, itemB) => (itemB.price-itemB.discount) - (itemA.price-itemA.discount)
      );
    } else if (sortBy === "LOW_TO_HIGH") {
      return [...filteredArray].sort(
        (itemA, itemB) => (itemA.price-itemA.discount) - (itemB.price-itemB.discount)
      );
    }
    return [...filteredArray];
  }