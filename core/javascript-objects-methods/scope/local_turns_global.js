function check(){
    value="420"; //local variable makes global with out 'var'
    console.log(value);
}


// console.log(value);
check();
console.log(value); // will work as it is a local variable