// normal sum
var array=[10,20,30,40,50,60]
var total=array.reduce((sum,num)=> {
    console.log(sum+":"+num);
    return sum+num
},0)
console.log(total);


// array of object
var arrayObject=[
    {id:1,produce:"NOKIA 5300",price:100},
    {id:2,produce:"SIEMENS C75",price:300},
    {id:3,produce:"Sony Xperia C3",price:200},
    {id:4,produce:"SIEMENS C25",price:500}
]

var totalPrice=arrayObject.reduce((sum,key)=>{
    console.log(sum+":"+key.price);
    sum=sum+key.price;
    return sum;
},0)

console.log(totalPrice);