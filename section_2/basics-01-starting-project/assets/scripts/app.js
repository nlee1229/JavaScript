const defaultResult = 0;
let currentResult = defaultResult;

function add() {  // defining a function (can have as many params)
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add); // function built into the browser that's tied into the button. When the button is clicked, it tells to have a look at the addNums function & execute it for me


