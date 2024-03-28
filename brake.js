//  E- 1

for ( let number = 1; number<=100; number++){
    console.log(number);
    if (number >=17){ // brake // ami ciele jekono loop ke brake korte pare if(condition) use kore...
        break;
    }
}
console.log("brake is completed");

// E - 2
// use while loop with brake 
// 54 to 1

let numbers = 54;
while (numbers >=1) {
    console.log(numbers);
    if (numbers <25){ // 54 theke 24 porjonto dekte cie ami 
        break
    }
    numbers--
    
}

// E - 3
// use For loop with brake 
// 108 to 50 
//break 108 to 40

for (let number = 108 ; number>=50; number--){
   // console.log(number); // aekane console dile check chara print dibe .
    if ( number < 60){
        break;
    }
    console.log(number); // aekane dile aage check then print ...
}
console.log("break is started");

// use this  while loop 
// 10 to 1
// brake 6
let number = 10;

while (number >=1){
    if ( number<6){
        break
    }
    console.log(number);
    number--
    
}
console.log("brake is complete");

// use this  while loop 
// 1 to 10
// brake 6
// increment

let number = 1;

while (number <=10) {
    if ( number >6){
        break
    }
    console.log(number);
    number++
}
console.log("increment brake");

/// use this task for loop
// 1 to 10
// brake 8
// increment

for ( let number = 1 ; number<=10; number++){
    if ( number >8){
        break
    }
    console.log(number);
}
console.log("increment brake complete");