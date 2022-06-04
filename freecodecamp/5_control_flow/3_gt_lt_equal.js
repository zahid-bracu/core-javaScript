function gtTest(num) {
    if (num > 100)
        return "Greater than 100";
    if (num > 10)
        return "Greater than 10";
    return "Less than 10";
}
console.log(gtTest(5)); //Less than 10



function gtTestEqual(num) {
    if (num >= 100)
        return "Greater than or equal 100";
    if (num >= 10)
        return "Greater than or equal 10";
    return "Less than 10";
}
console.log(gtTestEqual(15)); //Greater than or equal 10



function ltTest(num) {
    if (num < 5)
        return "less than 5";
    if (num < 10)
        return "less than 10 and greater than or equal 5";
    return "Greater than 10";
}
console.log(ltTest(4)); //less than 5