 
for(let j=0;j<=10;j++){
    console.log(j);
    // as ' j ' is let it will not work outside the for loop
}

console.log(j);


for(var i=0;i<=10;i++){
    console.log(i);
    //as i is var it will work outside the for loop
}

console.log(i);