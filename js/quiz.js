//Psuedo code:
//---------------------------------
// - Create the structure of the home page:
// - Sound effect if he/she answered correct and wrong
// - Provide a text showing the number of question they are currently at out of the total.
// - Prevent user from being able to answer the next question they have not answered the current one.
// - If and else statement determining whether they have failed or not. A score of 6/10 and above is a pass and anything below is a fail.
// - End function to display their result at the end of the quiz. If they failed game over music will go.
// - If they score perfect provide a sound effect with and image saying "PERFECT".
// - Create the structure of the home page:
// - Have the answers as multiple choice buttons for them to choose from.
// - Create an array of characters and an array of items.
// - confetti
// - add percentage score
// - Restart Quiz: add icon button

/*-------------------------------- Variables --------------------------------*/
let currentQuestionIdx, randomQuestion;
let result = 0; // counts the correct answers
let currentQuestion = 1;
/*-------------------------------Constants-----------------------------------*/

const questions = [
  { image:"/images/goku.jpg",
  question: "Who is this character?",
    answers: [
      { text: "Goku", correct: true },
      { text: "Krillin", correct: false },
      { text: "Bardock", correct: false },
      { text: "Trunks", correct: false },
    ],
  },
  { image:"/images/jiren.jpg",
    question: "Who is this character?",
    answers: [
      { text: "Monaka", correct: false},
      { text: "Jaco", correct: false },
      { text: "Jiren", correct: true },
      { text: "Tien", correct: false },
    ],
  },
  {
    question: "Who is this character?",
    image:"/images/broly.jpg",
    answers: [
      { text: "Caulifla", correct: false },
      { text: "Broly", correct: true },
      { text: "Yamacha", correct: false },
      { text: "Master Roshi", correct: false },
    ],
  },
  { image:"/images/vegeta.jpg",
    question: "Who is this character?",
    answers: [
      { text: "Raditz", correct: false },
      { text: "Vegeta", correct: true },
      { text: "Andriod 17", correct: false },
      { text: "Cell", correct: false },
    ],
  },
  {
    question: "Who is this character?",
    image:"/images/gohan.png",
    answers: [
      { text: "Goten", correct: false },
      { text: "Kid Buu", correct: false },
      { text: "Majin Buu", correct: false },
      { text: "Gohan", correct: true },
    ],
  },
  {
    question: "Who is this character?",
    image:"/images/frieza.png",
    answers: [
      { text: "Frieza", correct: true },
      { text: "Cooler", correct: false },
      { text: "Freiza", correct: false },
      { text: "Andriod 18", correct: false },
    ],
  },
  {
    question: "Who is the God of Destruction in the sixth universe?",
    image:"/images/champa.jpg",
    answers: [
      { text: "Heles", correct: false },
      { text: "Iwan", correct: false },
      { text: "Sidra", correct: false },
      { text: "Champa", correct: true },
    ],
  },
  {
    question: "Who is the God of Destruction in the seventh universe?",
    image:"/images/beerus.png",
    answers: [
      { text: "Quitela", correct: false },
      { text: "Giin", correct: false },
      { text: "Beerus", correct: true },
      { text: "Belmod", correct: false },
    ],
  },
  {
    question: "What is the name of Gohan's daughter",
    image:"/images/pan.jpg",
    answers: [
      { text: "Bulla", correct: false },
      { text: "Pan", correct: true },
      { text: "Hailey", correct: false },
      { text: "Dolly", correct: false },
    ],
  },
  {
    question: "Who's the strongest character in Dragon Ball Super?",
    image:"/images/zeno.png",
    answers: [
      { text: "Vados", correct: false },
      { text: "Whis", correct: false },
      { text: "Grand Priest", correct: false },
      { text: "Zeno", correct: true },
    ],
  },
];

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.getElementById("startBtn");
const qBoxEl = document.getElementById("questionContainer");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");
const resultForm = document.getElementById("result-form");
const image = document.getElementById("image");
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  document.getElementById("answerBtn").classList.remove("no-click");
  currentQuestionIdx++;
  nextQuestion();

  currentQuestion++;
  document.getElementById("current-question").innerHTML = currentQuestion;
});
/*-------------------------------- Functions --------------------------------*/
// Starts Quiz

function startQuiz() {
  let teleportAudio = new Audio(`/audio/dbz-teleport.mp3`)
  teleportAudio.play();
  teleportAudio.volume = .2;
  document.getElementById("answerBtn").classList.remove("no-click"); //removes the classList no-click
  resultForm.classList.add("hide"); //hides resultform
  startBtn.classList.add("hide"); // hides startBtn
  randomQuestion = questions.sort(() => Math.random() - 0.5); // randomizes questions
  currentQuestionIdx = 0;
  qBoxEl.classList.remove("hide"); // removes the question container Element by adding the class hide, that is display: none; in css.
  nextQuestion();

  currentQuestion = 1; // indicates what question to show when starting game in your result form
  document.getElementById("current-question").innerHTML = currentQuestion;
  // reset counter after the quiz started
  result = 0;


  document.getElementById("total-questions2").innerHTML = questions.length;
  document.getElementById("total-questions").innerHTML = questions.length;
}

// Continues to the next question
function nextQuestion() {
  resetNextQuestion();
  displayQuestion(randomQuestion[currentQuestionIdx]);
}

// Makes the questions appear
function displayQuestion(show) {
  questionEl.innerText = show.question;
  show.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", answerChoices);
    answerBtnEl.appendChild(button);
    image.src=`${show.image}`
  });
}
//resets next question

function resetNextQuestion() {
  nextBtn.classList.add("hide");
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild);
  }
}

// Pick an answer
function answerChoices(answer) {
  const answerChoice = answer.target;
  const correct = answerChoice.dataset.correct;
  Array.from(answerBtnEl.children).forEach((button) => {
    addAnswerClass(button, button.dataset.correct);
  });

  // determines the end of questions to make the restart button display / end quiz

  if (randomQuestion.length > currentQuestionIdx + 1) {
    nextBtn.classList.remove("hide"); //removes the hide class from startBtn
  } else {
    resultForm.classList.remove("hide"); //removes the hide class from resultForm
    qBoxEl.classList.remove("hide");
    confetti.start(10000);
    let winnerAudio = new Audio(`/audio/winner.mp3`)
    winnerAudio.play();
    winnerAudio.volume = .1;
    startBtn.innerText = "RESTART";
    startBtn.classList.remove("hide"); // removes the hide class from startBtn
  }

  if ((answerChoice.dataset = correct)) {

    result++; // if answer is correct it will add one correct score to the results
  }

  // show results in span

  document.getElementById("correct-answers").innerHTML = result;

  document.getElementById("answer-percentage").innerHTML = (
    (100 * result) /
    questions.length
  ).toFixed(0);

  //prevent multiclicking

  document.getElementById("answerBtn").classList.add("no-click");
}

// Checks what class to add baised off it being correct or wrong

function addAnswerClass(choice, correct) {
  removeAnswerClass(choice);
  if (correct) {
    choice.classList.add("correct");
    let answerAudio = new Audio(`/audio/answer-button.mp3`)
    answerAudio.play();
    answerAudio.volume = .1;
  } else {
    choice.classList.add("wrong");

  }
}
// removes answer class

function removeAnswerClass(choice) {
  choice.classList.remove("correct");
  choice.classList.remove("wrong");
}
