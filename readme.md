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

----------------------------------------------------------------
const number = 18;<br>
<br>
if ( number < 10 ){<br>
    console.log("you can be something");<br>
}<br>
console.log("welcome here");<br>
----------------------------------------------------------------

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

// 1 theke 10 porjonto sonka dekaw  using while ///<br>
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
----------------------------------------------------------------
----------------------------------------------------------------
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
Hello , My Ekra  50<br>
Hello , My Ekra  51<br>
Hello , My Ekra  52<br>
Hello , My Ekra  53<br>
Hello , My Ekra  54<br>
Hello , My Ekra  55<br>
Hello , My Ekra  56<br>
Hello , My Ekra  57<br>
Hello , My Ekra  58<br>
Hello , My Ekra  59
Hello , My Ekra  60
Hello , My Ekra  61
Hello , My Ekra  62
Hello , My Ekra  63
Hello , My Ekra  64
Hello , My Ekra  65
Hello , My Ekra  66
Hello , My Ekra  67
Hello , My Ekra  68
Hello , My Ekra  69
Hello , My Ekra  70
Hello , My Ekra  71
Hello , My Ekra  72
Hello , My Ekra  73
Hello , My Ekra  74
Hello , My Ekra  75
Hello , My Ekra  76
Hello , My Ekra  77
Hello , My Ekra  78
Hello , My Ekra  79
Hello , My Ekra  80
Hello , My Ekra  81
Hello , My Ekra  82
Hello , My Ekra  83
Hello , My Ekra  84
Hello , My Ekra  85
Hello , My Ekra  86
Hello , My Ekra  87
Hello , My Ekra  88
Hello , My Ekra  89
Hello , My Ekra  90
Hello , My Ekra  91
Hello , My Ekra  92
Hello , My Ekra  93
Hello , My Ekra  94
Hello , My Ekra  95
Hello , My Ekra  96
Hello , My Ekra  97
Hello , My Ekra  98
Hello , My Ekra  99
Hello , My Ekra  100<br>

----------------------------------------------------------------
----------------------------------------------------------------
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
----------------------------------------------------------------
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
----------------------------------------------------------------
---------------------------------------------------------------------------
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
----------------------------------------------------------------
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
----------------------------------------------------------------
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
----------------------------------------------------------------
// / Task 3 while loop :<br>
// Subtask-1.1:<br>
// Display sum of indiviual  odd numbers from 81 to 131.<br>
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
----------------------------------------------------------------



/// Task 3 while loop :<br>
// Subtask-1.2:<br>
// Display sum of all the odd numbers from 81 to 131.<br>
// if u want to see the final addition use console outside the while loop  .<br> 
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
----------------------------------------------------------------
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
----------------------------------------------------------------
/// Task 5 while loop :<br>
<br>
// Tell Ersa to generate a multiplication table for number 5<br>
<br>
let number = 1;<br>
let multiplier = 5;<br>
<br>
while ( number <=10){<br>
let result = number * multiplier<br>
console.log(`${multiplier} * ${number} = ${result} `);<br>
number++<br>
}<br>
<br>
----------------------------------------------------------------

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

----------------------------------------------------------------
---------------------------------------------------
let countdown = 100;<br>
<br>
while ( countdown >= 1){<br>
    console.log(countdown);<br>
    countdown--<br>
}<br>
console.log("countdown is complete");<br>

----------------------------------------------------------------
        Know the while loops  <End>
=================================================

                   Total Sumup
=================================================

----------------------------------------------------
for of loops :<br>
<br>
const numbers = [1, 3, 5, 7, 9]<br>
<br>
for(const number of numbers){<br>
    console.log(number)<br>
}<br>
<br>
---------------------------------------------------
while loops :<br>
<br>
let coundown = 1;<br>
<br>
while (countdown  <=10){<br>
    console.log("message")<br>
    countdown++<br>
}<br>
<br>
-----------------------------------------------------------