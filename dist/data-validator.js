export function checkIfFieldIsEmptyInAobject(obj, optionalFields = [], customErrorMessage) {
    for (const key in obj) {
        if (optionalFields.includes(key)) {
            continue;
        }
        if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
            if (customErrorMessage) {
                const message = customErrorMessage.replaceAll("key", key);
                return message;
            }
            return `${key} is empty`;
        }
    }
    return "";
}
//# sourceMappingURL=data-validator.js.map