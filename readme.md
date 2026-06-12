# List of functions

### password.ts
1. **hashpassword**
*Takes a plain text password and returns a hashed version using bcrypt.*
2. **comparepassword**
*Takes a plain text password and a hashed version, returns true if they match.*

### encrypt.ts
1. **encryptData**
*Takes a data of type string | Buffer<ArrayBufferLike> | Object, a secret key, and jsonwebtoken signoptions(optional). Returns an encrypted token.*
2. **decryptData**
*Takes an encrypted token, a secret key. Returns the decrypted data.*
