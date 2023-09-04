let massMark = 78;
let heightMark = 1.69;
let massJohn = 91;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);