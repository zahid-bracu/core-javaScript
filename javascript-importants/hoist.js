(function test(){
    if(true){
        var x=10; // will hoist
        const y=20; //not hoist
        let z=30; //not hoist

    }
    console.log("X : "+x);
    console.log("Y : "+y);
    console.log("Z : "+z);
}())