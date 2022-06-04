var myGlobal = 1;
function sumFunc() {
    myGlobal++;
}

sumFunc();
sumFunc();
sumFunc();
sumFunc();
sumFunc();
console.log(myGlobal); //6
