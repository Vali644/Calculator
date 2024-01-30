const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    firstNumber: undefined,
    operand: undefined,
    secondNumber: undefined,
    operate: (a, b, operator) => {
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
    }
}