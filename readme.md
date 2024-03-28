                  Know the for of loops  <Start>

<br>
// * it means same work will continued once after another until you stop it  <br>
/// * ekta jinis bar bar chote thaka  <br>
// for of loops  start  <br>

---

const namess = ["k", "M", "n", "l"]<br>
<br>
for (const name of namess){<br>
console.log(name);<br>
<br>
}<br>
// output : <br>
// k<br>
// M<br>
// n<br>
// l<br>

---

---

/// another example <br>

const fruits = ["A", "B" , "C", "D" , "E"] <br>
<br>
// until the array element end , the loop will continued<br>
<br>
for (const fruit of fruits){<br>
console.log(fruit); // fruits theke ekta ekta kore fruit nea seta dekabe <br>
console.log("I want to read")<br>
}<br>

---

// sumup : array modde protekta upadan ke loop caliea amra dekte pari .<br>
/// this is the usage of for of loop ,<br>
/// use array and singleconst variable<br>
//? for of loops end /// need array and single variable<br>

        Know the for of loops  <End>

=================================================

        Know the while loops  <start>

=================================================

---

const number = 18;<br>
<br>
if ( number < 10 ){<br>
console.log("you can be something");<br>
}<br>
console.log("welcome here");<br>

---

<br>
// run and debug kemne korba ????????<br>
// ---------------------------------------------------------<br>
// node js machine kibabe dekba je aeta kaj korce <br>
// 1st e breakpoint ekddom suru te daw, dekba red brightness bere gese<br>
// run and debug click koro , Node js e click koro,<br>
// f10 chapo  and thamate shift+ f5<br>
// and then ciele brake point ke abr click korle off hoe jabe<br>
<br>
<br>
----------------------------------------------------------------
----------------------------------------------------------------
// while loop start <br>
//while loop jotokon sotto hocce totokkon cholte thakbe<br>
//<br>
let numbers = 0 // loop variable<br>
while (numbers <5){<br>
    console.log("loop choltese", numbers)<br>
    //numbers = numbers + 1 // loop variable aer maan change korte hoi <br>
    //numbers += 1<br>
    numbers++<br>
}<br>
//<br>
let count = 0;<br>
while(count <6){<br>
    console.log("Hello my jan", count);<br>
    count += 1<br>
}<br>
<br>
----------------------------------------------------------------

// 1 theke 10 porjonto sonka dekaw using while ///<br>
<br>
// practise : 1<br>
let counts = 1;<br>
<br>
while ( counts <=10){<br>
console.log(counts);<br>
counts++ // looping variable always change korte hobe<br>
}<br>
output : <br>
1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
7<br>
8<br>
9<br>
10<br>
<br>

---

---

// practise : 2 <br>
//50 theke 100 ;<br>
<br>
let number = 50;<br>
<br>
while ( number <=100){<br>
console.log("Hello , My Ekra " , number);<br>
number++<br>
}<br>
output :<br>
Hello , My Ekra 50<br>
Hello , My Ekra 51<br>
Hello , My Ekra 52<br>
Hello , My Ekra 53<br>
Hello , My Ekra 54<br>
Hello , My Ekra 55<br>
Hello , My Ekra 56<br>
Hello , My Ekra 57<br>
Hello , My Ekra 58<br>
Hello , My Ekra 59
Hello , My Ekra 60
Hello , My Ekra 61
Hello , My Ekra 62
Hello , My Ekra 63
Hello , My Ekra 64
Hello , My Ekra 65
Hello , My Ekra 66
Hello , My Ekra 67
Hello , My Ekra 68
Hello , My Ekra 69
Hello , My Ekra 70
Hello , My Ekra 71
Hello , My Ekra 72
Hello , My Ekra 73
Hello , My Ekra 74
Hello , My Ekra 75
Hello , My Ekra 76
Hello , My Ekra 77
Hello , My Ekra 78
Hello , My Ekra 79
Hello , My Ekra 80
Hello , My Ekra 81
Hello , My Ekra 82
Hello , My Ekra 83
Hello , My Ekra 84
Hello , My Ekra 85
Hello , My Ekra 86
Hello , My Ekra 87
Hello , My Ekra 88
Hello , My Ekra 89
Hello , My Ekra 90
Hello , My Ekra 91
Hello , My Ekra 92
Hello , My Ekra 93
Hello , My Ekra 94
Hello , My Ekra 95
Hello , My Ekra 96
Hello , My Ekra 97
Hello , My Ekra 98
Hello , My Ekra 99
Hello , My Ekra 100<br>

---

---

///practise - 3 <br>
// 1 theke 10 porjonto sonkar jogfall ( incremental / mane samner theke barse / choto theke bor0 / 1teke 2)<br>
let numberss = 1 ;<br>
let sum = 0;<br>
<br>
while ( numberss <=10){<br>
console.log(numberss);<br>
sum = sum + numberss;<br>
console.log(sum);<br>
numberss++<br>
}<br>
<br>

---

/// practice : 4 ;<br>
// 1 teke 10 porjonto jego 2 dea bag jai setar jogfall <br>
<br>
let number = 1 ;<br>
<br>
while (number <=10){<br>
// check if the number is divided by 2 <br>
if (number % 2 === 0){<br>
console.log("this number is a prime number", number);<br>
}<br>
number++<br>
}<br>
<br>

---

---

/// Task 1 while loop :<br>
<br>
//"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. <br>
//So display this.<br>
<br>
let messageCount = 1;<br>
<br>
while (messageCount <= 60){<br>
console.log("I will invest at least 6 hrs every single day for next 60 days!");<br>
messageCount++<br>
}<br>
<br>

---

/// Task 2 while loop :<br>
<br>
// Subtask-1:<br>
<br>
// Find all the odd numbers from 61 to 100.<br>
<br>
let oddNumber = 61;<br>
<br>
while (oddNumber <=100){<br>
if(oddNumber % 2 !== 0){<br>
console.log("this number is odd number", oddNumber);<br>
}<br>
oddNumber++<br>
<br>
}
<br>

---

// Subtask-2:<br>
// Find all the even numbers from 78 to 98.<br>
let evenNumber = 78;<br>
while (evenNumber <=98) {<br>
if ( evenNumber % 2 === 0){<br>
console.log("this number is even", evenNumber);<br>
}<br>
evenNumber++<br>
<br>
}<br>
<br>

---

// / Task 3 while loop :<br>
// Subtask-1.1:<br>
// Display sum of indiviual odd numbers from 81 to 131.<br>
//if u want to see one by one addition use console in if <br>
<br>
let Oddnumber = 81;<br>
let sum = 0<br>
while (Oddnumber <=131){<br>
if(Oddnumber % 2 !== 0){<br>
sum = sum + Oddnumber<br>
console.log("sum of the odd number", sum);<br>
}<br>
Oddnumber++<br>
}<br>

---

/// Task 3 while loop :<br>
// Subtask-1.2:<br>
// Display sum of all the odd numbers from 81 to 131.<br>
// if u want to see the final addition use console outside the while loop .<br>
// after it finished it loop the the main sum output will show<br>

let Oddnumber = 81;<br>
let sum = 0<br>
while (Oddnumber <=131){<br>
if(Oddnumber % 2 !== 0){<br>
sum = sum + Oddnumber<br>
}<br>
Oddnumber++<br>
}<br>
console.log("sum of the odd number", sum);<br>
// output : 2756<br>
<br>

---

/// Task 4 while loop :<br>
// Subtask-2:<br>
// Display sum of all the even numbers from 206 to 311.<br>
<br>
let Evencount = 206;<br>
let sum = 0;<br>
while ( Evencount <=311){<br>
if ( Evencount % 2 === 0 ){<br>
sum = sum + Evencount<br>
}<br>
Evencount++<br>
}<br>
console.log("sum of the total even number", Evencount);<br>
// output : 312<br>
<br>

---

/// Task 5 while loop :<br>
<br>
// Tell Ersa to generate a multiplication table for number 5<br>
<br>
let number = 1;<br>
let multiplier = 5;<br>
<br>
while ( number <=10){<br>
let result = number _ multiplier<br>
console.log(`${multiplier} _ ${number} = ${result} `);<br>
number++<br>
}<br>
<br>

---

/// Task 6 while loop :<br>
// Implement a countdown timer that counts down from 21 to 15.<br>
<br>
let counTimer = 21;<br>
<br><br>
while ( counTimer >=15){<br>
console.log(counTimer);<br>
counTimer-- // 1 kore komte thakbe // decrement bola hoi <br>
}<br><br>
console.log("countdown complete")<br>

---

---

let countdown = 100;<br>
<br>
while ( countdown >= 1){<br>
console.log(countdown);<br>
countdown--<br>
}<br>
console.log("countdown is complete");<br>

---

        Know the while loops  <End>

=================================================

        Know the For loops  <Start>

=================================================

---

// while loop recap /// <br>
<br>
let number = 1;// looping varible<br>
<br>
while ( number <= 10){ // loop condition<br>
console.log("this is important"); // loop statement<br>
number++ // loop variable change <br>
}<br>

---

---

/// for loop structure <br>
// 1st kaj loop variable declaration <br>
// 2nd kaj loop condition<br>
///3rd kaj loop variable change<br>
/// 4th kaj show message<br>
<br>

---

---

for(let count = 1;count <= 10 ;count++){<br>
console.log("this is count",count);<br>
}<br>
<br>

---

---

// make for loop 1-10 even sum koren eksate ba indivually ..<br>
<br>
// first make while loop even koro<br>

let number = 1;<br>
let sum = 0;<br>

while (number <=10){<br>
if(number % 2 === 0){<br>
sum = sum + number<br>
}<br>
number++<br>
}<br>
console.log("the total even number is ", sum)<br>
<br>
// for loop even<br>
let sum = 0<br>
for (let number = 1; number<=10 ; number++){<br>
<br>
ciele if chara kora jai , just use number =1 , number = number + 2 ///<br>
<br>
if(number % 2 === 0){<br>
sum = sum + number<br>
}<br>
}<br>
console.log("sum of the even number is ", sum);<br>
<br>

---

// for loop oddwith additon all <br>
let sum = 0<br>
for(let number = 1 ; number <=10; number++){ <br>
<br>
// ciele if chara kora jai , just use number =1 , number = number + 2<br>
<br>
if ( number % 2 !== 0 ){<br>
sum = sum + number;<br>
}<br>
}<br>
<br>
console.log("sum of the odd number is ", sum);<br>
<br>

---

---

// make multiplication table 13<br>
// at first recap while multiplication<br>
<br>
let number = 1;<br>
let multiply = 13;<br>
<br>
while ( number <=10){<br>
let result = number*multiply;<br>
console.log(` ${multiply} * ${number} = ${result}`);<br>
number++<br>
}<br>

// now make it for loop :<br>
let multiply = 13<br>
for ( let number = 1; number <=10 ; number++){<br>
let result = multiply _ number;<br>
console.log(`${multiply} _ ${number} = ${result} `);<br>
}<br>
<br>

---

---

/// Task for loop : 1<br>
<br>
//I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this<br>
<br>
//<br>
for (let numberrs = 1; numberrs <= 60; numberrs++) {<br>
console.log("I will invest at least 6 hrs every single day for next 60 days!");;<br>
<br>
}<br>
//<br>

---

---

/// Task for loop : 2<br>
// Subtask-1:<br>
<br><br>
// Find all the odd numbers from 61 to 100.<br>
//<br>
for ( let number = 61 ; number <= 100 ; number++){<br>
if(number % 2 !== 0 ){<br>
console.log(number);<br>
<br>
}<br>
}<br>
// alternative //<br>

for ( let number = 61 ; number <= 100 ; number= number + 2){ // number = 61, it increase 2 kore mane bejor<br>
console.log(number);<br>
}<br>

---

---

// Subtask-2:<br>

// Find all the even numbers from 78 to 98.<br>
<br>
for ( let number = 78 ; number <= 98 ; number =number+1){ // number = 61, it increase 2 kore mane bejor<br>
if (number % 2 === 0 ){<br>
console.log("the number is even", number);<br>
}<br>
}<br>
// alternative //<br>

for ( let number = 78 ; number <= 98 ; number =number+2){ // number = 78, it increase 2 kore mane jor<br>
console.log("the number is even", number);<br>
}<br>
<br>

---

---

/// Task for loop : 3<br>
// Subtask-1:<br>

// Display sum of all the odd numbers from 91 to 129.<br>
let sum = 0;<br>
for (let number = 91; number <=129 ; number=number+2){<br>
sum = sum + number;<br>
}<br>
console.log("sum of the all odd number", sum)<br>
<br>

---

// u can use it ifelse also instead of increment<br>
<br>
// Subtask-2:<br>
<br>
// Display sum of all the even numbers from 51 to 85.<br>
<br>
let sum = 0;<br>
for (let number = 51; number <=85 ; number=number+2){v
sum = sum + number;<br>
}<br>
console.log("sum of the all odd number", sum)<br>

---

//recap while loop //<br>
<br>
let number = 51<br>;
let sum = 0;<br>
<br>
while (number <=85) {<br>
sum = sum + number;<br>
number = number + 2; // u can use ifelse also<br>
}<br>
console.log("sum of the all odd number ", sum);<br>

---

---

//recap while loop //<br>
<br>
<br>
/// Task for loop : 4<br>
// Generate a multiplication table for number 9<br>
<br>
//recap while loop <br>
let number = 1;<br>
let multiply = 9;<br>
<br>
while (number <=10) {<br>
let result = number _ multiply;<br>
console.log(`${multiply} _ ${number} = ${result} `);<br>
    number++<br>
}<br>
// now use for loop <br>
<br>
let multiply = 9;<br>
for (  let number = 1 ; number <=10 ; number++){<br>
    let result = number * multiply; // result ke bitore nea kaj korte hobe .<br>
    console.log(`${multiply} \* ${number} = ${result} `);<br>
}<br>

---

---

/// Task for loop : 5<br>
// Implement a countdown timer that counts down from 81 to 65.<br>
<br>
for ( let number = 81 ; number >= 65 ; number--){<br>
console.log(number);<br>
}<br>
console.log("countdown is complete");<br>
<br>

---

        Know the For loops  <End>

=================================================

        Know the different way of loops  <Start>

=================================================

///

// give me the number between 1 to 30 that divisible by 5;

//

for ( let number = 1 ; number <= 30; number++){
if ( number % 5 === 0) { // 5 dea bag korle bagses 0 hole }
console.log("the divided number is ", number);
}
}

// give me the number between 1 to 30 that divisible by 5 or divisible by 3

for ( let number = 1 ; number <= 30; number++){
if ( number % 5 === 0 || number % 3 === 0) { // 5 dea bag jai otoba 3 dea jai }
console.log("the divided number is ", number);
}
}

// give me the number between 1 to 30 that divisible by 5 and divisible by 3

for ( let number = 1 ; number <= 30; number++){
if ( number % 5 === 0 && number % 3 === 0) { // 5 dea bag jai otoba 3 dea jai }
console.log("the divided number is ", number);
}
}

// give me the sum of the number that devisible by 3 from 1 to 100
let sum = 0
for (let number = 1 ; number <=100 ; number++){
if ( number % 3 === 0 )
sum = sum + number;
}
console.log("sum of the number that devisible by 3 is ",sum);

        Know the different way of loops  <End>

=================================================

        Know When To Use A Break And Continue <Start>

=================================================
// continue >>> skip this one <br>
// continue >>> ekta iteration bondo kore onno iteration calate pari (if dea)<br>
// continue te for loop e increment/ decrement kono problem nai tobe <br>
// continue te while loop e increment/ decrement e continue use korte hobe while condition er porer line e<br>
// brake >>> i am done with this loop. -- loop end<br>
<br>
<br>
=================================================================
// brake concept & Exercise<br>
<br>

---

// E- 1<br>

for ( let number = 1; number<=100; number++){<br>
console.log(number);<br>
if (number >=17){ // brake // ami ciele jekono loop ke brake korte pare if(condition) use kore...<br>
break;<br>
}<br>
}<br>
console.log("brake is completed");<br>
<br>

---

---

// E - 2<br>
// use while loop with brake <br>
// 54 to 1<br>
<br>
let numbers = 54;<br>
while (numbers >=1) {<br>
console.log(numbers);<br>
if (numbers <25){ // 54 theke 24 porjonto dekte cie ami <br>
break<br>
}<br>
numbers--<br>
<br>
}<br>

---

// E - 3<br>
// use For loop with brake <br>
// 108 to 50 <br>
//break 108 to 40<br>
<br>
for (let number = 108 ; number>=50; number--){<br>
// console.log(number); // aekane console dile check chara print dibe .<br>
if ( number < 60){<br>
break;<br>
}<br>
console.log(number); // aekane dile aage check then print ...<br>
}<br>
console.log("break is started");<br>
<br>

---

---

// use this while loop <br>
// 10 to 1<br>
// brake 6<br>
let number = 10;<br>
<br>
while (number >=1){<br>
if ( number<6){<br>
break<br>
}<br>
console.log(number);<br>
number--<br>

}<br>
console.log("brake is complete");<br>

---

---

// use this while loop <br>
// 1 to 10<br>
// brake 6<br>
// increment<br>

let number = 1;<br>
<br>
while (number <=10) {<br>
if ( number >6){<br>
break<br>
}<br>
console.log(number);<br>
number++<br>
}<br>
console.log("increment brake");<br>

---

---

/// use this task for loop<br>
// 1 to 10<br>
// brake 8<br>
// increment<br>

for ( let number = 1 ; number<=10; number++){<br>
if ( number >8){<br>
break<br>
}<br><br>
console.log(number);<br>
}<br>
console.log("increment brake complete");<br>

---

=====================================================
// continue concept & Exercise //<br>
// continue js method ...<br>

/// For loop continue E-1<br>
// 1 to 20 increment <br><br>
// bejor hole badd dea diben <br>
for( let number = 1 ; number <=20; number++){<br>
if ( number % 2 === 1){ /// alternative number % 2 !==0 <br>
continue<br>
} <br>
console.log(number);<br>
}<br>
<br>
/// While loop continue E-1 ;<br>
// 1 to 20 increment <br>
// bejor hole badd dea diben <br>
<br>
let number = 1; // ekta sonka komie rako ,, // ba naw korte paro <br>
<br>
while ( number <=20){<br>
number++ // ekane increment/decrement dite hobe jate value change korte pare<br>
if ( number % 2 === 1){<br>
continue<br>
}<br>
console.log(number);<br>
// number++ // dile continue te atka porto , tai while condition er porei dite hobe.<br>
}<br>
<br>
/// While loop continue E-2 ;<br>
// 20 to 1 decrement <br>
// 5 dea divide kora jai <br>
let number = 21;<br>
<br>
while ( number >=1){<br>
number--<br>
if( number % 5 !== 0){ // jegula 5 dea bag jai na tar bad hoe jabe<br>
continue<br>
}<br>
console.log(number);<br>
}<br>

---

## // Most Advanced brake<br>

// 20 to 100 <br>
// jor guloi output asve<br>
// 60 porjonto<br>
// use koro both while and for<br>

// for loop brake <br>

for ( let number = 20 ; number <=100; number = number + 2){ /// jate se loop e dooke taie number + 2 kora <br>
if ( number % 2 === 0){<br>
console.log(number);<br>
if( number === 60){<br>
break<br>
}<br>
}<br>
}<br>

<br>
// while  loop brake <br>
<br>
let number = 20;<br>
<br>
while (number <=100) {<br>
    if ( number % 2 === 0){<br>
        console.log(number)<br>
        if ( number === 70){<br>
            break<br>
        }<br>
    }<br>
    number= number + 2<br>
}<br>


--------------------------------------------------------------------------------
// Task 1 : brake<br>
// Write a loop 1 to 200. Use break to exit the loop once you find 100.<br>
// i am using for loop <br>

for ( let number = 1; number <=200; number++){<br>
    if(number >100){<br>
        break<br>
    }<br>
    console.log(number)<br>
}<br>
//--------------------------------------------------------------------------------<br>
//--------------------------------------------------------------------------------<br>
// Task 2 : brake<br>
// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum<br> reaches or exceeds 100<br>
<br>
let number = 1;<br>
let sum = 0<br>
while ( number <=100){<br>
    sum = sum + number<br>
    if(sum >100){<br>
        break<br>
    }<br>
    number++<br>
}<br>
console.log(sum);<br>
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Task 3 : brake<br>
// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square<br> number (like 4, 9, 16, etc.)<br>
<br>
for (let number = 1 ; number<=100; number++){<br>
    if (Math.sqrt(number) % 1 === 0){<br>
        console.log(" encounters the first square number", number);<br>
    }<br>
}<br>
//--------------------------------------------------------------------------------<br>
//--------------------------------------------------------------------------------<br>
// Task 4 : Continue<br>
// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.<br>
<br>
for ( let number = 1; number <=40; number++){<br>
    if ( number % 2 !== 0 ){<br>
        continue<br>
    }<br>
    console.log("even number", number);<br>
}<br>
//--------------------------------------------------------------------------------<br>

//--------------------------------------------------------------------------------
// Task 5 : Continue<br>
// display odd number from 55 to 85 and skip the numbers divisible by 5.<br>
for ( let number = 55; number <=85; number++){<br>
    if ( number % 5 == 0 ){<br>
        continue<br>
    }<br>
    console.log("even number", number);<br>
}<br>
//--------------------------------------------------------------------------------

        Know When To Use A Break And Continue <End>

=================================================

        Know Do while  <start>

=================================================

// recap while loop <br>

let number = 1;<br>
<br>
while (number <=20) {<br>
console.log(number);<br>
number++<br>
<br>
}<br>

// do while loop<br>
// aeta amra rear case e use korbo<br>
let numbers = 1;<br>
<br>
do{<br>
console.log(numbers); // age print then check<br>
numbers++<br>
<br>
}
while(numbers<=20){<br>
<br>
}<br>

        Know Do while  <End>

=================================================

        Know Where to use While & For loop  <Start>
=================================================
/// while loop use hoi ,<br>
// jokon while loop er condition infiniy thake<br>
// use login ase kina<br>
// user data load hoice kina<br>
// aeto friend hoice kina<br>
// jotokkon data load na hocce load hoite thakbe<br>
// ekkotai sorto fullfill korar aag porjonto aeta cholve<br>
<br>
// for loop e starting and ending bola thakbe<br>
/// mane sob kicu define kora thakbe<br>
/// amra jani kokon suro hobe kokon ses hobe<br>


     Know Where to use While & For loop <End>
=================================================

                   Total Sumup
=================================================

---

for of loops :<br>
<br>
const numbers = [1, 3, 5, 7, 9]<br>
<br>
for(const number of numbers){<br>
console.log(number)<br>
}<br>
<br>

---

while loops :<br>
<br>
let coundown = 1;<br>
<br>
while (countdown <=10){<br>
console.log("message")<br>
countdown++<br>
}<br>
<br>

---

for loops : <br>
<br>
for (let number = 1; number<=10; number++){<br>
console.log(number)<br>
}<br>
<br>

---

<br>
 for loops break :<br>
/// 1 to 100<br>
/// 60 porjonto <br>
 for ( let number = 1; number <=100 ; number++ ){<br>
    if ( number > 60){<br>
        break;<br>
    }<br>
    console.log(number)<br>
 }<br>
 -----------------------------------------------------------
<br>
/// while  loops break :<br>
/// 1 to 100<br>
/// 60 porjonto <br>
<br>
let number = 1 ;<br>
<br>
while ( number <=100){<br>
    if ( number > 50){<br>
        break<br>
    }<br>
    console.log("number")<br>
}<br>
 -----------------------------------------------------------
/// for continue<br>
// jor sonka dekate cie<br>
// tarmane bijor bad hoe jabe continue dea<br>
for ( let number = 1 ; number >=60 ; number++){<br>
    if ( number % 2 !== 0){<br>
        continue<br>
    }<br>
    console.log( number)<br>
}<br>
<br>
 -----------------------------------------------------------
/// while continue<br>
// jor sonka dekate cie<br>
// tarmane bijor bad hoe jabe continue dea<br>
// 1 to 100<br>
<br>
let number = 1;<br>
<br>
while ( number <=100){<br>
    number++<br>
    if (number % 2 !== 0){<br>
        continue <br>
    }<br>
    console.log(number)<br>
}<br>

---

// do while loop<br>
// aeta amra rear case e use korbo<br>
let numbers = 1;<br>
<br>
do{<br>
console.log(numbers); // age print then check<br>
numbers++<br>
<br>
}
while(numbers<=20){<br>
<br>
}<br>
