var myGlobal = 1;

const yourFunc = () => {
    // as we do not use var in front of it - it became global;
    myLocalGlobal = 10;
}

const myFunc = () => {
    myGlobal++;
    myLocalGlobal++;
}


yourFunc(); // run the function to initialize the variable
myFunc();
myFunc();
myFunc();
console.log(myGlobal); //4
console.log(myLocalGlobal); //13

