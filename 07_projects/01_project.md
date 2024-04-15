StackBlitz link to projects: https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

## Project 1 solution code 

```JavaScript

const buttons=document.querySelectorAll('.button')
const body= document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id === 'white'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id
    }
    if (e.target.id === 'purple'){
      body.style.backgroundColor=e.target.id
    }
  })
})
```

## Project 2 solution
```JavaScript
const form= document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if (height==='' || height<0 || isNaN(height)){
    results.innerHTML='Please enter valid information'
  }
  else if (weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML='Please enter valid information'
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    results.innerHTML=`<span>${bmi}</span>`
  }
})
```

## Project 3 solution
```JavaScript
const clock= document.getElementById('clock')

setInterval(function(){
  let date= new Date()
  clock.innerHTML=date.toLocaleTimeString()  
}, 1000)

```
## Project 4 solution
```JavaScript
let randomNumber= parseInt(Math.random()*100+1)
const userInput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const PreviousGuess=document.querySelector('.guesses')
const Remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')


const p= document.createElement('p')

let prevGuess=[]
let numGuess=1;

let playGame=true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert('please enter valid number')
  } else if (guess<1){
    alert('please enter number between 1 and 100')
  } else if (guess>100){
    alert('please enter number between 1 and 100')
  } else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`game over. random number was ${randomNumber}`)
      endGame()
    } else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage('you guessed it right :)')
    endGame()
  } else if (guess>randomNumber){
    displayMessage('you guessed too big number :(')
  } else if (guess<randomNumber){
    displayMessage('you guessed too small number :(')
  }
}

function displayGuess(guess){
  userInput.value=''
  PreviousGuess.innerHTML += `${guess},`
  numGuess++
  Remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame"> Start a new game </h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame(){
  const startAgain=document.querySelector('#newGame')
  startAgain.addEventListener('click', function(e){
    randomNumber= parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    PreviousGuess.innerHTML=''
    Remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    newGame=true
  })
}
```