document.querySelector('header > h1').innerText = "Joe's Bed and Breakfast"
document.querySelector ('header > h2').innerText = "Best Slogan Ever"


let userName = prompt("What is your name?")

let message = `Hello ${userName}, welcome to the best lodging in Heber!`

document.querySelector('#greeting').innerText = message

