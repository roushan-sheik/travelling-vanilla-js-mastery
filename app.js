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
    // set those elements to the parent
    parent.appendChild(li);
    // calculate the total costing and display:   
    const getTotalCost = document.getElementById("total-cost").innerText;
    let totalCost = parseInt(getTotalCost) + parseInt(price);
    document.getElementById("total-cost").innerText = totalCost;
  });
}
