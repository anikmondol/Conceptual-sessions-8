// for(let i = 1; i <= 10; i++){
//     console.log('anik', i);
// }


// for(let i = 1; i <= 10; i+= 2){
//     console.log('Sorry Ritu.....', i);
// }

// const numS = [10, 22, 47, 85];

// for(let i = 0; i < numS.length; i++){
//     console.log(numS[i]);
// }



const num = [23, 43, 2, 5, 346, 203, 2];

let sumOfOdd = 0;
let sumOfEven = 0;

for(let i = 0; i < num.length; i++){
    const x = num[i];


    if(x % 2 === 1){
        sumOfOdd += x;
    }else{
        sumOfEven += x;
    }
}

console.log(sumOfEven);
console.log(sumOfOdd);