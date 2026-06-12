import { sign, verify, type SignOptions } from "jsonwebtoken";

export function encryptData(
  data: string | Buffer<ArrayBufferLike> | Object,
  secret: string,
  options?: SignOptions,
): string {
  return sign(data, secret, options);
}

export function decryptData(token: string, secret: string): string | Object {
  return verify(token, secret);
}
