/*
This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain

*/



function order() {
    setTimeout(() => {
        console.log("Order has been placed");
        setTimeout(() => {
            production();
            setTimeout(() => {
                console.log("Fruit is being cut");
                setTimeout(() => {
                    console.log("Water & Ice has been added");
                    setTimeout(() => {
                        console.log("Machine has been started");
                        setTimeout(() => {
                            console.log("Container has been selected");
                            setTimeout(() => {
                                console.log("Toppings has been added");
                                setTimeout(() => {
                                    console.log("Ice cream has  been served");
                                }, 2000)
                            }, 3000)
                        }, 2000)
                    }, 1000)
                }, 1000)
            }, 2000)
        }, 0000)
    }, 2000)
}


function production() {
    console.log("Production has been started");
}

order(production);


/*
Order has been placed
Production has been started
Fruit is being cut
Water & Ice has been added
Machine has been started
Container has been selected
Toppings has been added
Ice cream has  been served
*/