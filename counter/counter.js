let counter = 0;

let display = document.querySelector("#displayBtn");
let increment = document.querySelector("#incrementBtn");
let decrease = document.querySelector("#decrementBtn");
let reset = document.querySelector("#resetBtn");
let nothing = document.querySelector("#noNum");

// displayBtn.style.backgroundColor = "green"
// reset.style.backgroundColor="orange"

// inrement button
function incrementSelect() {
  counter++;
  display.textContent = counter;
  display.style.backgroundColor = "green";
  if (counter ++) {
    document.querySelector("#noNum").textContent = " "
  }
}
increment.addEventListener("click", incrementSelect);

// derement button
function decrementSelect() {
  if (counter !== 0) {
    counter--;
  }
  display.textContent = counter;
  display.style.backgroundColor = "red";
  if (counter == 0) {
    document.querySelector("#noNum").textContent = "Nothing to display, click the + sign";
    nothing.style.fontSize = "20px"
    nothing.style.backgroundColor = "black"
    display.style.backgroundColor = "black"
  }
}
decrease.addEventListener("click", decrementSelect);

// reset button
function resetSelect() {
  counter = 0;
  display.textContent = counter;
  display.style.backgroundColor = "black";
  if (resetSelect) {
    document.querySelector("#noNum").textContent = "Nothing to display, click the + sign";
    nothing.style.fontSize = "20px"
    nothing.style.backgroundColor = "black"
  }
}
reset.addEventListener("click", resetSelect);
