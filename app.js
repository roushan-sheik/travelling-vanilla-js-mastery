const allButtons = document.getElementsByClassName("add-btn");

for (const btn of allButtons) {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode.childNodes[1]);
  });
}
