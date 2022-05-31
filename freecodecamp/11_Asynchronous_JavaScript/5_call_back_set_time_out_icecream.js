let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production();
    }, 2000)

};
let production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("Food Has Been Chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("Machine has been started");
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} is taken and icecream has added`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} is selected as toppings`);
                            setTimeout(() => {
                                console.log("Icecream has been served");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 2000)
            }, 1000)
        }, 2000)
    }, 1000)
}
order(3, production);


/*
apple was selected
Production has started
Food Has Been Chopped
water and ice was added
Machine has been started
cone is taken and icecream has added
chocolate is selected as toppings
Icecream has been served
*/