let order = (time, work) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(work);
        }, time)
    })
}



async function testing() {
    console.log("first one");
    console.log("Second one");
    console.log("third one");
    await order(2000, () => {
        console.log("The spooky one");
    })
    console.log("fourth one");
    console.log("fifth one");
}


testing();
console.log("Outside the first one");
console.log("Outside the second one");