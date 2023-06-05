let allItems = [];
let addItem = document.querySelector(".add-item");
let sortItem = document.querySelector(".sort-items");
let outputItems = document.querySelector("#outputItems");
let inputItem = document.querySelector(".input-display");


addItem.addEventListener("click", (e) => {
  e.preventDefault();
  outputItems.innerHTML += `<p class="output" id="outputItems">${inputItem.value}
    </p>`;
  allItems.push(inputItem.value);inputItem.value = ""
  console.log(allItems);
});

sortItem.addEventListener("click", (e) => {
  e.preventDefault();
  inputItem.value = ""
  console.log(allItems.sort());
  allItems.sort();
  display();
});

function display() {
  outputItems.innerHTML = "";
  allItems.forEach((item) => {
    outputItems.innerHTML += `<p class="output" id="outputItems">${item}
    </p>`;
  });
}
