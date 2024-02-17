// =============== Utils Starts ===================
// set inner text method
function setInnerText(id, text) {
  document.getElementById(id).innerText = text;
}
// create element method
function createElement(ele) {
  return document.createElement(ele);
}
// =============== Utils Ends ===================
const allButtons = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allButtons) {
  btn.addEventListener("click", (event) => {
    // update the counter
    count += 1;
    // set the counter value
    setInnerText("cart-count", count);
    // access name and price
    const name = event.target.parentNode.childNodes[1].innerText;
    // const price = event.target.parentNode.childNodes[3].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    console.log(price);
    // create new element and append to the targeted parent
    // select the parent
    const parent = document.getElementById("selected-place-container");
    // create new elements
    const li = createElement("li");
    // create p for name
    const p = createElement("p");
    p.innerText = name;
    li.appendChild(p);
    // create p for price
    const p2 = createElement("p");
    p2.innerText = price;
    li.appendChild(p2);

    // Check the budget is low or not
    const getBudget = document.getElementById("budget").innerText;
    const budget = parseInt(getBudget);
    if (budget - parseInt(price) < 0) {
      alert( "Low budget earn more!" );
      return;
    } else {
      document.getElementById("budget").innerText = budget - parseInt(price);
    }

    // set those elements to the parent
    parent.appendChild(li);
    // calculate the total costing and display:
    getTotal("total-cost", price);
    // Calculate grand total and show the display
    getTotal("grand-total", price);
  });
}

function getTotal(id, value) {
  const getTotalCost = document.getElementById(id).innerText;
  let totalCost = parseInt(getTotalCost) + parseInt(value);
  setInnerText(id, totalCost);
}
// add bus train flight grand total
function grandTotal(category) {
  const getTotal = document.getElementById("total-cost").innerText;
  const total = parseInt(getTotal);
  if (category === "bus") {
    setInnerText("grand-total", total + 100);
  } else if (category === "train") {
    setInnerText("grand-total", total - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", total + 500);
  } else {
    setInnerText("grand-total", total);
  }
}
