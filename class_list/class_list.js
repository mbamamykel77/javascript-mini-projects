// take out d-flex and replace with d-none

// let firstdiv - document.querry

// firstDiv.classlist.add/remove('d-none')

let submitButton = document.querySelector('#btn');
let firstDiv = document.querySelector('.d-flex');
let secondDiv = document.querySelector('.d-none');
let selectBtn = document.querySelector('.selected');
let rateButton = document.querySelectorAll('.rateBtn');
let actualRating = document.querySelector('#rating');
let rateAgain = document.getElementById('rate-again');
let popUp = document.querySelector('.pop-up');

let buttonClicked = false;

submitButton.addEventListener('click', function () {
  if (!buttonClicked) {
    popUp.classList.add('active');
    setTimeout(() => {
      popUp.classList.remove('active');
    }, 2000);
  } else {
    firstDiv.classList.remove('d-flex');
    firstDiv.classList.add('d-none');
    secondDiv.classList.add('d-flex');
    secondDiv.classList.remove('d-none');
    buttonClicked = false;
  }
});

rateButton.forEach((rating) => {
  rating.addEventListener('click', () => {
    buttonClicked = true;
    actualRating.innerHTML = rating.innerHTML;
  });
});

rateAgain.addEventListener('click', function () {
  firstDiv.classList.add('d-flex');
  firstDiv.classList.remove('d-none');
  secondDiv.classList.remove('d-flex');
  secondDiv.classList.add('d-none');
});
