const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    firstNumber: '0',
    operand: '',
    secondNumber: '',
    whatInput: 1,
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
            let placeholder = this.whatInput === 1 ? this.firstNumber : this.secondNumber;
            if (remove) {
                if (placeholder.length === 1 || placeholder.length === 0) {
                    placeholder = '0';
                } else {
                    if (this.isCommaPressent && placeholder[placeholder.length - 1] === ".") {
                        this.isCommaPressent = false;
                    }
                    placeholder = placeholder.slice(0, -1);
                }
            } else {
                if (placeholder === "") {
                    placeholder = '0';
                } 
                if (placeholder[0] === "0") {
                    if (number !== "0") {
                        if (number === "." && this.isCommaPressent === false) {
                            placeholder = placeholder + number;
                            this.isCommaPressent = true;
                        } else if (this.isCommaPressent && number !== ".") {
                            placeholder = placeholder + number;
                        } else if (!this.isCommaPressent && number !== ".") {
                            placeholder = number;
                        }
                    }
                } else {
                    if (number === "." && this.isCommaPressent == false) {
                        placeholder = placeholder + number;
                        this.isCommaPressent = true;
                    } else if (number !== ".") {
                        placeholder = placeholder + number;
                    }
                    
                }
            }
            if (this.whatInput === 1) {
                this.firstNumber = placeholder;
                this.display(this.secondNumber, this.firstNumber, this.operand);
            } else {
                this.secondNumber = placeholder;
                this.display(this.firstNumber, this.secondNumber, this.operand);
            }
        }

    },
    operatorInput (operator) {
        if (this.operand === "") {
            this.operand = operator;
            if (this.firstNumber[this.firstNumber.length - 1] === ".") {
                this.firstNumber = this.firstNumber.slice(0, -1);
            } 
            if (this.isCommaPressent) {
                this.isCommaPressent = false;
            }
            this.whatInput = 2;
            this.display(this.firstNumber, '0', this.operand);
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