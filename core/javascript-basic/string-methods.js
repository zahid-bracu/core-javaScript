// String declaration process
var nameOne='Zahid';
var nameTwo="Rahman";
var nameThree=`Tushi`;

console.log("My name is "+nameOne+" "+nameTwo+" "+nameThree);

// string to uppercase
var word="uppercase";
word=word.toLocaleUpperCase();
console.log(word)

// string to lowercase
var wordtwo="LOWERCASE";
wordtwo=wordtwo.toLocaleLowerCase();
console.log(wordtwo);

// Index of
var wordThree=" I will find the index number";
console.log(wordThree.indexOf("find"));


// Index of two
var country="Bangladesh";
console.log(country.indexOf("desh"));


// split
var message="This is my december. this is my snow-covered eyes";
var array=message.split(" ");
console.log(array);


// string length
var longMessage="Hello, I am standing on the bridge";
console.log(longMessage.length);


// string index
var randomMessage='SPEED';
console.log(randomMessage[3]);


// string index Immutability
var randomMessageTwo='SPEED';
randomMessage[1]='L' //will not work

