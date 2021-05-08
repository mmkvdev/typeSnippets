// function signatures => general structure of a function, params it's gonna take and data type of the return variable.
var functionSignatures;
var functionMathSignatures;
var functionObjSignatures;
functionSignatures = function (op, num) {
    console.log(num + " is called for doing the following " + op);
};
functionMathSignatures = function (numA, numB, op) {
    if (op === 'add') {
        return numA + numB;
    }
    else {
        return numA - numB;
    }
};
functionObjSignatures = function (func) {
    console.log(func.name + " is " + func.op);
};
//# sourceMappingURL=function-signatures.js.map