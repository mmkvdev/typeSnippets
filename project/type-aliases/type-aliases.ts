// type aliases
type StringOrNum = string | number;
type objWithNum = { name: string, id: StringOrNum };

const userData = (id: StringOrNum, name: string) => {
    console.log(`${id} has an name of ${name}`);
}

const userConfigMapping = (user: objWithNum) => {
    console.log(`${user.name} has an id of: ${user.id}`);
}

const userConfigMappingExperiment = (user: objWithNum) => {
    console.log(`${user.name} has an id of: ${user.id}`);
}