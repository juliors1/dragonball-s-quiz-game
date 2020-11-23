/*-------------------------------- Variables --------------------------------*/
let currentQuestionIdx, randomQuestion;
/*-------------------------------Constants-----------------------------------*/

const questions = [
  {
    question: "Who is this character?",
    answers: [
      { text: "Goku", correct: true },
      { text: "Krillin", correct: false },
      { text: "Bardock", correct: false },
      { text: "Trunks", correct: false },
    ],
  },
  {
    question: "Who is this character?",
    answers: [
      { text: "Monaka", correct: false },
      { text: "Jaco", correct: false },
      { text: "Jiren", correct: true },
      { text: "Tien", correct: false },
    ],
  },
  {
    question: "Who is this character?",
    answers: [
      { text: "Caulifla", correct: false },
      { text: "Broly", correct: true },
      { text: "Yamacha", correct: false },
      { text: "Master Roshi", correct: false },
    ],
  },
  {
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
    answers: [
      { text: "Goten", correct: false },
      { text: "Kid Buu", correct: false },
      { text: "Majin Buu", correct: false },
      { text: "Gohan", correct: true },
    ],
  },
  {
    question: "Who is this character?",
    answers: [
      { text: "Frieza", correct: true },
      { text: "Cooler", correct: false },
      { text: "Freiza", correct: false },
      { text: "Andriod 18", correct: false },
    ],
  },
  {
    question: "Who is the God of Destruction in the sixth universe?",
    answers: [
      { text: "Heles", correct: false },
      { text: "Iwan", correct: false },
      { text: "Sidra", correct: false },
      { text: "Champa", correct: true },
    ],
  },
  {
    question: "Who is the God of Destruction in the seventh universe?",
    answers: [
      { text: "Quitela", correct: false },
      { text: "Giin", correct: false },
      { text: "Beerus", correct: true },
      { text: "Belmod", correct: false },
    ],
  },
  {
    question: "What is the name of Gohan's daughter",
    answers: [
      { text: "Bulla", correct: false },
      { text: "Pan", correct: true },
      { text: "Hailey", correct: false },
      { text: "Dolly", correct: false },
    ],
  },
  {
    question: "Who's the strongest character in Dragon Ball Super?",
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
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener("click", startQuiz);
/*-------------------------------- Functions --------------------------------*/
// Starts Quiz
function startQuiz() {
  startBtn.classList.add("hide");
  randomQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIdx = 0;
  qBoxEl.classList.remove("hide");
  nextQuestion();
}
// Continues to the next question
function nextQuestion() {
  resetNextQuestion();
  setQuestion(randomQuestion[currentQuestionIdx]);
}
// Makes the questions appear
function setQuestion(show) {
  questionEl.innerText = show.question;
  show.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", answerChoice);
    answerBtnEl.appendChild(button);
  });
}
//resets next question
function resetNextQuestion() {
  nextBtn.classList.add("hide");
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild);
  }
}

// Picks an answer
function answerChoices(answer) {
  const answerChoice = answer.target;
  const correct = answerChoice.dataset.correct;
  Array.from(answerBtnEl.children).forEach((button) => {
    checkAnswer(button, button.dataset.correct);
  });

  function checkAnswer(element, correct) {
    clearChoice(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  }


}

//Psuedo code:
// - Create an music ID icon button for music option
// - Create an instruction ID icon button
// - Provide a hint for the user
// - Sound effect if he/she answered correct and wrong
// - Provide a text showing the number of question they are currently at out of the total.
// - If wrong show a description of every character or item and provide the wrong with an X icon colored red and the correct answer colored green.
// - Prevent user from being able to answer the next question they have not answered the current one.
// - If and else statement determining whether they have failed or not. A score of 6/10 and above is a pass and anything below is a fail.
// - End function to display their result at the end of the quiz. If they failed game over music will go.
// - If they score perfect provide a sound effect with and image saying "PERFECT".
// - Retake Quiz: add icon button
// - next question function

//Objectives:
// - Mobile friendly
//  normal mode: provide images,easier questions and hints for them.
//  hard mode: no hints, blacked out images, harder questions.
