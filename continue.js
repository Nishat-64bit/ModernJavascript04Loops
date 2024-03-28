// // continue js method ...

// /// For loop continue E-1
// // 1 to 20 increment 
// // bejor hole badd dea diben 
// for( let number = 1 ; number <=20; number++){
//     if ( number % 2 === 1){ /// alternative number % 2 !==0 
//         continue
//     } 
//     console.log(number);
// }

// /// While loop continue E-1 ;
// // 1 to 20 increment 
// // bejor hole badd dea diben 

// let number = 1; // ekta sonka komie rako ,, // ba naw korte paro 

// while ( number <=20){
//     number++ // ekane increment/decrement dite hobe jate value change korte pare
//     if ( number % 2 === 1){
//         continue
//     }
//     console.log(number);
//     // number++ // dile continue te atka porto , tai while condition er porei dite hobe.
// }

// /// While loop continue E-2 ;
// // 20 to 1 decrement 
// // 5 dea divide kora jai 
// let number = 21;

// while ( number >=1){
//     number--
//     if( number % 5 !== 0){ // jegula 5 dea bag jai na tar bad hoe jabe
//         continue
//     }
//     console.log(number);
// }

// for ( let number = 1; number <=100 ; number++ ){
//     if ( number > 60){
//         break;
//     }
//     console.log(number)
//  }


// Most Advanced 
// 20 to 100 
// jor guloi output asve 
// 60 porjonto
// use koro both while and for

// for loop brake 

for ( let number = 20 ; number <=100; number = number + 2){ /// jate se loop e dooke taie number + 2 kora 
    if ( number % 2 === 0){
        console.log(number);
        if( number === 60){
            break
        }
    }
}


// while  loop brake 

let number = 20;

while (number <=100) {
    if ( number % 2 === 0){
        console.log(number)
        if ( number === 70){
            break
        }
    }
    number= number + 2
}