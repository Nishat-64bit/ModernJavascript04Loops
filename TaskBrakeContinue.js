//
//--------------------------------------------------------------------------------
// Task 1 : brake
// Write a loop 1 to 200. Use break to exit the loop once you find 100.
// i am using for loop 

for ( let number = 1; number <=200; number++){
    if(number >100){
        break
    }
    console.log(number)
}
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Task 2 : brake
// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let number = 1;
let sum = 0
while ( number <=100){
    sum = sum + number
    if(sum >100){
        break
    }
    number++
}
console.log(sum);
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Task 3 : brake
// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let number = 1 ; number<=100; number++){
    if (Math.sqrt(number) % 1 === 0){
        console.log(" encounters the first square number", number);
    }
}
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Task 4 : Continue
// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

for ( let number = 1; number <=40; number++){
    if ( number % 2 !== 0 ){
        continue
    }
    console.log("even number", number);
}
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// Task 5 : Continue
// display odd number from 55 to 85 and skip the numbers divisible by 5.
for ( let number = 55; number <=85; number++){
    if ( number % 5 == 0 ){
        continue
    }
    console.log("even number", number);
}
//--------------------------------------------------------------------------------