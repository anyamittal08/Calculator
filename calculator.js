const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let displayVal = '0';
let runningTotal = null;
let currentOperator = null;
let evaluated = false;

const handleClick = (val) => {
    if (isNaN(parseInt(val))) {
        handleSymbol(val);
    }
    else {
        handleNumber(val);
    }
    updateDisplay();
}

const handleNumber = (number) => {
    if (!evaluated) {
        if (displayVal === '0') displayVal = number;
        else displayVal += number;
    }
}

const handleSymbol = (val) => {
    switch (val) {
        case 'C':
            displayVal = '0';
            runningTotal = 0;
            currentOperator = null;
            evaluated = false;
            break;
        case '←':
            if (!evaluated) {
                if (displayVal.length === 1) displayVal = '0';
                else displayVal = displayVal.slice(0, displayVal.length - 1);
            }
            break;
        case '=':
            if (currentOperator === null) return;
            operate(parseInt(displayVal));
            displayVal = '' + runningTotal;
            currentOperator = null;
            evaluated = true;
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            evaluate(val);
            evaluated = false;
            break;
    }
}

const updateDisplay = () => {
    screen.innerText = displayVal;
}

const operate = (val) => {
        if (currentOperator === '+') runningTotal += val;
        else if (currentOperator === '-') runningTotal -= val;
        else if (currentOperator === 'x') runningTotal *= val;
        else if (currentOperator === '÷') runningTotal /= val;
}

const evaluate = (val) => {
    if (runningTotal) {
        operate(parseInt(displayVal));
    } else {
        runningTotal = parseInt(displayVal);
    }
    currentOperator = val;
    displayVal = '0';
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        handleClick(e.target.innerText);
    })
});