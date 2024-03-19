const num = [23, 43, 2, 5, 46, 23, 2];

// for(const n of num){
//     if(n === 5){
//         break
//     }
//     console.log(n);
// }



for(const n of num){
    if(n === 2){
        continue
    }
    console.log(n);
}