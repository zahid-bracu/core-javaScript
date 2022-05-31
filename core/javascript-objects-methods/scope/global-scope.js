
var result=3.00;

function test(){
    name="Zahid";
    console.log("Name : "+name) // this line will be printed as it is in local scope
    console.log("Grade : "+result); //accessing global variable
}


//console.log(name); //this line won't be printed before the function call
test();
console.log(name); // this line will be printed after the function call