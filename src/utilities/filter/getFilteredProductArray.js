export  function getFilteredProductArray(filterBy, productList) {
    let finalArray = filterBy.filterByCategory.length ? [] : [...productList];

    // filtering based on category
    filterBy.filterByCategory.forEach(
      (category) =>
        (finalArray = [
          ...finalArray,
          ...[...productList].filter((item) => item.categoryName === category),
        ])
    );

    // filtering based on rating
    finalArray = finalArray.filter(
      (item) => filterBy.filterByRating <= item.rating
    );

    // filtering by price
    finalArray = finalArray.filter(
      (item) => item.price - item.discount <= filterBy.filterByPrice
    );
    return finalArray;
  }
