// Inicializar las vidas de ambos jugadores
let player1Lives = 6;
let player2Lives = 6;
let player1Name = '';
let player2Name = '';

// Variables para los botones y elementos del DOM
const player1LivesDisplay = document.getElementById("player1-lives");
const player2LivesDisplay = document.getElementById("player2-lives");
const player1DeathMessage = document.getElementById("player1-death");
const player2DeathMessage = document.getElementById("player2-death");
const player1Container = document.getElementById("player1-container");
const player2Container = document.getElementById("player2-container");
const startButton = document.getElementById("start-game");
const restartButton = document.getElementById("restart");
const randomImageContainer = document.getElementById("random-image-container");
const controlsContainer = document.querySelector(".controls");
const nameInputContainer = document.querySelector(".name-input-container");
const playersContainer = document.querySelector(".players-container");

// Inicializar el estado inicial del juego
function initializeGame() {
  player1Lives = 6;
  player2Lives = 6;
  player1LivesDisplay.textContent = player1Lives;
  player2LivesDisplay.textContent = player2Lives;
  player1DeathMessage.style.display = "none";
  player2DeathMessage.style.display = "none";
  player1Container.querySelector(".lives").style.display = "block";
  player2Container.querySelector(".lives").style.display = "block";
  player1Container.style.opacity = "1";
  player2Container.style.opacity = "1";
  randomImageContainer.innerHTML = '';

  // Hacer el botón de reiniciar invisible
  controlsContainer.style.display = "none";
  // Resetear la visibilidad de los botones de sumar vida
  toggleAddLifeButton('player1');
  toggleAddLifeButton('player2');
  // Volver a mostrar la pantalla de entrada de nombres
  nameInputContainer.style.display = "block";
  playersContainer.style.display = "none";
}

// Función para habilitar o deshabilitar el botón "Sumar vida" según las vidas
function toggleAddLifeButton(player) {
  const addLifeButton = document.getElementById(`${player}-increase`);
  
  // Solo mostramos el botón si las vidas son menores a 6 y no ha sido utilizado ya
  if (player === 'player1' && player1Lives < 6 && !addLifeButton.used) {
    addLifeButton.style.display = "inline-block"; // Mostrar el botón solo si las vidas son menores a 6
  } else if (player === 'player2' && player2Lives < 6 && !addLifeButton.used) {
    addLifeButton.style.display = "inline-block"; // Mostrar el botón solo si las vidas son menores a 6
  } else {
    addLifeButton.style.display = "none"; // Ocultar el botón si las vidas son 6 o más o ya fue usado
  }
}

// Función para iniciar el juego
startButton.addEventListener("click", function() {
  player1Name = document.getElementById("player1-name").value;
  player2Name = document.getElementById("player2-name").value;

  if (!player1Name || !player2Name) {
    alert("¡Por favor ingrese los nombres de ambos jugadores!");
    return;
  }

  document.getElementById("player1-label").textContent = player1Name;
  document.getElementById("player2-label").textContent = player2Name;
  nameInputContainer.style.display = "none";
  playersContainer.style.display = "flex";

  // Inicializar la visibilidad de los botones de sumar vida
  toggleAddLifeButton('player1');
  toggleAddLifeButton('player2');
});

// Función para restar vida al Jugador 1
document.getElementById("player1-decrease").addEventListener("click", function() {
  if (player1Lives > 0) {
    player1Lives--;
    player1LivesDisplay.textContent = player1Lives;
  }

  if (player1Lives === 0) {
    player1DeathMessage.style.display = "block";
    player1Container.querySelector(".lives").style.display = "none";
    player1Container.style.opacity = "0";
    player2Container.style.opacity = "0";
    randomImageContainer.innerHTML = '';
    showRestartButton(); // Mostrar el botón de reiniciar
  } else {
    // Actualizar el botón de "Sumar vida" cuando las vidas cambian
    toggleAddLifeButton('player1');
  }
});

// Función para restar vida al Jugador 2
document.getElementById("player2-decrease").addEventListener("click", function() {
  if (player2Lives > 0) {
    player2Lives--;
    player2LivesDisplay.textContent = player2Lives;
  }

  if (player2Lives === 0) {
    player2DeathMessage.style.display = "block";
    player2Container.querySelector(".lives").style.display = "none";
    player1Container.style.opacity = "0";
    player2Container.style.opacity = "0";
    randomImageContainer.innerHTML = '';
    showRestartButton(); // Mostrar el botón de reiniciar
  } else {
    // Actualizar el botón de "Sumar vida" cuando las vidas cambian
    toggleAddLifeButton('player2');
  }
});

// Función para sumar vida al Jugador 1
document.getElementById("player1-increase").addEventListener("click", function() {
  if (player1Lives < 6 && !this.used) {
    player1Lives++;
    player1LivesDisplay.textContent = player1Lives;
    this.used = true; // Marcar el botón como usado
    this.style.display = "none"; // Ocultar el botón después de usarlo
  }
});

// Función para sumar vida al Jugador 2
document.getElementById("player2-increase").addEventListener("click", function() {
  if (player2Lives < 6 && !this.used) {
    player2Lives++;
    player2LivesDisplay.textContent = player2Lives;
    this.used = true; // Marcar el botón como usado
    this.style.display = "none"; // Ocultar el botón después de usarlo
  }
});

// Función para mostrar el botón de reiniciar
function showRestartButton() {
  controlsContainer.style.display = "block"; // Hacer visible el contenedor de controles
  restartButton.style.display = "inline-block"; // Mostrar el botón de reiniciar
}

// Función para reiniciar el juego
restartButton.addEventListener("click", function() {
  initializeGame(); // Restablecer todos los elementos a su estado inicial
});
