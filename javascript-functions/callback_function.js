function check(value){
    console.log("The Value is "+value);
}


// the call back function takes value and function as parar
function callBack(num,func){
    func(num);
}

callBack(420,check);