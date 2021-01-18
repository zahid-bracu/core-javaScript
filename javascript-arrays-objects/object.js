// declare object
var object={
    id:421,
    name:"zahid",
    campus:"Bracu"
}

// access object property value 
console.log(object.id); //access one
console.log(object['name']); // access two
var school="campus";
console.log(object[school]); // access three


// change object value set one
object.id=15101122; 
console.log(object); //object

// change object value set two
object['campus']="cpscm";
console.log(object);

// object value set three
var fname="name";
object[fname]="Rahman"
console.log(object);