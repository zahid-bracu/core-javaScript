// calling one function inside another function
// build connection between function

function one(call_two) {
    console.log("Step 1 completed , please call step 2");
    call_two();
}

function two() {
    console.log("Step 2");
}

one(two);


/*
Step 1 completed , please call step 2
Step 2
*/