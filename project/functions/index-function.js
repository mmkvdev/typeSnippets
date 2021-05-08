// functions
var indexFunction = function () {
    console.log('index function');
};
// indexFunction = 'hello'; // invalid
var explicitFunction;
explicitFunction = function () {
    console.log('explicit function');
};
// returns void if we don't specifically return anything
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log('sum: ', a + b, c);
};
add(1, 2, 20 || '20');
var minus = function (a, b) {
    return a > b ? a - b : b - a;
};
var res = minus(5, 10);
// res = 'type script'; => invalid
//# sourceMappingURL=index-function.js.map