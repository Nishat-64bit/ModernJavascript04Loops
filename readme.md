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
output : 
1
2
3
4
5
6
7
8
9
10

// practise : 2 
//50 theke 100 ;

let number = 50;

while ( number <=100){
    console.log("Hello , My Ekra " , number);
    number++
}
output :
Hello , My Ekra  50
Hello , My Ekra  51
Hello , My Ekra  52
Hello , My Ekra  53
Hello , My Ekra  54
Hello , My Ekra  55
Hello , My Ekra  56
Hello , My Ekra  57
Hello , My Ekra  58
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
Hello , My Ekra  100

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


        Know the while loops  <End>
=================================================

                   Total Sumup
=================================================

for of loops :

const numbers = [1, 3, 5, 7, 9]

for(const number of numbers){
    console.log(number)
}

while loops :
