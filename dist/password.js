import { hashSync, genSaltSync, compareSync } from "bcrypt";
export async function hashPassword(password) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
}
export async function comparePassword(password, hashedPassword) {
    return compareSync(password, hashedPassword);
}
//# sourceMappingURL=password.js.map