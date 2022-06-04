var message = "Hello from the Real Word";

function testFunc() {
    var message = "Hello from the Upside Down";
    return message;
}
console.log(testFunc()); //Hello from the Upside Down
console.log(message); //Hello from the Real Word