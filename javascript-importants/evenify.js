function evenify(num){
    if(num%2!=0){
        num=num*2;
    }else{
        return num;
    }
    return num;
}

var array=[];
var arr=[11,22,33,44,55,66,77,88,99,110];
for(var i=0;i<arr.length;i++){
    var value=evenify(arr[i]);
    array.push(value);
}

console.log(array);

