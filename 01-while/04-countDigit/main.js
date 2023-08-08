console.log('Problem 4')

let n = + prompt('Enter number')
// console.log(n);

// Pattern Recognition
// 1150 / 10 => 115 => count = 1;
// 115 / 10 => 11.5 => count = 2;
// 11.5 / 10 => 1.15 => count = 3;
// 1.15 / 10 => 0.115 => count = 4;
let count = 0

if (n < 0) n = -n;

while (n >= 1) {
    console.log(n);
    count++;
    n = n / 10;
}

console.log(count);