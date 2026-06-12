import { hashSync, genSaltSync, compareSync } from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return compareSync(password, hashedPassword);
}
