// 1. Data Structure: Array of Objects
const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading System Sheets", "Cars SUVs Sailboats"],
        correct: 1
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "None of the above"],
        correct: 1
    }
];

let currentIdx = 0;
let score = 0;

const questionText = document.getElementById('questionText');
const optionsGroup = document.getElementById('optionsGroup');
const quizBox = document.getElementById('question-box');
const resultBox = document.getElementById('resultBox');

// 2. Function to Render the Current Question
function loadQuestion() {
    const currentQuiz = quizData[currentIdx];
    
    // Clear previous options
    optionsGroup.innerHTML = "";
    questionText.textContent = currentQuiz.question;

    // Create buttons dynamically
    currentQuiz.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option-btn');
        btn.onclick = () => handleAnswer(index);
        optionsGroup.appendChild(btn);
    });
}

// 3. Logic to handle answer selection
function handleAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentIdx].correct) {
        score++;
    }

    currentIdx++;

    if (currentIdx < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.style.display = "none";
    resultBox.style.display = "block";
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQs').textContent = quizData.length;
}

// Initialize
loadQuestion();