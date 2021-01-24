var arr=[11,22,33,44,55];

var res=arr.filter((value,index,arr)=>{
    return value>22;
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
var res=arrayObject.filter(key => {
    return key.id>2;
})

console.log(res);