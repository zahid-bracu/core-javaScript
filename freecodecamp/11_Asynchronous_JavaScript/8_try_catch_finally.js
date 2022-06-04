async function order() {
    try {
        await func;
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Runs anyway");
    }
}
order()
    .then(() => {
        console.log("An error occured");
    })
    .catch((error) => {
        console.log(" the error occured : " + error);
    })
    .finally(() => {
        console.log("Ends here");
    })


/*
there is an error
ReferenceError: func is not defined
    at order (/tmp/SfRVfxoorD.js:3:9)
    at Object.<anonymous> (/tmp/SfRVfxoorD.js:11:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
Runs anyway
*/