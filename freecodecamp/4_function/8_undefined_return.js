var value = 5;
function addThree() {
    value += 3;
    //no return
}
function addFive() {
    value += 5;
    //no return
}
addFive();
addThree();
console.log(value);//13