var arr=[11,22,33,44,55,66,77,88];

for(var i=0;i<arr.length;i++){
    
    if(arr[i]>50 && arr[i]<70){
        console.log("Skipped")
        continue;
    }
    console.log(arr[i]);
}