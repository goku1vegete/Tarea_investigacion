const sequenceContainer = document.getElementById('sequence-container');
const startBtn = document.getElementById('start-btn');
const levelDisplay = document.getElementById('level');
let sequence = [];
let playerSequence = [];
let level = 1;

// Función para generar una secuencia aleatoria de números
function generateSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(Math.floor(Math.random() * 10)); // Números aleatorios del 0 al 9
    }
    return sequence;
}

// Función para mostrar la secuencia en pantalla
function displaySequence() {
    sequenceContainer.textContent = '';
    sequence.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.textContent = number;
        numberElement.classList.add('number');
        sequenceContainer.appendChild(numberElement);
        setTimeout(() => {
            numberElement.classList.add('active');
        }, 500);
        setTimeout(() => {
            numberElement.classList.remove('active');
        }, 1000);
    });
}

// Función para manejar el inicio del juego
function startGame() {
    sequence = generateSequence(level);
    displaySequence();
    startBtn.style.display = 'none';
}

// Función para manejar el click en los números mostrados
function handleNumberClick(event) {
    const clickedNumber = event.target.textContent;
    playerSequence.push(parseInt(clickedNumber));

    if (playerSequence.length === sequence.length) {
        if (playerSequence.every((num, index) => num === sequence[index])) {
            level++;
            levelDisplay.textContent = level;
            playerSequence = [];
            setTimeout(() => {
                startGame();
            }, 1000);
        } else {
            alert(`¡Oh no! La secuencia fue incorrecta. Tu puntuación final es: ${level}`);
            resetGame();
        }
    }
}

// Función para reiniciar el juego
function resetGame() {
    level = 1;
    levelDisplay.textContent = level;
    sequence = [];
    playerSequence = [];
    startBtn.style.display = 'block';
    sequenceContainer.textContent = '';
}

// Event listeners
startBtn.addEventListener('click', startGame);
sequenceContainer.addEventListener('click', handleNumberClick);
