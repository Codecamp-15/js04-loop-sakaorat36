// interestRate = 2.5
// balance = 100_000

// newBalance = balance + Interest
// percent : per-century
// newBalance = balance + (balance * (interestRate/100)) 

let balance = 100_000
let interestRate = 2.5
let newBalance =  balance + (balance * (interestRate/100))

for (let i = 1; i <= 10; i++) {
  
  if (i > 1) {
    newBalance = newBalance + (newBalance * (interestRate/100))
  } 
 
}

console.log(newBalance) // 128008.45

    
  


    
  
