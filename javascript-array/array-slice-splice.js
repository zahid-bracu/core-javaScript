// slice
var array=[11,22,33,44,55,66,77,88,99];
var newArr=array.slice(2,4);
console.log(newArr); // output: 33,44


// spice
var array=[11,22,33,44,55,66,77,88,99];
var newArr=array.splice(2,4,121,232,434,454,656,989);
console.log(array); //output: 11,22,77,88,99
console.log(newArr);