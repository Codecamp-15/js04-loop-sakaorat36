console.log('learn while loop');


// ประเภทของ Loop
// - condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// - Counting Loop ตัดสินใจว่าจะรันต่อไหม จาก ตัวเลข
// - List Loop ตัดสินใจว่าจะรันต่อไหม จาก จำนวนของในรายการ
console.log("starting...")

// let i = 1;

// while (i <= 20) {
// loop block
// if (i % 3 == 0) {
//     console.log(i);
//    } else if (i % 5 == 0) {
//     console.log(`${i} : High Five`);
//    }

    // if (i % 5 == 0) {
    //     console.log(`${i} : HighFive`)
    // } else if (i % 3 == 0) {
    //     console.log(i);
    // }

//   // if (i % 3 != 0){
//   // console.log(i);
//   // }

//   i++;

// }

// FizzBuzz Problem
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FizzBuzz
// other : PRINT number

let i = 1;

while (i <= 20) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }

    // เขียนแบบ tertary
    //
    i++;
}

console.log("end...")


// Aj.P test in JS run
// let i = 0

//while (++1 <= 10) {
    // 1 < 10 => i = 2;
    // 2 < 10 => i = 3;
    // 9 < 10 => i = 10;
    // console.log(i)
    // i++;
//}
