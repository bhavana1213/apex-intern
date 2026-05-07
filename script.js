// script.js

/* ================= QUIZ SECTION ================= */

const quizData = [
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "CSS", "Python", "Java"],
    correct: "CSS"
  },
  {
    question: "Which language is used for web interactivity?",
    answers: ["JavaScript", "C++", "SQL", "Java"],
    correct: "JavaScript"
  },
  {
    question: "Which tag is used for headings in HTML?",
    answers: ["<p>", "<h1>", "<div>", "<span>"],
    correct: "<h1>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {

  const currentQuiz = quizData[currentQuestion];

  questionEl.innerText = currentQuiz.question;

  answersEl.innerHTML = "";

  currentQuiz.answers.forEach(answer => {

    const button = document.createElement("button");

    button.innerText = answer;

    button.addEventListener("click", () => checkAnswer(answer));

    answersEl.appendChild(button);
  });
}

function checkAnswer(answer){

  if(answer === quizData[currentQuestion].correct){
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if(currentQuestion < quizData.length){

    loadQuestion();
    nextBtn.style.display = "none";

  } else {

    questionEl.innerText = "Quiz Completed!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";

    scoreEl.innerText = `Your Score: ${score}/${quizData.length}`;
  }
});

loadQuestion();
nextBtn.style.display = "none";


/* ================= API FETCH SECTION ================= */

const jokeBtn = document.getElementById("jokeBtn");
const jokeEl = document.getElementById("joke");

jokeBtn.addEventListener("click", getJoke);

async function getJoke(){

  jokeEl.innerText = "Loading joke...";

  try{

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    const data = await response.json();

    jokeEl.innerText = `${data.setup} 😂 ${data.punchline}`;

  } catch(error){

    jokeEl.innerText = "Failed to load joke.";
  }
}