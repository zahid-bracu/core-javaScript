async function greet(){
    return "Hello Zahid";
}

const message=greet();
message.then(data=>{
    console.log(data);
})