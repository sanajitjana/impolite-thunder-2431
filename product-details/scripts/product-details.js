// quantity counter function
let dec = document.getElementById("dec");
let inc = document.getElementById("inc");

let i = 1;
document.getElementById("count-num").innerText = i;

let decreaseFunc = () => {
  let count = document.getElementById("count-num").innerText;
  let i = count;
  if (count > 1 && count !== "1") {
    i--;
    document.getElementById("count-num").innerText = i;
  }
};
let increaseFunc = () => {
  let count = document.getElementById("count-num").innerText;
  let i = count;
  if (count >= 1) {
    i++;
    document.getElementById("count-num").innerText = i;
  }
};

dec.addEventListener("click", decreaseFunc);
inc.addEventListener("click", increaseFunc);
// end quantity counter function
