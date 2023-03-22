let counterHome = 0;

// Home section //
let homeScoreDisplay = document.querySelector("#homeDisplay");
let homeButton1 = document.querySelector("#home1");
let homeButton2 = document.querySelector("#home2");
let homeButton3 = document.querySelector("#home3");
let resetBtn = document.querySelector("#reset");

// Buttons change color when clicked //
// homeButton1.style.backgroundColor = "#24a0ed";
// homeButton1.style.color = "white";

// homeButton2.style.backgroundColor = "#ef96d6";
// homeButton2.style.color = "white";

// homeButton3.style.backgroundColor = "#5349d6";
// homeButton3.style.color = "white";

// New game button home
function newGameHome() {
  counterHome = 0;
  homeScoreDisplay.textContent = counterHome;
}
resetBtn.addEventListener("click", newGameHome);

// Home section //

//  Home button one
function homeCount1() {
  counterHome++;
  homeScoreDisplay.textContent = counterHome;
}
homeButton1.addEventListener("click", homeCount1);

//  Home button two
function homeCount2() {
  counterHome += 2;
  homeScoreDisplay.textContent = counterHome;
}
homeButton2.addEventListener("click", homeCount2);

//  Home button three
function homeCount3() {
  counterHome += 3;
  homeScoreDisplay.textContent = counterHome;
}
homeButton3.addEventListener("click", homeCount3);

// ************************************************************

// Away section //
let awayScoreDisplay = document.querySelector("#awayDisplay");
let awayButton1 = document.querySelector("#away1");
let awayButton2 = document.querySelector("#away2");
let awayButton3 = document.querySelector("#away3");

// Buttons change color when clicked //
// awayButton1.style.backgroundColor = "#24a0ed";
// awayButton1.style.color = "white";

// awayButton2.style.backgroundColor = "#ef96d6";
// awayButton2.style.color = "white";

// awayButton3.style.backgroundColor = "#5349d6";
// awayButton3.style.color = "white";

// New game button away
function newGameAway() {
  counterHome = 0;
  awayScoreDisplay.textContent = counterHome;
}
resetBtn.addEventListener("click", newGameAway);

// Away button one //
function awayCount1() {
  counterHome++;
  awayScoreDisplay.textContent = counterHome;
}
awayButton1.addEventListener("click", awayCount1)

// Away button two //
function awayCount2() {
  counterHome += 2;
  awayScoreDisplay.textContent = counterHome;
}
awayButton2.addEventListener("click", awayCount2);

// Away button three //
function awayCount3() {
  counterHome += 3;
  awayScoreDisplay.textContent = counterHome;
}
awayButton3.addEventListener("click", awayCount3);
