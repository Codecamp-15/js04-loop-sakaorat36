console.log ('Learn counting Loop')
console.log ('Starting.....')
// () = parenthesis ช วงเล็บ
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// 
// for (let i = 0; i < 3; i++) {
//     console.log('Hello');
//     console.log('>>> Codecamp');
// }

// console.log ('end..........')

// EX1 : Examine Syntex
// for (let i = 2; i <= 20; i + 2) {
//     // if ('i % 2 == 0') console.log(i);
//     console.log(i);
// }

// EX2 : FizzBuzz
// หรือ for (let i = 0; i++ < 20; ) เขียน
// for (let i = 1; i <= 20; i = i + 1) {
//     if (i % 3 == 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
//     } else if (i % 5 == 0) {
//     console.log('Buzz');
//     } else (i % 3 == 0) continue; 
//     else console.log(i);
// }


// EX3B : 
// for (let i = 1; 1<= 20; i++){
//     // i =2 log(2), log(even)
//     if (i % 2 == 0) console.log(i); 
//     else continue;
//     console.log('even');
//     }



// EX4 : Cocat String
// let str = '';

// for (let i =1; i <= 10; i++){

//     //Guard
//     if (i % 3 == 0) continue;
//     str += i;
//     // "" + 1 => "1"
//     // "1" + 2 => "12"
// }
// console.log (str); // "12345678910"




// EX5 : remove vowel (a,e,i,o,u)
// let src = "codecamp"
// let res = "" // cdcmp

// // src.length ==> 8
// // src[0] ==> c
// // src[1] ==> o

// for (let i =0; i < src.length; i++) {
//     // console.log(i, src[i]);
//     let c = src[i];
//     let isVowel = c == 'a' || src[i] == 'e' || src[i] == 'i' || src[i] == 'o' || src[i] == 'u';
//     if (isVowel) continue;
//     else res = res + src[i];
//     // res = res + src[i]
//     // '' + src[0] == '' + 'c' => 'c'
//     // 'c' + src[1] == 'c' + 'o' => 'co'

// }
// console.log (res);



// ADVANCE : Nested Loop;
// Multiplication Table

for (let i = 2; i <= 12; i++) {
    // console.log(`${i} * 1 = ${i * 1}`);
    // console.log(`${i} * 2 = ${i * 2}`);
    // console.log(`${i} * 3 = ${i * 3}`);
    // console.log(`${i} * 4 = ${i * 4}`);
    // console.log(`${i} * 5 = ${i * 5}`);
    // console.log(`${i} * 6 = ${i * 6}`);
    // console.log(`${i} * 7 = ${i * 7}`);
    // console.log(`${i} * 8 = ${i * 8}`);
    // console.log(`${i} * 9 = ${i * 9}`);
    // console.log(`${i} * 10 = ${i * 10}`);
    // console.log(`${i} * 11 = ${i * 11}`);
    // console.log(`${i} * 12 = ${i * 12}`);
    console.log(`เริ่มท่องสูตรแม่ ${i}`);
    for(let j = i; j <= 12; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(`\n`)
}

console.log ('end...')
