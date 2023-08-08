// 1 : หาผลรวมตัวเลขตั้งแต่ 1 ถึง 100

// let sum = 0
// for (let i = 1; i <=100; i++) {   
//     sum = sum + i;  
//   //sum = 0 + 1 => 1
//   //sum = 1 + 2 => 3
//   //sum = 3 + 3 => 6
//     console.log(sum);
// }




// 2 : หาผลรวมเลขคู่, ผลรวมเลขคี่
let sumEven = 0;
let sumOdd = 0;
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) sumEven += i;
    else sumOdd += i;
}

console.log(sumEven, sum - sumEven, sumOdd);


// 3 : หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...)
// ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log(`${i}^2`);
        sumEvenSquare = sumEvenSquare + i ** 2;
    }
    if (i % 3 == 0) {
        // console.log(`${i}^2`);
        sumThirdSquare = sumThirdSquare + i ** 2;
    }
}

console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumThirdSQ : ${sumThirdSquare}`);
console.log(`Result is : ${sumEvenSquare - sumThirdSquare}`);