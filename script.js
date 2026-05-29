const form = document.getElementById("welcome-form");
const nameInput = document.getElementById("name");

const welcomeContainer = document.querySelector("#welcome-container");
const quizContainer = document.querySelector("#quiz-container");

let userName = "";

const questions = [
  {
    question: "You wake up and your reflection moves… but you don’t.",
    answers: [
      { text: "Confront it immediately", genre: "action" },
      { text: "Try to understand the phenomenon", genre: "psychological" },
      {
        text: "Look for a logical explanation in the world",
        genre: "adventure",
      },
      { text: "Laugh nervously and joke about it", genre: "comedy" },
    ],
  },
  {
    question: "A dragon lands in front of you, watching silently.",
    answers: [
      { text: "Prepare to fight", genre: "action" },
      { text: "Try to communicate with it", genre: "supernatural" },
      { text: "Study its behavior carefully", genre: "psychological" },
      { text: "Try to befriend it", genre: "romance" },
    ],
  },
  {
    question: "You find a book that changes reality when read.",
    answers: [
      { text: "Use it to gain power", genre: "action" },
      { text: "Experiment cautiously", genre: "adventure" },
      { text: "Analyze its rules and structure", genre: "psychological" },
      { text: "Treat it like a prank waiting to happen", genre: "comedy" },
    ],
  },
  {
    question: "Time suddenly freezes except for you.",
    answers: [
      { text: "Find the source and stop it", genre: "action" },
      { text: "Explore the frozen world", genre: "adventure" },
      { text: "Test whether your mind is stable", genre: "psychological" },
      { text: "Mess with people for fun", genre: "comedy" },
    ],
  },
  {
    question: "You are invited to a mysterious tournament.",
    answers: [
      { text: "Train and compete seriously", genre: "sports" },
      { text: "Study opponents before acting", genre: "psychological" },
      { text: "Jump in and fight your way through", genre: "action" },
      { text: "Treat it like entertainment", genre: "comedy" },
    ],
  },
  {
    question: "A door appears in your room every night.",
    answers: [
      { text: "Force it open", genre: "action" },
      { text: "Follow where it leads", genre: "adventure" },
      { text: "Record patterns carefully", genre: "psychological" },
      {
        text: "Ignore it… probably nothing (but check anyway)",
        genre: "supernatural",
      },
    ],
  },
  {
    question: "A ghost starts speaking to you like it knows you.",
    answers: [
      { text: "Confront it", genre: "action" },
      { text: "Ask what it wants", genre: "supernatural" },
      { text: "Question your sanity", genre: "psychological" },
      { text: "Roast it casually", genre: "comedy" },
    ],
  },
  {
    question: "You gain a strange power overnight.",
    answers: [
      { text: "Use it immediately", genre: "action" },
      { text: "Test its limits carefully", genre: "adventure" },
      { text: "Analyze how it affects reality", genre: "psychological" },
      { text: "Accidentally cause chaos while experimenting", genre: "comedy" },
    ],
  },
  {
    question: "You meet someone who could become important to you.",
    answers: [
      { text: "Compete with them", genre: "sports" },
      { text: "Form a bond over time", genre: "romance" },
      { text: "Study their behavior and strengths", genre: "psychological" },
      { text: "Turn it into friendly rivalry", genre: "adventure" },
    ],
  },
  {
    question: "You see a future version of yourself in a dream.",
    answers: [
      { text: "Try to change your fate", genre: "action" },
      { text: "Search for meaning in the vision", genre: "psychological" },
      { text: "Go on a journey to understand it", genre: "adventure" },
      { text: "Assume it's just your brain trolling you", genre: "comedy" },
    ],
  },
];

const scores ={
    action:0,
    adventure:0,
    psychological:0,
    sports:0,
    romance:0,
    supernatural:0,
    comedy:0,
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  userName = nameInput.value.trim();

  if (!userName) {
    alert("Please enter your name first!");
    return;
  }

  welcomeContainer.style.display = "none";
  quizContainer.style.display = "block";

  document.querySelector(".question").textContent =
    `Welcome ${userName}! You're walking and suddenly, you're being followed by a mysterious entity.`;
});
