

let order = (call_production) => {
    console.log("Order Placed , Please call production");
    call_production();
};
let production = () => {
    console.log("Order received , starting production");
}
order(production);

/*
Order Placed , Please call production
Order received , starting production
*/