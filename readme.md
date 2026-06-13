# List of functions

### password.ts
1. **hashpassword**
*Takes a plain text password and returns a hashed version using bcrypt.*

# *Example*
```typescript
import { hashPassword } from "./password";
const hashed = hashPassword("plain-password");
console.log(hashed); // hashed password
```

2. **comparepassword**
*Takes a plain text password and a hashed version, returns true if they match.*

# *Example*
```typescript
import { comparePassword } from "./password";
const result = comparePassword("plain-password", hashedPassword);
console.log(result); // true or false
```

### encrypt.ts
1. **encryptData**
*Takes a data of type string | Buffer<ArrayBufferLike> | Object, a secret key, and jsonwebtoken signoptions(optional). Returns an encrypted token.*
# *Example*
```typescript
interface SignOptions {
    /**
     * Signature algorithm. Could be one of these values :
     * - HS256:    HMAC using SHA-256 hash algorithm (default)
     * - HS384:    HMAC using SHA-384 hash algorithm
     * - HS512:    HMAC using SHA-512 hash algorithm
     * - RS256:    RSASSA using SHA-256 hash algorithm
     * - RS384:    RSASSA using SHA-384 hash algorithm
     * - RS512:    RSASSA using SHA-512 hash algorithm
     * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
     * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
     * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
     * - none:     No digital signature or MAC value included
     */
    algorithm?: Algorithm | undefined;
    keyid?: string | undefined;
    expiresIn?: StringValue | number;
    notBefore?: StringValue | number | undefined;
    audience?: string | string[] | undefined;
    subject?: string | undefined;
    issuer?: string | undefined;
    jwtid?: string | undefined;
    mutatePayload?: boolean | undefined;
    noTimestamp?: boolean | undefined;
    header?: JwtHeader | undefined;
    encoding?: string | undefined;
    allowInsecureKeySizes?: boolean | undefined;
    allowInvalidAsymmetricKeyTypes?: boolean | undefined;
}
import { encryptData } from "./encrypt";
const options: SignOptions = {};
const data = "plain-text"
const secretKey = "sdhjfweiuhf98732jkdhf"
const encrypted = encryptData(data, secretKey, options);
console.log(encrypted); // encrypted token
```

2. **decryptData**
*Takes an encrypted token, a secret key. Returns the decrypted data.*

```typescript
import { decryptData } from "./decrypt";
const secretKey = "sdhjfweiuhf98732jkdhf"
const data = "plain-text"
const encrypted = encryptData(data, secretKey, options);
const decrypted = decryptData(encrypted, secretKey);
console.log(decrypted); // decrypted data
```

### data-validator.ts
1. **checkIfFieldIsEmptyInAobject**
*Takes an object, an optional array of fields to ignore, and an optional custom error message. Returns an error message if any required field is empty, or an empty string if all fields are present.*

Note: The custom error message supports the `key` placeholder, which will be replaced with the name of the empty field.

# *Example*
```typescript
const obj = {
  name: "",
  email: "",
  password: ""
}
const error = checkIfFieldIsEmptyInAobject(obj, ["name"], "Please provide your key");

// The key placeholder will be replaced with the name of the empty field
// In this case, the empty field is "name", "email", and "password" but the "name" field is ignored because it is an optional field
console.log(error); // "Please provide your email"
console.log(error); // "Please provide your password"
```
