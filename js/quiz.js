/*-------------------------------- Constants --------------------------------*/
const result = 1;
const totalQuestions = 10;
/*-------------------------------- Variables --------------------------------*/
let currentQuestion = {};
let correctAnswer = true;

let questions = [
  {
    question: "Who is this character?",
    answer1: "Goku",
    answer2: "Vegeta",
    answer3: "Goten",
    answer4: "Trunks",
    answer: 1,
  },
  {
    question: "Who is this character?",
    answer1: "Pan",
    answer2: "Jaco",
    answer3: "Jiren",
    answer4: "Whis",
    answer: 3,
  },
  {
    question: "Who is this character?",
    answer1: "Whis",
    answer2: "Broly",
    answer3: "Jiren",
    answer4: "Master Roshi",
    answer: 2,
  },
  {
    question: "Who is this character?",
    answer1: "Raditz",
    answer2: "Vegeta",
    answer3: "Andriod 17",
    answer4: "Cell",
    answer: 2,
  },
  {
    question: "Who is this character?",
    answer1: "Goten",
    answer2: "Kid Buu",
    answer3: "Jiren",
    answer4: "Gohan",
    answer: 4,
  },
  {
    question: "Who is this character?",
    answer1: "Frieza",
    answer2: "Cooler",
    answer3: "Freiza",
    answer4: "Andriod 18",
    answer: 1,
  },
  {
    question: "Who is the God of Destruction in the sixth universe?",
    answer1: "Heles",
    answer2: "Iwan",
    answer3: "Sidra",
    answer4: "Champa",
    answer: 4,
  },
  {
    question: "Who is the God of Destruction in the seventh universe?",
    answer1: "Quitela",
    answer2: "Giin",
    answer3: "Beerus",
    answer4: "Sidra",
    answer: 3,
  },
  {
    question: "What is the name of Gohan's daughter",
    answer1: "Bulla",
    answer2: "Pan",
    answer3: "Hailey",
    answer4: "Dolly",
    answer: 2,
  },
  {
    question: "Who's the strongest character in Dragon Ball Super?",
    answer1: "Vados",
    answer2: "Whis",
    answer3: "Grand Priest",
    answer4: "Zeno",
    answer: 4,
  },
];
/*------------------------ Cached Element References ------------------------*/
const question = document.getElementById("question");
const startBtn = document.getElementById("startBtn");
const quizText = document.getElementById("quizTxt");
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', startQuiz)
/*-------------------------------- Functions --------------------------------*/
// Starts Quiz
 function startQuiz() {
console.log('start!')
};

// Select an answer
selectAnswer = () => {

};
// Continues to the next quesiton
nextQuestion = () => {


};

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
//  hard mode: no hints, blacked out images, harder questions
