let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Shop is closed"));
        }
    })
}
order(2000, () => console.log(`${stocks.Fruits[0]}`))
    .then(() => {
        return order(0000, () => console.log("Production has started"));
    })
    .then(() => {
        return order(2000, () => console.log("Fruit has been cut"));
    })
    .then(() => {
        return order(1000, () => console.log("Adding water and  ice"));
    })
    .then(() => {
        return order(1000, () => console.log("Machine Has been started"));
    })
    .then(() => {
        return order(2000, () => console.log("Container has been selected"));
    })
    .then(() => {
        return order(3000, () => console.log("Toppings have been selected"));
    })
    .then(() => {
        return order(2000, () => console.log("Ice cream has been served"));
    })
    .catch(() => {
        console.log("Customer Left");
    })
    .finally(() => {
        console.log("Finally day ended. Shop has been closed");
    })