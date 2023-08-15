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

// Ajout d'un écouteur d'événement pour chaque bouton de chiffre
for (let i = 0; i < digitButtons.length; i++) {
  digitButtons[i].addEventListener("click", function() {
    addToInput(this.innerText);
  });
}

// Ajout d'un écouteur d'événement pour le bouton dot
dotButton[0].addEventListener("click", function(a) {
  addDotToInput();
  a.preventDefault();
});

// Ajout d'un écouteur d'événement pour le bouton clear
clearButton.addEventListener("click", function() {
  clearInput();
});

// Ajout d'un écouteur d'événement pour le bouton plus/minus
plusMinusButton.addEventListener("click", function(a) {
  changeSign();
  a.preventDefault();
});

// Ajout d'un écouteur d'événement pour le bouton pourcentage
percentageButton.addEventListener("click", function(a) {
  calculatePercentage();
  a.preventDefault();
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
resetButton.addEventListener("click", function(a) {
  resetCalculator();
  a.preventDefault();
});

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
  
  const expression = inputField.value;
  
  if (isValidExpression(expression)) {
    calculationLabel.innerText = expression + " =";
    
    try {
      const result = evaluateExpression(expression);
      inputField.value = result;
    } catch (error) {
      console.log("Erreur lors de l'évaluation de l'expression :", error);
    }
  } else {
    console.log("Expression invalide !");
  }
}

function isValidExpression(expression) {
  const regex = /^[\d+\-×÷.()\s]+$/;
  return regex.test(expression);
}

function evaluateExpression(expression) {
  const sanitizedExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
  return eval(sanitizedExpression);
}
// Fonction pour réinitialiser la calculatrice
function resetCalculator() {
  inputField.value = "";
  calculationLabel.innerText = "";
}
