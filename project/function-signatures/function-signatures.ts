// function signatures => general structure of a function, params it's gonna take and data type of the return variable.

let functionSignatures: (a: string, b: number) => void;
let functionMathSignatures: (a: number, b: number, c: string) => number;

type functionObjTypeAlias = { name: string, op: string };
let functionObjSignatures: (func: functionObjTypeAlias) => void;


functionSignatures = (op: string, num: number) => {
    console.log(`${num} is called for doing the following ${op}`);
}

functionMathSignatures = (numA: number, numB: number, op: string) => {
    if (op === 'add') {
        return numA + numB;
    } else {
        return numA - numB;
    }
}

functionObjSignatures = (func: functionObjTypeAlias) => {
    console.log(`${func.name} is ${func.op}`)
}