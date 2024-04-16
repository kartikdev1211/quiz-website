const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

const questions = [
  {
    question: "Who is the director of mait?",
    options: ["Prof.(Dr) Neelam Sharma", "Dr. M L Sharma", "Dr. Vinay Kumar Saini", "Ayushman Garg"],
    answer: "Prof.(Dr) Neelam Sharma"
  },
  {
    question: "Mait is affiliated with which university?",
    options: ["IIT's", "GGSIPU", "NIT's", "AMITY"],
    answer: "GGSIPU"
  },
  {
    question: "Which of the following is a department of MAIT?",
    options: ["IoT", "Neuro", "IT", "Music"],
    answer: "IT" 
  },
  {
    question: "how many blocks are there in MAIT?",
    options: ["1", "2", "3", "8"],
    answer: "8"
  },
  {
    question: "What is the number of IT Block?",
    options: ["8", "2", "3", "7"],
    answer: "8"
  },
  { 
    question: "Who is the HOD of IT Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Pooja Gupta"
  },
  { 
    question: "Who is the HOD of AIDS Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Vinay Kumar Saini"
  },
  { 
    question: "Who is the HOD of CSE Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Gupta", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Namita Gupta"
  },
  { 
    question: "Who is the Placement Officer of MAIT?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Amit Gautam"],
    answer: "Amit Gautam"
  },
  { 
    question: "How many libraries are there in MAIT?",
    options: ["1", "2", "4", "3"],
    answer: "1"
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;

  optionsEl.innerHTML = '';
  question.options.forEach(option => {
    const optionBtn = document.createElement('button');
    optionBtn.textContent = option;
    optionBtn.classList.add('option');
    optionBtn.addEventListener('click', () => checkAnswer(option));
    optionsEl.appendChild(optionBtn);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    resultEl.textContent = "Correct!";
  } else {
    resultEl.textContent = "Incorrect!";
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quizContainer.style.display = 'none';
    resultEl.textContent = `Quiz completed! Your final score is ${score}/${questions.length}`;
  }
}

loadQuestion(); // Load the first question

submitBtn.addEventListener('click', () => {
  // You can add functionality for a "Submit" button here if needed
});