const cardsArray = [
    { id: 1, icon: '🍎' },
    { id: 2, icon: '🍊' },
    { id: 3, icon: '🍋' },
    { id: 4, icon: '🍉' },
    { id: 5, icon: '🍇' },
    { id: 6, icon: '🥑' },
    { id: 7, icon: '🍓' },
    { id: 8, icon: '🍍' },
];

let shuffledCards = [];
let flippedCards = [];
let matchedCards = [];

const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');

// Función para mezclar las cartas usando el algoritmo Fisher-Yates (mezcla aleatoria)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Función para inicializar el juego
function initGame() {
    shuffledCards = shuffle([...cardsArray, ...cardsArray]); // Duplica y mezcla las cartas
    matchedCards = [];
    flippedCards = [];

    renderGameBoard();
}

// Función para renderizar el tablero de juego
function renderGameBoard() {
    gameBoard.innerHTML = '';

    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.innerHTML = '<span class="card-face front"></span><span class="card-face back">' + card.icon + '</span>';
        gameBoard.appendChild(cardElement);

        cardElement.addEventListener('click', handleCardClick);
    });
}

// Función para manejar el click en una carta
function handleCardClick() {
    const card = this;

    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000); // Espera 1 segundo antes de verificar la coincidencia
        }
    }
}

// Función para verificar si las dos cartas volteadas son iguales
function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.id === secondCard.dataset.id) {
        firstCard.removeEventListener('click', handleCardClick);
        secondCard.removeEventListener('click', handleCardClick);
        matchedCards.push(firstCard, secondCard);
    } else {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
    }

    flippedCards = [];

    if (matchedCards.length === shuffledCards.length) {
        setTimeout(() => {
            alert('¡Felicidades! Has encontrado todas las parejas.');
        }, 500);
    }
}

// Event listener para el botón de reiniciar juego
restartBtn.addEventListener('click', () => {
    initGame();
});

// Inicializar el juego por primera vez
initGame();
