// Sélection des éléments
const inputField = document.getElementById("input");
const calculationLabel = document.getElementById("calcul");
const clearButton = document.getElementById("clear");
const plusMinusButton = document.getElementById("plusoumoins");
const percentageButton = document.getElementById("percentage");
const divideButton = document.getElementById("divideby");
const multiplyButton = document.getElementById("times");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const equalsButton = document.getElementById("equals");
const digitButtons = document.getElementsByClassName("digit");
const dotButton = document.getElementsByClassName("dot");
const resetButton = document.getElementById("reset");

// Ajout d'un écouteur d'événement pour chaque bouton de chiffre
for (let i = 0; i < digitButtons.length; i++) {
  digitButtons[i].addEventListener("click", function() {
    addToInput(this.innerText);
  });
}
// Ajout d'un écouteur d'événement pour le bouton dot
dotButton[0].addEventListener("click", function() {
  addDotToInput();
});
// Ajout d'un écouteur d'événement pour le bouton clear
clearButton.addEventListener("click", function() {
  clearInput();
});
// Ajout d'un écouteur d'événement pour le bouton plus/minus
plusMinusButton.addEventListener("click", function() {
  changeSign();
});
// Ajout d'un écouteur d'événement pour le bouton pourcentage
percentageButton.addEventListener("click", function() {
  calculatePercentage();
});
// Ajout d'un écouteur d'événement pour le bouton divide
divideButton.addEventListener("click", function(a) {
  addOperatorToInput("÷");
  a.preventDefault();
});
// Ajout d'un écouteur d'événement pour le bouton multiply
multiplyButton.addEventListener("click", function(a) {
  addOperatorToInput("×");
  a.preventDefault();
});
// Ajout d'un écouteur d'événement pour le bouton minus
minusButton.addEventListener("click", function(a) {
  addOperatorToInput("-");
  a.preventDefault();
});
// Ajout d'un écouteur d'événement pour le bouton plus
plusButton.addEventListener("click", function(a) {
  addOperatorToInput("+");
  a.preventDefault();
});
// Ajout d'un écouteur d'événement pour le bouton equal
equalsButton.addEventListener("click", function(a) {
  performCalculation();
  a.preventDefault();
});
// Ajout d'un écouteur d'événement pour le bouton reset
resetButton.addEventListener("click", function() {
  resetCalculator();
});
// Fonction pour ajouter un chiffre à l'entrée
function addToInput(digit) {
  inputField.value += digit;
}
// Fonction pour ajouter un point à l'entrée
function addDotToInput() {
  if (inputField.value === "" || inputField.value.includes(".")) {
    return;
  }
  inputField.value += ".";
}
// Fonction pour effacer l'entrée
function clearInput() {
  inputField.value = "";
}
// Fonction pour changer le signe de l'entrée
function changeSign() {
  if (inputField.value === "") {
    return;
  }
  inputField.value = -parseFloat(inputField.value);
}
// Fonction pour calculer le pourcentage
function calculatePercentage() {
  if (inputField.value === "") {
    return;
  }
  inputField.value = parseFloat(inputField.value) / 100;
}
// Fonction pour ajouter un opérateur à l'entrée
function addOperatorToInput(operator) {
  if (inputField.value === "") {
    return;
  }
  inputField.value += ` ${operator} `;
}
// Fonction pour effectuer le calcu
function performCalculation() {
  if (inputField.value === "") {
    return;
  }
  calculationLabel.innerText = inputField.value + " =";
  inputField.value = eval(inputField.value);
}
// Fonction pour réinitialiser la calculatrice
function resetCalculator() {
  inputField.value = "";
  calculationLabel.innerText = "";
}