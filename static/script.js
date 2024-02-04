const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    firstNumber: '0',
    operand: '',
    secondNumber: '',
    canInput: true,
    isCommaPressent: false,
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
    numberInput (number, remove) {
        if (this.canInput) {
            if (remove) {
                if (this.firstNumber.length === 1 || this.firstNumber.length === 0) {
                    this.firstNumber = '0';
                } else {
                    if (this.isCommaPressent && this.firstNumber[this.firstNumber.length - 1] === ".") {
                        this.isCommaPressent = false;
                    }
                    this.firstNumber = this.firstNumber.slice(0, -1);
                }
            } else {
                if (this.firstNumber[0] === "0") {
                    if (number !== "0") {
                        if (number === "." && this.isCommaPressent === false) {
                            this.firstNumber = this.firstNumber + number;
                            this.isCommaPressent = true;
                        } else if (this.isCommaPressent && number !== ".") {
                            this.firstNumber = this.firstNumber + number;
                        } else if (!this.isCommaPressent && number !== ".") {
                            this.firstNumber = number;
                        }
                    }
                } else {
                    if (number === "." && this.isCommaPressent == false) {
                        this.firstNumber = this.firstNumber + number;
                        this.isCommaPressent = true;
                    } else if (number !== ".") {
                        this.firstNumber = this.firstNumber + number;
                    }
                    
                }
            }
            this.display(this.secondNumber, this.firstNumber, this.operand);
        }

    },
    operatorInput (operator) {
        if (this.operand === "") {
            this.operand = operator;
            if (this.firstNumber[this.firstNumber.length - 1] === ".") {
                this.secondNumber = this.firstNumber.slice(0, -1);
            } else {
                this.secondNumber = this.firstNumber;
            }
            this.firstNumber = '0';
            if (this.isCommaPressent) {
                this.isCommaPressent = false;
            }
            this.display(this.secondNumber, this.firstNumber, this.operand);
        }
    },
    result () {
        if (this.secondNumber !== "") {
            this.isCommaPressent = false;
            this.canInput = false;
            let result = operate(this.firstNumber, this.secondNumber)
        }
    }

}

// REMINDER: Implement the ability to correctly use the comma(dot), and to correctly remove it