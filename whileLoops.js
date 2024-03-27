
const number = 18;

if ( number < 10 ){
    console.log("you can be something");
}
console.log("welcome here");


// run and debug kemne korba 
// ---------------------------------------------------------
// node js machine kibabe dekba je aeta kaj korce 
// 1st e breakpoint ekddom suru te daw, dekba red brightness bere gese
// run and debug click koro , Node js e click koro,
// f10 chapo  and thamate shift+ f5
// and then ciele brake point ke abr click korle off hoe jabe



// while loop start 
//while loop jotokon sotto hocce totokkon cholte thakbe
//
let numbers = 0 // loop variable
while (numbers <5){
    console.log("loop choltese", numbers)
    //numbers = numbers + 1 // loop variable aer maan change korte hoi 
    //numbers += 1
    numbers++
}
//
let count = 0;
while(count <6){
    console.log("Hello my jan", count);
    count += 1
}

// 1 theke 10 porjonto sonka dekaw  using while ///

// practise : 1
let counts = 1;

while ( counts <=10){
    console.log(counts);
    counts++ // looping variable always change korte hobe
}
// output : 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// practise : 2 
//50 theke 100 ;

let number = 50;

while ( number <=100){
    console.log("Hello , My Ekra " , number);
    number++
}
// output :
// Hello , My Ekra  50
// Hello , My Ekra  51
// Hello , My Ekra  52
// Hello , My Ekra  53
// Hello , My Ekra  54
// Hello , My Ekra  55
// Hello , My Ekra  56
// Hello , My Ekra  57
// Hello , My Ekra  58
// Hello , My Ekra  59
// Hello , My Ekra  60
// Hello , My Ekra  61
// Hello , My Ekra  62
// Hello , My Ekra  63
// Hello , My Ekra  64
// Hello , My Ekra  65
// Hello , My Ekra  66
// Hello , My Ekra  67
// Hello , My Ekra  68
// Hello , My Ekra  69
// Hello , My Ekra  70
// Hello , My Ekra  71
// Hello , My Ekra  72
// Hello , My Ekra  73
// Hello , My Ekra  74
// Hello , My Ekra  75
// Hello , My Ekra  76
// Hello , My Ekra  77
// Hello , My Ekra  78
// Hello , My Ekra  79
// Hello , My Ekra  80
// Hello , My Ekra  81
// Hello , My Ekra  82
// Hello , My Ekra  83
// Hello , My Ekra  84
// Hello , My Ekra  85
// Hello , My Ekra  86
// Hello , My Ekra  87
// Hello , My Ekra  88
// Hello , My Ekra  89
// Hello , My Ekra  90
// Hello , My Ekra  91
// Hello , My Ekra  92
// Hello , My Ekra  93
// Hello , My Ekra  94
// Hello , My Ekra  95
// Hello , My Ekra  96
// Hello , My Ekra  97
// Hello , My Ekra  98
// Hello , My Ekra  99
// Hello , My Ekra  100

///practise - 3 
// 1 theke 10 porjonto sonkar jogfall ( incremental / mane samner theke barse / choto theke bor0 / 1teke 2)
let numberss = 1 ;
let sum = 0;

while ( numberss <=10){
    console.log(numberss);
    sum = sum + numberss;
    console.log(sum);
    numberss++
}

/// practice : 4 ;
// 1 teke 10 porjonto jego 2 dea bag jai setar jogfall 

let number = 1 ;

while (number <=10){
    // check if the number is divided by 2 
    if (number % 2 === 0){
        console.log("this number is a prime number", number);
    }
    number++
}

/// Task 1 while loop :

//"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. 
//So display this.

let messageCount = 1;

while (messageCount <= 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    messageCount++
}

/// Task 2 while loop :

// Subtask-1:

// Find all the odd numbers from 61 to 100.

let oddNumber = 61;

while (oddNumber <=100){
    if(oddNumber % 2 !== 0){
        console.log("this number is odd number", oddNumber);
    }
    oddNumber++

}

// Subtask-2:
// Find all the even numbers from 78 to 98.
let evenNumber = 78;
while (evenNumber <=98) {
    if ( evenNumber % 2 === 0){
        console.log("this number is even", evenNumber);
    }
    evenNumber++
    
}

// / Task 3 while loop :
// Subtask-1.1:
// Display sum of indiviual  odd numbers from 81 to 131.
//if u want to see one by one addition use console in if 

let Oddnumber = 81;
let sum = 0
while (Oddnumber <=131){
    if(Oddnumber % 2 !== 0){
        sum = sum + Oddnumber
        console.log("sum of the odd number", sum);
    }
    Oddnumber++
}




/// Task 3 while loop :
// Subtask-1.2:
// Display sum of all the odd numbers from 81 to 131.
// if u want to see the final addition use console outside the while loop  . 
// after it finished it loop the the main sum output will show

let Oddnumber = 81;
let sum = 0
while (Oddnumber <=131){
    if(Oddnumber % 2 !== 0){
        sum = sum + Oddnumber
    }
    Oddnumber++
}
console.log("sum of the odd number", sum);
// output : 2756

/// Task 4 while loop :
// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

let Evencount = 206;
let sum = 0;
while ( Evencount <=311){
if ( Evencount % 2 === 0 ){
    
    sum = sum + Evencount
}
Evencount++
}
console.log("sum of the total even number", Evencount);
// output : 312

/// Task 5 while loop :

// Tell Ersa to generate a multiplication table for number 5

let number = 1;
let multiplier = 5;

while ( number <=10){
let result = number * multiplier
console.log(`${multiplier} * ${number} = ${result} `);
number++
}


/// Task 5 while loop :
// Implement a countdown timer that counts down from 21 to 15.

let counTimer = 21;

while ( counTimer >=15){
    console.log(counTimer);
    counTimer-- // 1 kore komte thakbe // decrement bola hoi 
}
console.log("countdown complete")

//---------------------------------------------------
let countdown = 100;

while ( countdown >= 1){
    console.log(countdown);
    countdown--
}
console.log("countdown is complete");



