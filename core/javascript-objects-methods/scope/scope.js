var result=3.00;

function test(){
    window.name="Zahid"; // can be accessed from windows browser console panel
    place="BRACU" // can be accessed from outside
    console.log("Name : "+name) // this line will be printed as it is in local scope
    console.log("Grade : "+result); //accessing global variable
}

test();

console.log(name);