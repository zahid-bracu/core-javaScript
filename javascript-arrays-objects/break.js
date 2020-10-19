var arr=[11,22,33,44,55,66,77,88];

for(var i=0;i<arr.length;i++){
    
    if(arr[i]>50){
        console.log("Let's Break")
        break;
    }
    console.log(arr[i]);
}