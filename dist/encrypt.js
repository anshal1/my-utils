import { sign, verify } from "jsonwebtoken";
export function encryptData(data, secret, options) {
    return sign(data, secret, options);
}
export function decryptData(token, secret) {
    return verify(token, secret);
}
//# sourceMappingURL=encrypt.js.map