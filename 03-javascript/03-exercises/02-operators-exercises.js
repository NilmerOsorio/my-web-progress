// 1. Create a variable for each arithmetic operation.

console.log("--Exercise #1--");
let Addition = 8+4;
let Subtraction = 20-12;
let Multiplication = 9*8;
let Division = 48/8;
let Module = 98%4;
let Exponential = 3**4;

console.log(Addition);
console.log(Subtraction);
console.log(Multiplication);
console.log(Division);
console.log(Module);
console.log(Exponential);

// 2. Create a variable for each type of assignment operation, using the variables from the arithmetic operations.

Addition += 89;
Subtraction -= 4;
Multiplication *= 10;
Division /= 2;
Module %= 7;
Exponential **= 8;

console.log("--Exercise #2--");
console.log(Addition);
console.log(Subtraction);
console.log(Multiplication);
console.log(Division);
console.log(Module);
console.log(Exponential);

// 3. Print 5 true comparisons using different comparison operators.

console.log("--Exercise #3--");
console.log(Addition > 100);
console.log(Subtraction == 4);
console.log(600 < Multiplication);
console.log(Division === 3);
console.log(Exponential != 3);
console.log(Exponential >= 980000);

// 4. Print 5 false comparisons using different comparison operators.

console.log("--Exercise #4--");
console.log(Addition >= 200);
console.log(Subtraction === "4");
console.log(580 == Multiplication);
console.log(Division != "3");
console.log(Exponential == 3);
console.log(Module < 0);

// 5. Use the logical `and` operator.

console.log("--Exercise #5--");
console.log(980 > 800 && 980 < 1000);
console.log(Module + Addition <= 10000 && Addition > 0);
console.log(Subtraction*Division >= Addition/Module && Addition/Module < Subtraction+Module);
console.log(Addition - Exponential >= Addition - Exponential);
console.log(Exponential%Module === Module && Subtraction < Multiplication);
console.log(Multiplication/Subtraction != Exponential && Module%Module);

// 6. Use the logical `or` operator.

console.log("--Exercise #6--");
console.log(Module > 10 || 980 == 980);
console.log(78 == "78" || 34 > 30+4-8);
console.log(345 >= 98*8 || 78/9 < 99);
console.log(98 > 89 || 87 > 2+2);
console.log(2+2 == 2*2 || 654 <= 0);
console.log(76 > 98 || 45 == 45);

// 7. Combine both logical operators.

console.log("--Exercise #7--");
console.log(76 > 98 || 45 == 45 && Module > 10 || 980 == 980);
console.log(98 > 89 || 87 > 2+2 && 2+2 == 2*2 || 654 <= 0);
console.log(78 == "78" || 34 > 30+4-8 && 76 > 98 || 45 == 45);
console.log(Module > 10 || 980 == 980 && 345 >= 98*8 || 78/9);
console.log(76 > 98 || 45 == 45 || 78 == "78" || 34 > 30+4-8);
console.log(345 >= 98*8 || 78/9 && 2+2 == 2*2 || 654 <= 0);

// 8. Include a negation.

console.log("--Exercise #8--");
console.log(!(76 > 98 || 45 == 45 && Module > 10 || 980 == 980));
console.log(!(78 == "78" || 34 > 30+4-8 && 76 > 98 || 45 == 45));
console.log(!(345 >= 98*8 || 78/9 && 2+2 == 2*2 || 654 <= 0));
console.log(!(76 > 98 || 45 == 45 || 78 == "78" || 34 > 30+4-8));
console.log(!(345 >= 98*8 || 78/9));
console.log(!(Module > 10 || 980 == 980 && 345 >= 98*8 || 78/9));

// 9. Use the ternary operator.

const coldWeather = true;

console.log("--Exercise #9--");
coldWeather ? console.log("Yeah, the weather is really cold.") : console.log("Nah, it's so sunny.");

// 10. Combine arithmetic, comparison, and logical operators.

console.log("-- Exercise #10: This exercise was already done in the last ones.");