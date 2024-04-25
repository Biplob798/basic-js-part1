/**
 * Ternary ---> three parts
 *  ?  :
 * 
 * condition ? yes : no
 */

const age = 111;
// if(age >=18){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// simple ternary 
// age >=18 ? console.log('yes'):console.log('no')

let price = 500;
// const isLeader = true;
const isLeader = false;
if (isLeader === true) {
    price = 0;
} else {
    price = price + 100;
}
// console.log(price);
price = isLeader === true ? 0 : price + 100;
console.log(price);

// Option : semi  advanced ternary 

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0
    }
}
else {
    price = price + 100
}

price > 1000 ? price / 2 : 0
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100

