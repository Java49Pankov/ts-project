"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
const cipherDecipher = new CipherDecipher_1.CipherDecipher(97, 122, 3);
console.log("***********Cipher********************");
["abz", "abc", "dec", "123=-ASnKb"].forEach((elem) => {
    console.log(`Value "${elem}" shift to the right with result =  ${cipherDecipher.cipher(elem)}`);
});
console.log("***********Decipher********************");
["dec", "def", "ghf", "123=-ASqKe"].forEach((elem) => {
    console.log(`Value "${elem}" shift to the left with result =  ${cipherDecipher.decipher(elem)}`);
});
//# sourceMappingURL=app.js.map