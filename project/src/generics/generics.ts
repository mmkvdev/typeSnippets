// GENERICS

export const addUID = <T extends { name: string }>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

