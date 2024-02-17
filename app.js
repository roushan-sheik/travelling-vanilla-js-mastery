const allButtons = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allButtons) {
  btn.addEventListener("click", (event) => {
    // update the counter
    count += 1;
    // set the counter value
    document.getElementById("cart-count").innerHTML = count;
    // access name and price
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].innerText;
    console.log(name, price);
  });
}
