let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2); // ao invés de resultar em 0.8, vai resultar em 0.79999999....
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

//num1 = (num1.toFixed(2)); // se eu fizer isso o número será 0.8, porém não será considerado inteiro 
num1 = parseFloat(num1.toFixed(2)); // assim vai funcionar corretamente 
console.log(num1);
console.log(Number.isInteger(num1));

