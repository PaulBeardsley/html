// Part 1 Creating and Managing Arrays

// Instruction 5 - declare an array
let quote = ["I", "am", "your", "friend"];

// Instruction 6
console.log(quote);

// Instruction 8 - access array element
console.log(quote[2]);

// Instruction 10 - pop
quote.pop();

// Instruction 11 - push
quote.push("father");

// Instruction 12
console.log(quote);

// Instruction 14 - unshift
quote.unshift("Luke");

// Instruction 15
console.log(quote);

// Instruction 15
console.log(quote.toString());

// Instruction 17
let erroneousWord = "Luke";

// Instruction 18
let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});

// Instruction 19
let lukeIsAt;

// Instruction 20
if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    // Instruction 21
    quote[lukeIsAt] = "No";
}


//Extension
// Instruction 22
console.log(quote);

// Instruction 23
let output = '';

// Instruction 24, 25, 26, 27, 28, 29
for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}

// Instruction 30
console.log(output);