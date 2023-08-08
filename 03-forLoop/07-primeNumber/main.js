for (let i = 1; i <= 100; i++) {

    let count = 0

    for (let j = 2; j <= i; j++) {
        
        if (i % j == 0) {
            console.log(i + ' % ' + j + ' = ' + i % j)
            count++
            console.log('count', count)
        }

    }

    if (count == 1) {
        console.log(i)
    }

}