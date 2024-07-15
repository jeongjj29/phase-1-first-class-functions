function receivesAFunction(fcn) {
    return fcn();
}

function returnsANamedFunction(fcn) {
    return function fcn() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}