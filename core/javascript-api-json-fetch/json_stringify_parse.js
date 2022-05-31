var obj={
    id:420,
    name:"Zahid",
    lang:{
      main:"Java",
      web:"Java-Script",
      development:"Python"
    },
    course:[110,111,220,221],
    courseName:['OS','Networking','Fortan','Data-Science']
  }
 
  console.log(obj);
 
  // stringify -- to send data to server we need to stringify it
  var json=JSON.stringify(obj);
  console.log(json);
 
//  parse -- data loads from server -- now need to parse it into Object . so we use parse
  var newObj=JSON.parse(json);
  console.log(newObj);

  