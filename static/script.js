const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    firstNumber: undefined,
    operand: undefined,
    secondNumber: undefined,
    isComma: false,
    toInput: 1,
    operate (a, b, operator) {
        switch (operator) {
            case "+":
                return this.add(a, b);
            case "-":
                return this.substract(a, b);
            case "*":
                return this.multiply(a, b);
            case "/":
                return this.divide(a, b);
        }
    },
    display: (topN, bottomN, operand) => {
        if (topN !== undefined) {
            document.getElementById("top-number").innerText = topN;
        }
        if (bottomN !== undefined) {
            document.getElementById("bottom-number").innerText = bottomN;
        }
        if (operand !== undefined) {
            document.getElementById("operation").innerText = operand;
        }
    },
    input (number) {
        if (this.toInput === 1) {
            if (this.firstNumber === undefined) {
                this.firstNumber = "";
            }
            if (this.firstNumber[0] === "0") {
                if (number !== "0") {
                    this.firstNumber = number;
                }
            } else {
                this.firstNumber = this.firstNumber + number;
            }


        } else {
            if (this.secondNumber === undefined) {
                this.secondNumber = "";
            }
            if (this.secondNumber[0] === "0") {
                if (number !== "0") {
                    this.secondNumber = number;
                }
            } else {
                this.secondNumber = this.secondNumber + number;
            }
        }
        this.display(this.secondNumber, this.firstNumber, this.operand);
    },

}