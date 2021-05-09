// GENERICS
export const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
//# sourceMappingURL=generics.js.map