let a = [1, 2, 3];
let b = [...a]; //caso eu queira fazer uma cópia 
let c = b;

console.log(a, b, c);

a.push(4);
console.log(a, b, c);

