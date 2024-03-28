
// while loop recap /// 
let number = 1;// looping varible

while ( number <= 10){  // loop condition
    console.log("this is important"); // loop statement
    number++ // loop variable change 
}

/// for loop structure 
// 1st kaj loop variable declaration 
// 2nd kaj loop condition
///3rd kaj loop variable change
/// 4th kaj show message

for(let count = 1;count <= 10 ;count++){
    console.log("this is count",count);
}

// make for loop 1-10 devide 2dea..
// first make while loop even koro

let number = 1;
let sum = 0;

while (number <=10){
    if(number % 2 === 0){
        sum = sum + number
    }
    number++
}
console.log("the total even number is ", sum)

// for loop even
let sum = 0
for (let number = 1; number<=10 ; number++){

    ciele if chara kora jai , just use number =1 , number = number + 2 ///

    if(number % 2 === 0){
        sum = sum + number
    }
}
console.log("sum of the even number is ", sum);

// for loop odd
let sum = 0
for(let number = 1 ; number <=10; number++){ 

    // ciele if chara kora jai , just use number =1 , number = number + 2

    if ( number % 2 !== 0 ){
        sum = sum + number;
    }
}

console.log("sum of the odd number is ", sum);

// make multiplication table 13
// at first recap while multiplication

let number = 1;
let multiply = 13;

while ( number <=10){
    let result = number*multiply;
    console.log(` ${multiply} * ${number} = ${result}`);
    number++
}

// now make it for loop :
let multiply = 13
for ( let number = 1; number <=10 ; number++){
    let result = multiply * number;
    console.log(`${multiply} * ${number} = ${result} `);
}



/// Task for loop : 1

//I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this

//
for (let numberrs = 1; numberrs <= 60; numberrs++) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");;
    
}
//

/// Task for loop : 2
// Subtask-1:

// Find all the odd numbers from 61 to 100.
//
for ( let number = 61 ; number <= 100 ; number++){
    if(number % 2 !== 0 ){
        console.log(number);
        
    }
}
// alternative //

for ( let number = 61 ; number <= 100 ; number= number + 2){ // number = 61, it increase 2 kore mane bejor
        console.log(number);
}

// Subtask-2:

// Find all the even numbers from 78 to 98.

for ( let number = 78 ; number <= 98 ; number =number+1){ // number = 61, it increase 2 kore mane bejor
    if (number % 2 === 0 ){
        console.log("the number is even", number);
    }
}
// alternative //

for ( let number = 78 ; number <= 98 ; number =number+2){ // number = 78, it increase 2 kore mane jor
    console.log("the number is even", number);
}
    
/// Task for loop : 3
// Subtask-1:

// Display sum of all the odd numbers from 91 to 129.
let sum = 0;
for (let number = 91; number <=129 ; number=number+2){
    sum = sum + number;
}
console.log("sum of the all odd number", sum)

// u can use it ifelse also instead of increment

// Subtask-2:

// Display sum of all the even numbers from 51 to 85.

let sum = 0;
for (let number = 51; number <=85 ; number=number+2){
    sum = sum + number;
}
console.log("sum of the all odd number", sum)

//recap while loop //

let number = 51;
let sum  = 0;

while (number <=85) {
    sum = sum + number;
    number = number + 2; // u can use ifelse also
}
console.log("sum of the all odd number ", sum);

//recap while loop //


/// Task for loop : 4
// Generate a multiplication table for number 9

//recap while loop 
let number = 1;
let multiply = 9;

while (number <=10) {
    let result = number * multiply;
    console.log(`${multiply} * ${number} = ${result} `);
    number++
}
// now use for loop 

let multiply = 9;
for (  let number = 1 ; number <=10 ; number++){
    let result = number * multiply; // result ke bitore nea kaj korte hobe .
    console.log(`${multiply} * ${number} = ${result} `);
}

/// Task for loop : 5
// Implement a countdown timer that counts down from 81 to 65.

for ( let number = 81 ; number >= 65 ; number--){
    console.log(number);
}
console.log("countdown is complete");

