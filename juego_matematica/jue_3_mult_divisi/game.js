// Preguntas de multiplicación y división
const questions = [
    { question: '5 x 4', answer: '20' },
    { question: '10 ÷ 2', answer: '5' },
    { question: '8 x 7', answer: '56' },
    { question: '15 ÷ 3', answer: '5' },
    { question: '6 x 9', answer: '54' },
    { question: '12 ÷ 4', answer: '3' },
];

let score = 0;
let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score-value');

function displayQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const userAnswer = answerElement.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = '¡Correcto!';
        score++;
    } else {
        resultElement.textContent = 'Respuesta incorrecta.';
    }

    scoreElement.textContent = score;
    answerElement.value = '';

    // Pasar a la siguiente pregunta
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Fin del juego
        endGame();
    }
}

function endGame() {
    questionElement.textContent = 'Fin del juego';
    answerElement.style.display = 'none';
    resultElement.textContent = `Puntuación final: ${score}`;
    scoreElement.style.display = 'none';
    document.getElementById('submit').style.display = 'none';
}

// Event listeners
document.getElementById('submit').addEventListener('click', checkAnswer);

// Iniciar el juego
displayQuestion();
