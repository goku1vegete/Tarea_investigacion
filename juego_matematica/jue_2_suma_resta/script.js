// Función para generar un número aleatorio entre min y max (ambos incluidos)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un problema de suma o resta aleatorio y mostrarlo en la página
function generateProblem() {
    var num1 = getRandomNumber(1, 10); // Primer número entre 1 y 10
    var num2 = getRandomNumber(1, 10); // Segundo número entre 1 y 10
    var operator = Math.random() < 0.5 ? '+' : '-'; // Operador aleatorio: + o -

    // Guardar el problema y la respuesta correcta en variables globales
    problem = num1 + ' ' + operator + ' ' + num2 + ' =';
    correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

    // Mostrar el problema en el HTML
    document.getElementById('problem').textContent = problem;
}

// Función para comprobar la respuesta del usuario
function checkAnswer() {
    var userAnswer = parseInt(document.getElementById('answer').value); // Respuesta del usuario como número entero

    // Comparar la respuesta del usuario con la respuesta correcta
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = '¡Respuesta correcta!';
    } else {
        document.getElementById('result').textContent = 'Respuesta incorrecta. La respuesta correcta era: ' + correctAnswer;
    }

    // Limpiar el campo de respuesta
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus(); // Devolver el foco al campo de respuesta

    // Generar un nuevo problema después de mostrar el resultado
    setTimeout(function() {
        generateProblem();
        document.getElementById('result').textContent = '';
    }, 2000); // Esperar 2 segundos antes de generar el próximo problema
}

// Variables globales para guardar el problema y la respuesta correcta
var problem;
var correctAnswer;

// Generar el primer problema al cargar la página
generateProblem();
