const form = document.getElementById("welcome-form");
const nameInput = document.getElementById("name");

const welcomeContainer = document.querySelector("#welcome-container");
const quizContainer = document.querySelector("#quiz-container");

let userName = "";

const questions = [
  {
    question: "You have a completely free weekend. What sounds most appealing?",
    answers: [
      { text: "Training hard to master a skill", genre: "sports" },
      { text: "Exploring a place you've never been", genre: "adventure" },
      {
        text: "Pulling harmless pranks on friends",
        genre: "comedy",
      },
      {
        text: "Investing a strange mystery nobody can explain",
        genre: "supernatural",
      },
    ],
  },
  {
    question: "Which type of protagonist do you find most interesting?",
    answers: [
      { text: "Someone willing to fight impossible odds", genre: "action" },
      {
        text: "Someone trying to understand their own mind",
        genre: "psychological",
      },
      { text: "Someone searching for true love", genre: "romance" },
      {
        text: "Someone with powers beyond normal understanding",
        genre: "supernatural",
      },
    ],
  },
  {
    question: "What motivates you the most?",
    answers: [
      { text: "Winning and proving yourself", genre: "sports" },
      { text: "Protecting people you care about", genre: "action" },
      { text: "Discovering what's beyond the horizon", genre: "adventure" },
      { text: "Making others laugh", genre: "comedy" },
    ],
  },
  {
    question: "Which setting sounds most exciting?",
    answers: [
      {
        text: "A world filled with ancient secrets and forgotten lands",
        genre: "adventure",
      },
      {
        text: "A city where unusual paranormal events happen every day",
        genre: "supernatural",
      },
      { text: "A competitive arena where the best competes", genre: "sports" },
      {
        text: "A tense battle of wits between geniuses",
        genre: "psychological",
      },
    ],
  },
  {
    question: "Which conflict would you rather watch unfold?",
    answers: [
      { text: "Rivals competing for a championship", genre: "sports" },
      { text: "Two people slowly falling for each other", genre: "romance" },
      { text: "Heroes battling a dangerous threat", genre: "action" },
      {
        text: "A group surviving bizarre supernatural events",
        genre: "supernatural",
      },
    ],
  },
  {
    question: "Which trait do you admire most?",
    answers: [
      { text: "Determination under pressure", genre: "action" },
      { text: "Curiosity and wanderlust", genre: "adventure" },
      { text: "Emotional honesty", genre: "romance" },
      {
        text: "Cleverness and strategic thinking",
        genre: "psychological",
      },
    ],
  },
  {
    question: "Your ideal story ending is:",
    answers: [
      { text: "The hero triumphs after a fierce struggle", genre: "action" },
      { text: "The characters find happiness together", genre: "romance" },
      {
        text: "The mystery leaves you questioning everything",
        genre: "psychological",
      },
      { text: "Everyone shares one last laugh", genre: "comedy" },
    ],
  },
  {
    question: "Which event would you attend?",
    answers: [
      { text: "A martial arts tournament", genre: "action" },
      { text: "An expedition into uncharted territory", genre: "adventure" },
      {
        text: "A magical festival filled with spirits and legends",
        genre: "supernatural",
      },
      { text: "A school talent show full of funny moments", genre: "comedy" },
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
    question: "Which power would you rather have?",
    answers: [
      { text: "Incredible combat abilities", genre: "action" },
      {
        text: "The ability to communicate with supernatural beings",
        genre: "supernatural",
      },
      {
        text: "The ability to always know the right strategy",
        genre: "psychological",
      },
      { text: "The courage to explore anywhere", genre: "adventure" },
    ],
  },
  {
    question: "Which group would you join?",
    answers: [
      { text: "An elite sports team", genre: "sports" },
      { text: "A guild of adventurers", genre: "adventure" },
      {
        text: "A club dedicated to helping people find love",
        genre: "romance",
      },
      { text: "A group of eccentric comedians", genre: "comedy" },
    ],
  },
  {
    question: "What kind of emotion do you most want from a story?",
    answers: [
      { text: "Excitement and adrenaline", genre: "action" },
      { text: "Curiosity and unease", genre: "psychological" },
      { text: "Wonder and discovery", genre: "adventure" },
      { text: "Deep emotional connection", genre: "romance" },
    ],
  },
];

const scores = {
  action: 0,
  adventure: 0,
  psychological: 0,
  sports: 0,
  romance: 0,
  supernatural: 0,
  comedy: 0,
};

const genreDescriptions = {
  action: "You love excitement, battles, and high stakes",
  adventure: "You enjoy exploration and discovering new worlds",
  psychological: "You like deep mysteries and complex characters",
  sports: "You enjoy competition and personal growth",
  romance: "You appreciate relationships and emotional stories",
  supernatural: "You enjoy magic, spirits, and the unknown",
  comedy: "You love humor and lighthearted adventures.",
};

const recommendations = {
  action: [
    {
      title: "Attack on Titan",
      image: "./anime-recommendations/action-AOT.jpg",
    },
    {
      title: "Jujustsu Kaisen",
      image: "./anime-recommendations/action-JJK.jpg",
    },
    { title: "Black Clover", image: "./anime-recommendations/action-BC.jpg" },
  ],
  adventure: [
    { title: "One Piece", image: "./anime-recommendations/adventure-OP.jpg" },
    {
      title: "Hunter x Hunter",
      image: "./anime-recommendations/adventure-HxH.jpg",
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      image: "./anime-recommendations/adventure-FMAB.jpg",
    },
  ],
  psychological: [
    {
      title: "Death Note",
      image: "./anime-recommendations/psychological-DN.jpg",
    },
    {
      title: "Monster",
      image: "./anime-recommendations/psychological-Mon.jpg",
    },
    {
      title: "Orb: Movement of the Earth",
      image: "./anime-recommendations/psychological-Orb.jpg",
    },
  ],
  sports: [
    {
      title: "Hajime no Ippo",
      image: "./anime-recommendations/sports-ippo.jpg",
    },
    { title: "Slam Dunk", image: "./anime-recommendations/sports-SD.jpg", },
    { title: "Eyeshield 21", image: "./anime-recommendations/sports-eye.jpg" },
  ],
  romance: [
    {
      title: "Your Name",
      image: "./anime-recommendations/romance-yourname.jpg",
    },
    {
      title: "Your Lie in April",
      image: "./anime-recommendations/romance-april.jpg",
    },
    { title: "Re-Life", image: "./anime-recommendations/romance-relife.jpg" },
  ],
  supernatural: [
    {
      title: "Bungo Stray Dogs",
      image: "./anime-recommendations/supernatural-BSD.jpg",
    },
    {
      title: "Mob Psycho 100",
      image: "./anime-recommendations/supernatural-mob.jpg",
    },
    {
      title: "JoJo Bizarre Adventure",
      image: "./anime-recommendations/supernatural-jojo.jpg",
    },
  ],
  comedy: [
    { title: "Spy x Family", image: "./anime-recommendations/comedy-spy.jpg" },
    {
      title: "The Disastrous Life of Saiki K.",
      image: "./anime-recommendations/comedy-saiki.jpg",
    },
    {
      title: "Assassination Classroom",
      image: "./anime-recommendations/comedy-class.jpg",
    },
  ],
};

let currentQuestion = 0;

const questionEl = document.querySelector(".question");
const buttons = document.querySelectorAll(".answers button");
let selectedGenre = null;

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  buttons.forEach((btn, i) => {
    btn.textContent = q.answers[i].text;

    btn.onclick = () => {
      scores[q.answers[i].genre]++;
      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    };
  });
}

function showResults() {
  quizContainer.style.display = "none";
  document.querySelector("header").style.display = "none";

  let highestScore = 0;

  for (let genre in scores) {
    if (scores[genre] > highestScore) {
      highestScore = scores[genre];
      selectedGenre = genre;
    }
  }
  document.body.className = `genre-${selectedGenre}`;

  setTimeout(() => {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";

    resultContainer.innerHTML = `
    <h2>${userName}, your recommended genre is: ${selectedGenre.toUpperCase()}</h2>
    <p>${genreDescriptions[selectedGenre]}</p>`;

    setTimeout(() => {
      const picks = recommendations[selectedGenre];
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

      const frag = document.createDocumentFragment();

      picks.forEach((anime) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.setAttribute("src", anime.image);
        image.setAttribute("alt", anime.title);

        const title = document.createElement("h3");
        title.textContent = anime.title;

        card.appendChild(image);
        card.appendChild(title);

        frag.appendChild(card);
      });
      cardContainer.appendChild(frag);
      resultContainer.appendChild(cardContainer);

      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Take Quiz Again";
      resultContainer.appendChild(resetBtn);

      resetBtn.addEventListener("click", (e) => {
        const resultSection = resetBtn.parentElement;

        resultSection.innerHTML = "";

        currentQuestion = 0;
        selectedGenre = null;

        for (let genre in scores) {
          scores[genre] = 0;
        }

        document.querySelector("header").style.display = "block";
        welcomeContainer.style.display = "block";
        document.body.className = "genre-default";
      });
    }, 2500);
  }, 1000);
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

  loadQuestion();
});
