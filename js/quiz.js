
/*-------------------------------- Variables --------------------------------*/
let currentQuestionIdx, randomQuestion;
let result = 0; // counts the correct answers
let currentQuestion = 1;
/*-------------------------------Constants-----------------------------------*/

const questions = [
  {
    image: "/images/goku.jpg",
    question: "Who is this character?",
    answers: [
      { text: "Goku", correct: true },
      { text: "Krillin", correct: false },
      { text: "Bardock", correct: false },
      { text: "Trunks", correct: false },
    ],
  },
  {
    image: "/images/jiren.jpg",
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
    image: "/images/broly.jpg",
    answers: [
      { text: "Caulifla", correct: false },
      { text: "Broly", correct: true },
      { text: "Yamacha", correct: false },
      { text: "Master Roshi", correct: false },
    ],
  },
  {
    image: "/images/vegeta.jpg",
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
    image: "/images/gohan.png",
    answers: [
      { text: "Goten", correct: false },
      { text: "Kid Buu", correct: false },
      { text: "Majin Buu", correct: false },
      { text: "Gohan", correct: true },
    ],
  },
  {
    question: "Who is this character?",
    image: "/images/frieza.png",
    answers: [
      { text: "Frieza", correct: true },
      { text: "Cooler", correct: false },
      { text: "Freiza", correct: false },
      { text: "Andriod 18", correct: false },
    ],
  },
  {
    question: "Who is the God of Destruction in the sixth universe?",
    image: "/images/champa.jpg",
    answers: [
      { text: "Heles", correct: false },
      { text: "Iwan", correct: false },
      { text: "Sidra", correct: false },
      { text: "Champa", correct: true },
    ],
  },
  {
    question: "Who is the God of Destruction in the seventh universe?",
    image: "/images/beerus.png",
    answers: [
      { text: "Quitela", correct: false },
      { text: "Giin", correct: false },
      { text: "Beerus", correct: true },
      { text: "Belmod", correct: false },
    ],
  },
  {
    question: "What is the name of Gohan's daughter",
    image: "/images/pan.jpg",
    answers: [
      { text: "Bulla", correct: false },
      { text: "Pan", correct: true },
      { text: "Hailey", correct: false },
      { text: "Dolly", correct: false },
    ],
  },
  {
    question: "Who's the strongest character in Dragon Ball Super?",
    image: "/images/zeno.png",
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
  document.getElementById("answerBtn").classList.remove("no-click"); // removes the noclick
  currentQuestionIdx++;
  nextQuestion();

  currentQuestion++;
  document.getElementById("current-question").innerHTML = currentQuestion;
});
/*-------------------------------- Functions --------------------------------*/
// Starts Quiz

function startQuiz() {
  let teleportAudio = new Audio(`/audio/dbz-teleport.mp3`);
  teleportAudio.play(); //start and restart audio
  teleportAudio.volume = 0.2;
  document.getElementById("answerBtn").classList.remove("no-click"); //removes the classList no-click
  resultForm.classList.add("hide"); //hides resultform when game starts
  startBtn.classList.add("hide"); // hides startBtn when game starts
  randomQuestion = questions.sort(() => Math.random() - 0.5); // randomizes questions in array
  currentQuestionIdx = 0; //first question from the randomQuestion array
  qBoxEl.classList.remove("hide"); // removes the question container Element by removing the class hide, that is display: none; in css.
  nextQuestion();

  currentQuestion = 1; // indicates what question to show when starting game in your question container
  document.getElementById("current-question").innerHTML = currentQuestion;
  // reset counter after the quiz started
  result = 0;

  document.getElementById("total-questions2").innerHTML = questions.length; // 10
  document.getElementById("total-questions").innerHTML = questions.length; //current
}

// Continues to the next question
function nextQuestion() {
  resetNextQuestion();  //reset the state of question
  displayQuestion(randomQuestion[currentQuestionIdx]); // display the randomQuestion at the current idx
}

// Makes the questions appear
function displayQuestion(show) {
  questionEl.innerText = show.question; // question displays on screen using the innerText
  show.answers.forEach((answer) => { // used a forEach to create new buttons
    const button = document.createElement("button"); //creates button
    button.innerText = answer.text; // generates the answers in the array into the new button
    button.classList.add("btn"); // adds class btn to the new button
    if (answer.correct) { //checks if answer is correct
      button.dataset.correct = answer.correct;  // adds a dataAttribute into the button element
    }
    button.addEventListener("click", answerChoices); //event click for answer choice

    answerBtnEl.appendChild(button);

  });
  image.src = `${show.image}`; // allows me to have my images appear in my questions
}
//resets next question

function resetNextQuestion() {
  nextBtn.classList.add("hide"); // hides the next Btn after every turn until u answer
  while (answerBtnEl.firstChild) {  //
    answerBtnEl.removeChild(answerBtnEl.firstChild); //loops through all the children for the answerBtn element so it can remove it.
  }
}

// selects an answer
function answerChoices(answer) {
  const answerChoice = answer.target; // targets the answer button u clicked on
  const correct = answerChoice.dataset.correct; // check if it equals the correct dataset
  Array.from(answerBtnEl.children).forEach((button) => { // convert to an array because answerBtnEl.children is a live collection and is not an array so it updates on its own, so we can use a forEach.
    addAnswerClass(button, button.dataset.correct); // for each button check if button dataset is correct
  });

  // determines the end of questions to make the restart button display / end quiz

  if (randomQuestion.length > currentQuestionIdx + 1) {
    nextBtn.classList.remove("hide"); //removes the hide class from startBtn
  } else {
    resultForm.classList.remove("hide"); //removes the hide class from resultForm
    qBoxEl.classList.remove("hide");
    confetti.start(10000);
    let winnerAudio = new Audio(`/audio/winner.mp3`); // winner audio
    winnerAudio.play();
    winnerAudio.volume = 0.1;
    startBtn.innerText = "RESTART"; // changes the startBtn into RESTART
    startBtn.classList.remove("hide"); // removes the hide class from startBtn
  }

  if ((answerChoice.dataset = correct)) {
    result++; // if answer is correct it will add one correct score to the results
  }

  // show results in result form

  document.getElementById("correct-answers").innerHTML = result; // displays the correct answer of result

  document.getElementById("answer-percentage").innerHTML = (
    (100 * result) /   // turns a fraction into a percentage
    questions.length
  ).toFixed(0);

  //prevent multiclicking

  document.getElementById("answerBtn").classList.add("no-click");
}

// Checks what class to add baised off it being correct or wrong

function addAnswerClass(choice, correct) {
  removeAnswerClass(choice);
  if (correct) {
    choice.classList.add("correct"); // shows class for the correct answer button (lime)
    let answerAudio = new Audio(`/audio/answer-button.mp3`); //answer button audio
    answerAudio.play();
    answerAudio.volume = 0.1;
  } else {
    choice.classList.add("wrong"); //shows class for the wrong answer button (red)
  }
}
// removes answer class

function removeAnswerClass(choice) {
  choice.classList.remove("correct"); //removes the class of correct and wrong in answer
  choice.classList.remove("wrong");
}
