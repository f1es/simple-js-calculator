import Calculator from "./calculator.js";

const expression = document.getElementById("expression");
const operator = document.getElementById("operator");
const value = document.getElementById("value");
const calc = new Calculator(expression, operator, value);

const button1 = document.getElementById("1");
button1.addEventListener("click", () => {
  calc.addNumber("1");
});

const button2 = document.getElementById("2");
button2.addEventListener("click", () => {
  calc.addNumber("2");
});

const button3 = document.getElementById("3");
button3.addEventListener("click", () => {
  calc.addNumber("3");
});

const button4 = document.getElementById("4");
button4.addEventListener("click", () => {
  calc.addNumber("4");
});

const button5 = document.getElementById("5");
button5.addEventListener("click", () => {
  calc.addNumber("5");
});

const button6 = document.getElementById("6");
button6.addEventListener("click", () => {
  calc.addNumber("6");
});

const button7 = document.getElementById("7");
button7.addEventListener("click", () => {
  calc.addNumber("7");
});

const button8 = document.getElementById("8");
button8.addEventListener("click", () => {
  calc.addNumber("8");
});

const button9 = document.getElementById("9");
button9.addEventListener("click", () => {
  calc.addNumber("9");
});

const button0 = document.getElementById("0");
button0.addEventListener("click", () => {
  calc.addNumber("0");
});

const buttonDot = document.getElementById(".");
buttonDot.addEventListener("click", () => {
  calc.addDot();
});

const buttonClear = document.getElementById("C");
buttonClear.addEventListener("click", () => {
  calc.clear();
});

const buttonMinus = document.getElementById("-");
buttonMinus.addEventListener("click", () => {
  calc.changeOperator("-");
});

const buttonSum = document.getElementById("+");
buttonSum.addEventListener("click", () => {
  calc.changeOperator("+");
});

const buttonMult = document.getElementById("*");
buttonMult.addEventListener("click", () => {
  calc.changeOperator("*");
});

const buttonDiv = document.getElementById("/");
buttonDiv.addEventListener("click", () => {
  calc.changeOperator("/");
});

const buttonSolve = document.getElementById("solve");
buttonSolve.addEventListener("click", () => {
  let value = document.getElementById("expression").textContent;
  calc.solve(value);
});
