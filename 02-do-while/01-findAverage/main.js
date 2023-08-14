let input;
let count = 0;
let sum = 0;
let average;

do {

    input = +prompt ('Enter Number')
    sum = sum + input
    count = count + 1 // count++

} while (input != 0 || input > 0 || input != '');

average = sum / count

console.log(sum)
console.log(average)


