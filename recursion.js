function sum(i){
    if(i==6){
    return 6;
    }
    return i+sum(i+1);

}
console.log(sum(5));