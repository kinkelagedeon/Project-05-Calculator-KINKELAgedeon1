//sélection des élément
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

let isZeroRepeated = false; // Variable pour indiquer si le zéro est déjà répété

// Ajout d'un écouteur d'événement pour chaque bouton de chiffre
for (let i = 0; i < digitButtons.length; i++) {
  digitButtons[i].addEventListener("click", function () {
    addToInput(this.innerText);
  });
}

dotButton[0].addEventListener("click", function (event) {
  addDotToInput();
  event.preventDefault();
});

// Ajout d'un écouteur d'événement pour le bouton clear
clearButton.addEventListener("click", function () {
  clearInput();
});

plusMinusButton.addEventListener("click", function (event) {
  changeSign();
  event.preventDefault();
});

percentageButton.addEventListener("click", function (event) {
  calculatePercentage();
  event.preventDefault();
});

divideButton.addEventListener("click", function (event) {
  addOperatorToInput("÷");
  event.preventDefault();
});

multiplyButton.addEventListener("click", function (event) {
  addOperatorToInput("×");
  event.preventDefault();
});

minusButton.addEventListener("click", function (event) {
  addOperatorToInput("-");
  event.preventDefault();
});

plusButton.addEventListener("click", function (event) {
  addOperatorToInput("+");
  event.preventDefault();
});

// Ajout d'un écouteur d'événement pour le bouton equals
equalsButton.addEventListener("click", function () {
  performCalculation();
  event.preventDefault();
});

// Ajout d'un écouteur d'événement pour le bouton reset
resetButton.addEventListener("click", function () {
  resetCalculator();
  event.preventDefault();
});

// Fonction pour ajouter un chiffre à l'entrée
function addToInput(digit) {
  if (digit === "0" && inputField.value === "0") {
    // Empêcher la répétition du zéro
    isZeroRepeated = true;
    return;
  }

  if (isZeroRepeated) {
    inputField.value = inputField.value.slice(0, -1);
    isZeroRepeated = false;
  }

  inputField.value += digit;
}

// Fonction pour ajouter un point à l'entrée
function addDotToInput() {
  if (inputField.value === "" || inputField.value.includes(".")) {
    return;
  }
  
  inputField.value += ".";
  isZeroRepeated = false;
}

// Fonction pour effacer l'entrée
function clearInput() {
  inputField.value = "";
  isZeroRepeated = false;
}

// Fonction pour changer le signe de l'entrée
function changeSign() {
  if (inputField.value === "") {
    return;
  }
  
  inputField.value = -parseFloat(inputField.value);
  isZeroRepeated = false;
}

// Fonction pour calculer le pourcentage
function calculatePercentage() {
  if (inputField.value === "") {
    return;
  }
  
  inputField.value = parseFloat(inputField.value) / 100;
  isZeroRepeated = false;
}

// Fonction pour ajouter un opérateur à l'entrée
function addOperatorToInput(operator) {
  if (inputField.value === "") {
    return;
  }
  
  inputField.value += ` ${operator} `;
  isZeroRepeated = false;
}

// Fonction pour effectuer le calcul
function performCalculation() {
  if (inputField.value === "") {
    return;
  }

  const result = evaluateExpression(inputField.value);
  calculationLabel.innerText = inputField.value + " = " + result;
  inputField.value = result;
  isZeroRepeated = false;
}

function evaluateExpression(expression) {
  const sanitizedExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
  return eval(sanitizedExpression);
}

function resetCalculator() {
  inputField.value = "";
  calculationLabel.innerText = "";
  isZeroRepeated = false;
}