// Preguntas de potencias y raíces
const questions = [
    { question: '2^3', answer: '8' },
    { question: '4^2', answer: '16' },
    { question: '3^4', answer: '81' },
    { question: '5^2', answer: '25' },
    { question: 'Raíz cuadrada de 16', answer: '4' },
    { question: 'Raíz cuadrada de 25', answer: '5' },
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
