// =============== Utils Starts ===================
function setInnerText(id, text) {
  document.getElementById(id).innerText = text;
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
    const price = event.target.parentNode.childNodes[3].innerText;
    console.log(name, price);
  });
}
