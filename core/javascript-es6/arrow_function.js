// Arrow Function Example 1
var func= x=> x*x;
var res=func(10)
console.log(res);

// Arrow Function Example 2
var func= x=> {
  x--;
  x+=10
  return x
};
var res=func(10)
console.log(res);

// Arrow Function Example 3
var func= (x,y)=> {
  x+=y;
  x+=10;
  return x
};
var res=func(10,5)
console.log(res);

// Arrow Function Example 4
var func = () => 10;
var res=func();
console.log(res);
