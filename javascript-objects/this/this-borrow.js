const objects={
    id:15101122,
    getInfo:function(){
        console.log(this.id);
         
    }
}

console.log(objects);

// another object
const objectsTwo={
    id:14304054
}

// borrowing the function
objectsTwo.getInfo=objects.getInfo;
 
objectsTwo.getInfo();