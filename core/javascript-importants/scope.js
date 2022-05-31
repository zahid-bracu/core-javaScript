// scope
function check(){
    var num=23;
    console.log(num);
    if(num>19){
        var mode="good"; // var use to hoist a variable inside a function
        console.log(mode);
    }
    console.log(mode); // accessible using var
}
check();
 

console.log(name); //undefined as var
var name="Spooky"; // property name is hoisted--> but not the value is hoisted


console.log(id); //error as let
let id=420; 