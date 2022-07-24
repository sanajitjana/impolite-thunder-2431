// Best Selling Filter
let sorting = (filterData, filterIns) => {
  let x = filterIns;
  if (x === "Bestselling") {
    let res = [];
    for (let i = 0; i < filterData.length; i++) {
      if (x === filterData[i].tag) {
        res.push(filterData[i]);
      }
    }
    return res;

    // Featured Filter
  } else if (x === "Featured") {
    let res = [];
    for (let i = 0; i < filterData.length; i++) {
      if (x === filterData[i].tag) {
        res.push(filterData[i]);
      }
    }
    return res;

    // A to Z Filter
  } else if (x === "A-Z") {
    filterData.sort(function (a, b) {
      if (a.head > b.head) {
        return 1;
      }
      if (b.head > a.head) {
        return -1;
      }
      return 0;
    });
    return filterData;

    // Z to A Filter
  } else if (x === "Z-A") {
    filterData.sort(function (a, b) {
      if (a.head < b.head) {
        return 1;
      }
      if (b.head < a.head) {
        return -1;
      }
      return 0;
    });
    return filterData;

    // Price Low to High Filter
  } else if (x === "low-to-high") {
    filterData.sort(function (a, b) {
      return a.price - b.price;
    });
    return filterData;

    // Price High to Low Filter
  } else if (x === "high-to-low") {
    filterData.sort(function (a, b) {
      return b.price - a.price;
    });
    return filterData;

    // Old to New Product
  } else if (x === "old-new") {
    filterData.sort(function (a, b) {
      return a.date - b.date;
    });
    return filterData;

    // New to Old Product
  } else if (x === "new-old") {
    filterData.sort(function (a, b) {
      return b.date - a.date;
    });
    return filterData;
  }
};

// filter function invoke
export default sorting;
