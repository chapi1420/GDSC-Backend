function calculateGCF(a, b) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

let num1 = prompt("first number:");
let num2 = prompt("second number:");

num1 = Number(num1);
num2 = Number(num2);
let gcf = calculateGCF(num1, num2);
console.log(`The GCF of ${num1} and ${num2} is: ${gcf}`);
