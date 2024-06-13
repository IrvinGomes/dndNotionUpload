export const getAllKeys = (obj: any, prefix = '') => {
    let keys: any = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            keys.push(newKey);
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                keys = keys.concat(getAllKeys(obj[key], newKey));
            }
        }
    }
    return keys;
}

export const CreateDBProperties = (object: any) => {
    if (object.Name.includes("Ancient Red Dragon")) {
        console.log(object.Name)
        console.log(object)
        console.log(object.Actions)
        console.log(object.Actions.length)
    }
}