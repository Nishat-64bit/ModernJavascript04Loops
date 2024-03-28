
// ///

// // give me the number between  1 to 30 that divisible by 5;

// // 

// for ( let number  = 1 ; number <= 30; number++){
//     if ( number % 5 === 0) { // 5 dea bag korle bagses 0 hole }
//         console.log("the divided number is ", number);
//     }
// }


// // give me the number between  1 to 30 that divisible by 5 or divisible by 3


// for ( let number  = 1 ; number <= 30; number++){
//     if ( number % 5 === 0 || number % 3 === 0) { // 5 dea bag jai otoba 3 dea jai }
//         console.log("the divided number is ", number);
//     }
// }

// // give me the number between  1 to 30 that divisible by 5 and divisible by 3

// for ( let number  = 1 ; number <= 30; number++){
//     if ( number % 5 === 0 && number % 3 === 0) { // 5 dea bag jai otoba 3 dea jai }
//         console.log("the divided number is ", number);
//     }
// }


// give me the sum of the number that devisible by 3 from 1 to 100
let sum = 0
for (let number = 1 ; number <=100 ; number++){
    if ( number % 3 === 0 )
    sum = sum + number;
}
console.log("sum of the number that devisible by 3 is ",sum);