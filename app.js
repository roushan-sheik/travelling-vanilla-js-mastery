const allButtons = document.getElementsByClassName("add-btn");

for (const btn of allButtons) {
  btn.addEventListener("click", (event) => {
    const name = event.target.parentNode.childNodes[1].innerText;
    console.log();
  });
}
