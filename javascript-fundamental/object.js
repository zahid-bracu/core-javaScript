// declare object
var object={
    id:421,
    name:"zahid",
    campus:"Bracu"
}

// access object value 
console.log(object.id); //access one
console.log(object['name']); // access two
var school="campus";
console.log(object[school]); // access three


// change object value one
object.id=15101122; 
console.log(object); //object

// change object value two
object['campus']="cpscm";
console.log(object);

var fname="name";
object[fname]="Rahman"
console.log(object); // access three