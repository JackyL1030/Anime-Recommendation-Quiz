const form = document.getElementById("welcome-form");
const nameInput = document.getElementById("name");

const welcomeContainer = document.querySelector("#welcome-container");
const quizContainer = document.querySelector("#quiz-container");

let userName = "";

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    userName = nameInput.value.trim();

    if(!userName){
        alert("Please enter your name first!");
        return;
    }

    welcomeContainer.style.display = "none";
    quizContainer.style.display = "block";

    document.querySelector(".question").textContent = 
    `Welcome ${userName}! You're walking and randomly, you're being followed by a mysterious entity.`
})