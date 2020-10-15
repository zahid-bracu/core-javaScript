function evenify_all(array){
    var newArray=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            newArray.push(array[i]*2);
        }else{
            newArray.push(array[i]*2);
        }
    }
    return newArray;
}

var arr=[11,22,33,44,55,66,77,88,99,110];

var newArr=evenify_all(arr);
console.log(newArr);
