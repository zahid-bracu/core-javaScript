var arr=[11,22,33,44,55];

var res=arr.find((value,index,arr)=>{
    return value>30;
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
var res=arrayObject.find(key => {
    return key.id>1;
})

console.log(res);