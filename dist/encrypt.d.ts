import { type SignOptions } from "jsonwebtoken";
export declare function encryptData(data: string | Buffer<ArrayBufferLike> | Object, secret: string, options?: SignOptions): string;
export declare function decryptData(token: string, secret: string): string | Object;
//# sourceMappingURL=encrypt.d.ts.map