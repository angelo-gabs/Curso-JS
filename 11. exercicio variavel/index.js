let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const constaA = varA
varA = varB;
varB = varC; 
varC = constaA;
console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA] //posso fazer assim também 

 