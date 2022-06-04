//double equal checks only value
function equalityCheck(num) {
    if (num == 100)
        return "Equal to 100";
    return "Not Equal to 100";
}
console.log(equalityCheck(100)); //Equal to 100



//triple equal checks values and data type
// called strict equally operator
function equalityCheckTriple(num) {
    if (num === "100")
        return "Equal to 100";
    return "Not Equal to 100";
}
console.log(equalityCheckTriple(100)); //Not Equal to 100

//not equal operators
function notEqualityCheck(num) {
    if (num != "100")
        return "Yes";
    return "No";
}
console.log(notEqualityCheck(100)); //No


//strict not equal operators
function notEqualityCheckTriple(num) {
    if (num !== "100")
        return "Yes";
    return "No";
}
console.log(notEqualityCheckTriple(100)); //Yes