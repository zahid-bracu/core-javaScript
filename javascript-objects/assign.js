const target={
    x:11,
    y:22
}

const source={
    a:10,
    b:20
}


const totalObject=Object.assign(target, source);
console.log(totalObject);
console.log(target);