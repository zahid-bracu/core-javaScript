function test(){
    var num=0;
    return function check(){
        num++;
        return num;
    }
}


var func=test();
console.log(func());
console.log(func());
console.log(func());



var func1=test();
console.log(func1());
console.log(func1());
console.log(func1());