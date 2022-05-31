//Asynchronous system : code doesn't run from top to bottom
console.log("I");
console.log("eat");
setTimeout(() => {
    console.log("coke");
}, 4000)
console.log("with a");
console.log("bottle");



/*
Output : 
---------------------
I
eat
with a
bottle
coke
*/