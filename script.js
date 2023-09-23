const questions = [
    {
        question: "1.What is the capital of France?",
        options: ["Madrid", "Rome", "Paris"],
        correctAnswer: 2
    },
    {
        question: "2.Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter"],
        correctAnswer: 1
    },
    {
        question: "3.What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    resultElement.textContent = "";
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        // Display final score
        questionElement.textContent = `Your Score: ${score} out of ${questions.length}`;
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
    }
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);
