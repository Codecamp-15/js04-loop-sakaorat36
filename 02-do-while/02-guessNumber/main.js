// PROGRAM

// PROGRAM-1 : Input User-1

// let ansNumber = prompt('Enter your magic number'); // => null, string : "", "   ", "qweqeq", "12"

// // let isNull = ansNumber === null;
// // let isEmpty = ansNumber.trim() === '';
// // let isNaN = isNaN(ansNumber);

// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber)
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//     alert('Invalid Input');
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if (isRange) {
//     alert('Try to guess number'); // Program : player 2
// }

// V2 : รับ input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรมได้

let ansNumber = '';
let isEmpty;
let isNaN;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number') || '';  // "12" || ""  หรือ null || ""
    isEmpty = ansNumber.trim() === ''
    isNaN = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if (isEmpty || isNaN) {
        alert('Invalid Input. Try 1-99');
    }   else if (outOfRange) {
        alert('Invalid Range, Try 1-99')
    }   
    
} while (isEmpty || isNaN);

// Program 2 : Guess ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Invalid Range
// - Hint Too High, Too Low
// - Alert Correct
let guessNumber;

do {
    guessNumber = prompt('Enter your answer') || '';
    isEmpty = guessNumber.trim() === ''
    isNaN = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if (isEmpty || isNaN) {
        alert('Invalid Input. Try 1-99');
    }   else if (outOfRange) {
        alert('Invalid Range, Try 1-99')
    }   else if (+guessNumber > +ansNumber) {
        alert ('Too High');
    }   else if (+guessNumber < +ansNumber){
        alert ('Too Low');
    }   else if (+guessNumber === +ansNumber) {
        alert ('Correct');
    }

}   while(+guessNumber != +ansNumber);
