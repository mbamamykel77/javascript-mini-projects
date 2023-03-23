// take out d-flex and replace with d-none

// let firstdive - dsument.querry

// firstDiv.classlist.add/remove('d-none')


let submitButton = document.querySelector('#btn')
let firstDiv = document.querySelector('.d-flex')
let secondDiv = document.querySelector('.d-none')

// submitButton.style.backgroundColor = 'green'

submitButton.addEventListener('click', function(){
firstDiv.classList.remove('d-flex')
firstDiv.classList.add('d-none')

secondDiv.classList.add('d-flex')
secondDiv.classList.remove('d-none')
});

