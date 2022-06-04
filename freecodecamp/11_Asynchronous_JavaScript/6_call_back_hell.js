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