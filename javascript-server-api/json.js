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
 
  var json=JSON.stringify(obj);
  console.log(json);
 
 
  var newObj=JSON.parse(json);
  console.log(newObj);

  