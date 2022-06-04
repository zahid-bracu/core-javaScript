function standInLine(arr, item) {
    arr.shift();
    arr.unshift(item);
    return arr;
}
var array = ['x', 'y', 'z', 11, 22, 33];
console.log("Before : " + JSON.stringify(array)); //Before : ["x","y","z",11,22,33]
standInLine(array, 'a');
console.log("After : " + JSON.stringify(array)); //After : ["a","y","z",11,22,33]
