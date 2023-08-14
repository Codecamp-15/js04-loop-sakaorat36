// for (let i = 1; i <= 100; i++) 
//{ 
//    let count = 0
//     for (let j = 2; j <= i; j++) {
//          if (i % j == 0) {
//             console.log(i + ' % ' + j + ' = ' + i % j)
//             count++
//             console.log('count', count)
//         }
//     }
//     if (count == 1) {
//         console.log(i) // คำตอบ
//     }

// }




// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 - 100
// - program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า ?

// let n = 5;
// let isPrime = ture; // flag

for (let n=2; n <= 100; n++){
    // only 1 Number
    let isPrime = ture;
    for(let divider = 2; divider < n; divider++) {
        // divier 2, 3, 4,....,n-1
        if (n % divider == 0) {
        isPrime = false;
        break;
        }
    
        // n=2 5/2 = 2.5 => isPrime = ture
        // n=3 5/3 = 1.6 => isPrime = ture
        // n=4 5/4 = 1.25 => isPrime = ture
        // n=5
    }
    if (isPrime) console.log(n);
    
}



// if (isPrime) alert(`number${n} is prime number`);
// else alert (`number${n} not prime number`)


