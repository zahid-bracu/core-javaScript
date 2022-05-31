let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Which toppings would you like?");
        }, 3000);
    });
};

async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    console.log(" D ");
    await toppings_choice();
    console.log(" E ");
    console.log(" F ");
}

kitchen();
console.log("cleaning dishes");
console.log("cleaning tables");
console.log("taking others order");



/*
A
B
C
D
doing dishes
cleaning tables
taking others order
Which toppings would you like?
E
F
*/