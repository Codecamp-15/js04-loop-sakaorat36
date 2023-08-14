let n = + prompt('Enter number')

let count = 0
if (n < 0) n = -n;

// Pattern Recognition
// 1152 => (115 * 10) + 2
// (1152 - 2) / 10 => 115
// (115 - 5) / 10 => 11
// (11 - 1) / 10 => 1
// (1 - 1) / 10 => 0

let sum = 0;
while(n) {
    let remainder = n % 10;
    n = (n - remainder) / 10
    sum += remainder;
    count++;
}
console.log (count);