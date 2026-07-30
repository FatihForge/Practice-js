

let display = document.getElementById("display")
let minus = document.getElementById("decrease")
let reset = document.getElementById("reset")
let add = document.getElementById("increase")

let count = 0

add.addEventListener("click", function () {
     count ++
    display.innerText = count
    
})

 minus.addEventListener("click", function (){
     if (count !=0) { count --
      display.innerText = count
     } 
})

reset.addEventListener("click", function () {
     count = 0
    display.innerText = count
})

/* 2. password Show */

const password = document.getElementById("password")
const toggleBtn = document.getElementById("toggleBtn")

toggleBtn.addEventListener("click", function () {
    if (password.type  === "password"){
        password.type = "text"
    toggleBtn.innerText = "Hide Password"
    } else {
        password.type = "password"
        toggleBtn.innerText = "Show Password"
    }
})

/* 3. Character Counter */

const textInput = document.getElementById("textInput")
const counting = document.getElementById("counting")

textInput.addEventListener("input", function () {
    counting.innerText = ("Characters:" + textInput.value.length)
})

/* 4. Theme Toggle */
const themeBtn = document.getElementById("themeBtn")
const mode = document.getElementById("mode")

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
    themeBtn.innerText = "Light Mode";
    mode.innerText = "Current Mode: Dark";
} else {
    themeBtn.innerText = "Dark Mode";
    mode.innerText = "Current Mode: Light";
}
})



/* x. Number Guessing Game */
const guess = document.getElementById("guess");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
let score = document.getElementById("score");
let scoreValue = 10;

let secretnumber = Math.floor(Math.random() * 10) + 1
// console.log(secretnumber)


checkBtn.addEventListener("click", function (){
    let userguess = Number(guess.value);

if ( userguess === secretnumber) {
    result.innerText = "Match the guess" 
    scoreValue +=3;
    score.innerText = "score: " + scoreValue
} else if (userguess > secretnumber) {
    result.innerText = "Too High"
    scoreValue -=1;
    score.innerText = "score: " + scoreValue
} else {
    result.innerText = "Too Low"
    scoreValue -=3;
    score.innerText = "score: " + scoreValue
}
})

resetBtn.addEventListener("click", function () {
    secretnumber  = "";
    guess.value = "";
    result.innerText = "Result will appear here."
})

