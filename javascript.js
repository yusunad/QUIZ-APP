const questions = [
  {
    question: "What is javascript?",
    answers: [
      { text: "A type of coffee", correct: false },
      { text: "A web browser", correct: false },
      { text: "A programming language", correct: true },
      { text: "A database", correct: false },
    ],
  },

  {
    question: "How do you declare a variable in javascript?",
    answers: [
      { text: "variable myVariable", correct: false },
      { text: "var myVariable", correct: true },
      { text: "myVariable = var", correct: false },
      { text: "let myVariable", correct: false },
    ],
  },

  {
    question: "What is the purpose of the 'console.log()' function?",
    answers: [
      { text: "To create a new variable", correct: false },
      { text: "To define a function", correct: false },
      { text: "To stop the program", correct: false },
      { text: "To print output to the console", correct: true },
    ],
  },

  {
    question: "Who invented JavaScript?",
    answers: [
      {
        text: "James Gosling",
        correct: false,
      },
      {
        text: "Brendan Eich",
        correct: true,
      },
      {
        text: "Tim Berners-Lee",
        correct: false,
      },

      {
        text: "Guido van Rossum",
        correct: false,
      },
    ],
  },

  {
    question: "Nascomsoft Embedded was founded in what year",
    answers: [
      { text: "2015", correct: false },
      { text: "2018", correct: false },
      { text: "2017", correct: false },
      { text: "2019", correct: true },
    ],
  },

  {
    question: "What is the name of your Javascript Tutor in Nascomsoft",
    answers: [
      { text: "Yohanna", correct: false },
      { text: "Yohana", correct: true },
      { text: "Samuel", correct: false },
      { text: "None of the Above", correct: false },
    ],
  },

  {
    question: "What is the full name of Nascomsoft Embedded CEO",
    answers: [
      { text: "Nasiru Abdulmumin GMNSE, MNCS, MCPN", correct: false },
      { text: "Nasiru Abdulsalam GMNSE, MNCS, MCPN", correct: true },
      { text: "Nasiru Abdulsalam GMMIE, DNCS, MCPN", correct: false },
      { text: "Nas Abdulsalam GMSIE, DNCS, MCPN", correct: false },
    ],
  },

  {
    question: "What does DOM stand for in JavaScript?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Desktop Object Management", correct: false },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "define", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "// for single-line, /* */ for multi-line", correct: true },
      { text: "# for single-line", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "** comment **", correct: false },
    ],
  },
  {
    question: "Which method converts a JSON string to an object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Boolean", correct: false },
      { text: "String", correct: false },
      { text: "Character", correct: true },
      { text: "Number", correct: false },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msg('Hello World')", correct: false },
      { text: "alertBox('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true },
      { text: "prompt('Hello World')", correct: false },
    ],
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    answers: [
      { text: "'object'", correct: true },
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'number'", correct: false },
    ],
  },
  {
    question: "Which of these is used to define an arrow function?",
    answers: [
      { text: "() => {}", correct: true },
      { text: "function => {}", correct: false },
      { text: "->", correct: false },
      { text: "<=>", correct: false },
    ],
  },
  {
    question:
      "Which array method is used to filter elements based on a condition?",
    answers: [
      { text: "map()", correct: false },
      { text: "reduce()", correct: false },
      { text: "filter()", correct: true },
      { text: "find()", correct: false },
    ],
  },
  {
    question: "What will '2' + 2 return in JavaScript?",
    answers: [
      { text: "'4'", correct: false },
      { text: "'22'", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question:
      "Which built-in method can be used to check if an array includes a certain value?",
    answers: [
      { text: "has()", correct: false },
      { text: "contains()", correct: false },
      { text: "includes()", correct: true },
      { text: "search()", correct: false },
    ],
  },
  {
    question:
      "Which statement is used to skip the current iteration of a loop in JavaScript?",
    answers: [
      { text: "break", correct: false },
      { text: "continue", correct: true },
      { text: "skip", correct: false },
      { text: "next", correct: false },
    ],
  },
];

const question = document.querySelector("#question");
const answerButtons = document.querySelector(".options-container");
const nextbutton = document.querySelector("#next-button");

let currentQuestionIndex = 0;
let score = 0;

//starting quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextbutton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("option");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
  });
}

function resetState() {
  nextbutton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectedAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbutton.style.display = "block";
}

function showScore() {
  resetState();
  question.innerHTML = `You scored ${score} out of${questions.length}`;
  nextbutton.innerHTML = "Play Again";
  nextbutton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextbutton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
