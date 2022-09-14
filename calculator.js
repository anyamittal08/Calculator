// const screen = document.getElementsByClassName('screen');
// const buttonsTemp = document.querySelectorAll('button');
// const clearButton = document.getElementsByClassName('half');
// buttons = Array.from(buttonsTemp);
// console.log(buttonsTemp);
// console.log(buttons);
// console.log(typeof(buttons[1]));
// buttons.forEach(test());
// function test(btn) {
//     console.log(btn.innerText);
// }
// function clickEvent(btn) {
//     btn.addEventListener('click', foo());
// }
// function foo() {
//     console.log('this does nothing');
// }
// buttons.forEach(clickEvent());




// one implementation where screen is an input element
// let screen = document.getElementById('actualscreen');
// let formula = [];
// let buttons = document.querySelectorAll("button");
// for (let button of buttons){
// 	button.addEventListener("click", function(){
// 		if (this.innerText === "="){
// 			calculate();
// 		}else{
// 			formula.push(this.innerText);
// 			screen.value = formula.join("");
// 		}
// 	});
// }

// function calculate() {
// 	screen.value = eval(formula.join(""));
// }


// my implementation

let screen = document.getElementById('screen');
let digits = Array.from(document.querySelectorAll('.digit'));
let add = document.getElementsByClassName('add');

// add click event to buttons to display button content on screen

toEvaluate = '';
for (let digit of digits) {
    digit.addEventListener('click', function() {
        screen.innerText = digit.innerText;
    });
};