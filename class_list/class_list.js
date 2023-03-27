// take out d-flex and replace with d-none

// let firstdiv - document.querry

// firstDiv.classlist.add/remove('d-none')


let submitButton = document.querySelector('#btn')
let firstDiv = document.querySelector('.d-flex')
let secondDiv = document.querySelector('.d-none')
let selectBtn = document.querySelector('.selected')
let rateButton = document.querySelectorAll('.rateBtn')
let actualRating = document.querySelector('#rating')


submitButton.addEventListener('click', function(){
firstDiv.classList.remove('d-flex')
firstDiv.classList.add('d-none')

secondDiv.classList.add('d-flex')
secondDiv.classList.remove('d-none')
});


rateButton.forEach((rating)=>{
    rating.addEventListener('click', () => {
        actualRating.innerHTML = rating.innerHTML
    })
})


