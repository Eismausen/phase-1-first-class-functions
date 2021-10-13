function receivesAFunction(cbFunc) {
    cbFunc();
}

function returnsANamedFunction() {
    return function aNamedFunction () {
        console.log("Well, it's named.");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This function has got no name at all.");
    }
}