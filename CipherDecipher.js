"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(leastAscii, mostAscii, shift) {
        this.leastAscii = leastAscii;
        this.mostAscii = mostAscii;
        this.shift = shift;
        this.amountCiphered = mostAscii - leastAscii + 1;
        // this.cipher();
    }
    cipher(str) {
        return this.cipherDecipher(str, this.mapperCipher);
    }
    decipher(str) {
        return this.cipherDecipher(str, this.mapperDecipher);
    }
    cipherDecipher(str, mapperFun) {
        const arrStr = Array.from(str);
        const arrRes = arrStr.map(sym => {
            let res = sym;
            if (sym <= 'z' && sym >= 'a') {
                res = mapperFun(sym, this.shift);
            }
            return res;
        });
        return arrRes.join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.leastAscii + this.shift) % this.amountCiphered;
        return String.fromCharCode(this.leastAscii + actualShift);
    }
    mapperDecipher(symb) {
        const actualShift = (this.mostAscii - symb.charCodeAt(0) + this.shift) % this.amountCiphered;
        return String.fromCharCode(this.mostAscii - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=CipherDecipher.js.map