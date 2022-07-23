let popupdata = document
  .querySelector("#price-filter")
  .addEventListener("click", showPoPup);
function showPoPup() {
  var popup = document.querySelector("#price-range");
  popup.style.display = "block";
}

document
  .querySelector("#price-range")
  .addEventListener("mouseleave", hidePoPup);
function hidePoPup() {
  var popup = document.querySelector("#price-range");
  popup.style.display = "none";
}

//Availibility
document.querySelector("#availibility").addEventListener("click", showavail);
function showavail() {
  var popup = document.querySelector("#stock-select");
  popup.style.display = "block";
}

document
  .querySelector("#stock-select")
  .addEventListener("mouseleave", hideavail);
function hideavail() {
  var popup = document.querySelector("#stock-select");
  popup.style.display = "none";
}

let popup = (popupdata) => {
  return popupdata;
};

export default popup;
