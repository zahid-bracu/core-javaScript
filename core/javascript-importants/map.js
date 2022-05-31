// array 1
var arr=[11,22,33,44,55];


// always takes three param--> value , index & the whole array
arr.map(function(value,index,array){
    console.log(index+" : "+value);
})


//array 2
var arr=[11,22,33,44,55];

var res=arr.map((value,index,array)=>{
    return value*10;
})
console.log(res);

// array of object

var arrayObject=[
    {
        id:1,
        name:"Zahid"
    },
    {
        id:2,
        name:"Tawhid"
    },
    {
        id:3,
        name:"BajLu"
    },
    {
        id:4,
        name:"KisLu"
    }
]


arrayObject.map(key => {
    console.log(key.id+" : "+key.name);
})


let newObject=arrayObject.map((key,indexs)=>{
    return key.name;
})

console.log(newObject);