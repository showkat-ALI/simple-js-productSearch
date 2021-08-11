// let fibo = [0,1];
// for(let i = 2;i<10; i++){
//     /* fibo[2] = fibo[1]+fibo[0];
//     fibo[3] = fibo[2]+fibo[2]; */
//     fibo[i] = fibo[i-1]+fibo[i-2];

// }
// console.log(fibo);
// fibo  = 0 1 1 2 3 5 8 13 21....

function fibo(n){
let arr = [0,1];

    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;

    }
    
    return fibo(n-1)+fibo(n-2);

}
console.log(fibo(3));