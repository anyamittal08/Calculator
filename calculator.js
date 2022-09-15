const screen = document.getElementById('screen');
const digits = Array.from(document.querySelectorAll('.digit'));
const operatorsBtns = Array.from(document.querySelectorAll('.operator'));
const evaluateBtn = document.querySelector('.evaluate');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

let displayVal = null;
let secondOperand = null;
let lastEvaluated = null;
let evaluated = false;
let currentOperator = null;

const evaluate = (operator, a, b) => {
    if (operator && a && b) {
        let result;
        let numA = parseInt(a);
        let numB = parseInt(b);
        if (operator === '+') result = numA+numB;
        else if (operator === '-') result = numA-numB;
        else if (operator === 'x') result = numA*numB;
        else if (operator === '÷') result = numA/numB;
    
        screen.innerText = result;
        displayVal = result;
        currentOperator = null;
    }
};

const clear = () => {
    screen.innerText = '0';
    displayVal = null;
    secondOperand = null;
    lastEvaluated = null;
    currentOperator = null;
    evaluated = false;
};

const del = () => {
    if (evaluated) return;
    if (screen.innerText.length === 1) {
        screen.innerText = '0';
        displayVal = null;
    } else {
        let newVal = screen.innerText.slice(0, screen.innerText.length - 1);
        screen.innerText = newVal;
        displayVal = parseInt(screen.innerText);
    }
}
for (let digit of digits) {
    digit.addEventListener('click', function() {
        if (evaluated) return;
        if (screen.innerText === '0') screen.innerText = digit.innerText;
        else screen.innerText += digit.innerText;
        displayVal = parseInt(screen.innerText);
    });
};

operatorsBtns.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperator = operator.innerText;
        if (!lastEvaluated === null) {
            lastEvaluated = evaluate(currentOperator, secondOperand, displayVal);
            displayVal = lastEvaluated;
            secondOperand = null;
            currentOperator = null;

        } else {
            lastEvaluated 
        }
        secondOperand = displayVal;
        screen.innerText = '0';
        displayVal = null;
        evaluated = false;
    });  
});

evaluateBtn.addEventListener('click', () => {
    evaluate(currentOperator, secondOperand, displayVal);
    currentOperator = '=';
});

clearBtn.addEventListener('click', clear);

deleteBtn.addEventListener('click', del);