let data = document
  .querySelector("#selector")
  .addEventListener("change", sorting);

function sorting() {
  let x = document.querySelector("#selector").value;
  if (x === "Bestselling") {
    for (let i = 0; i < data.length; i++) {
      let compare = data[i].tag;
      if (compare === "Bestselling") {
        // return compare;
        return data[i];
      }
    }
    appendData(data);
  } else if (x === "A-Z") {
    data.sort(function (a, b) {
      if (a.head > b.head) {
        return 1;
      }
      if (b.head > a.head) {
        return -1;
      }
      return 0;
    });
    appendData(data);
  } else if (x === "Z-A") {
    data.sort(function (a, b) {
      if (a.head < b.head) {
        return 1;
      }
      if (b.head < a.head) {
        return -1;
      }
      return 0;
    });
    appendData(data);
  } else if (x === "low-to-high") {
    data.sort(function (a, b) {
      return a.price - b.price;
    });
    appendData(data);
  } else if (x === "high-to-low") {
    data.sort(function (a, b) {
      return b.price - a.price;
    });
    appendData(data);
  } else if (x === "old-new") {
    data.sort(function (a, b) {
      return a.date - b.date;
    });
    appendData(data);
  } else if (x === "new-old") {
    data.sort(function (a, b) {
      return b.date - a.date;
    });
    appendData(data);
  }
}

let dataFilter = (data) => {
  return data;
};

export default dataFilter;
