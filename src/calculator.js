class Calculator {
  #value;
  #operator;
  #isFloat;

  #expressionParagraph;
  #operatorParagraph;
  #valueParagraph;
  /**
   *
   */
  constructor(expressionParagraph, operatorParagraph, valueParagraph) {
    this.#value = "";
    this.#operator = "";

    this.#expressionParagraph = expressionParagraph;
    this.#operatorParagraph = operatorParagraph;
    this.#valueParagraph = valueParagraph;
  }

  solve(value) {
    const isAllExist =
      this.#expressionParagraph.textContent != "" &&
      this.#value != "" &&
      this.#operator != "";

    if (!isAllExist) {
      return;
    }

    if (this.#operator == "+") {
      this.#value = parseFloat(this.#value) + parseFloat(value);
    }

    if (this.#operator == "-") {
      this.#value = parseFloat(this.#value) - parseFloat(value);
    }

    if (this.#operator == "*") {
      this.#value = parseFloat(this.#value) * parseFloat(value);
    }

    if (this.#operator == "/") {
      this.#value = parseFloat(this.#value) / parseFloat(value);
    }

    let temp = this.#value;
    this.clear();
    this.#expressionParagraph.textContent = temp;
    this.#isFloat = this.hasDot(temp);
  }

  changeOperator(operator) {
    if (operator == "-" && this.#expressionParagraph.textContent == "") {
      this.addNumber("-");
      return;
    }

    if (this.#expressionParagraph.textContent == "") {
      return;
    }

    if (this.#value != "" && this.#expressionParagraph.textContent != "") {
      this.solve(this.#expressionParagraph.textContent);
    }

    this.#value = this.#expressionParagraph.textContent;
    this.#operator = operator;
    this.#expressionParagraph.textContent = "";
    this.#isFloat = false;

    this.showOperator();
    this.showValue();
  }

  clear() {
    this.#value = "";
    this.#operator = "";
    this.#expressionParagraph.textContent = "";
    this.#isFloat = false;

    this.showValue();
    this.showOperator();
  }

  addNumber(number) {
    this.#expressionParagraph.textContent += number;
  }

  addDot() {
    if (this.#isFloat) return;

    this.#expressionParagraph.textContent += ".";

    this.#isFloat = !this.#isFloat;
  }

  hasDot(value) {
    return parseFloat(value) - parseInt(value) > 0;
  }

  showValue() {
    this.#valueParagraph.textContent = this.#value;
  }

  showOperator() {
    this.#operatorParagraph.textContent = this.#operator;
  }

  print() {
    console.log(`operator: ${this.#operator}`);
    console.log(`value : ${this.#value}`);
  }
}

export default Calculator;
