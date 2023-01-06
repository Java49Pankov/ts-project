"use strict";
function shiftCipher(str, shift = 1) {
    str = str.toLowerCase();
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(i);
        if (digit >= 97 && digit <= 122) {
            let symb = String.fromCharCode(((digit - 97 + shift) % 26) + 97);
            res += symb;
        }
    }
    return res;
}
console.log(shiftCipher("ab1-zFaGA123-", 3));
function shiftDecipher(str, shift = 1) {
    str = str.toLowerCase();
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(i);
        if (digit >= 97 && digit <= 123) {
            let symb = String.fromCharCode(((digit - 97 - shift + 26) % 26) + 97);
            res += symb;
        }
    }
    return res;
}
console.log(shiftDecipher("abz.", 3));
//# sourceMappingURL=app.js.map