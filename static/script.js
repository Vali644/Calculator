const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    firstNumber: '0',
    operand: '+',
    secondNumber: '0',
    toInput: 1,
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
    input (number, remove) {
        let placeholder;
        if (this.toInput === 1) {
            placeholder = this.firstNumber;
        } else {
            placeholder = this.secondNumber;
        }
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
                    console.log(number + " " + placeholder[0])
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
        if (this.toInput === 1) {
            this.firstNumber = placeholder;
        } else {
            this.secondNumber = placeholder;
        }
        this.display(this.secondNumber, this.firstNumber, this.operand);
    },

}

// REMINDER: Implement the ability to correctly use the comma(dot), and to correctly remove it