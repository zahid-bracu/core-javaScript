var object={
    a:7,
    b:2,
    c:4,
    d:5,
    e:6
};


const {a,b,...rest}=object;
console.log(a);
console.log(b);
console.log(rest);