type MapperFunc = (symb: string, shift: number) => string;

export class CipherDecipher {
    private amountCiphered: number;
    constructor(
        private leastAscii: number,
        private mostAscii: number,
        private shift: number) {
        this.amountCiphered = mostAscii - leastAscii + 1;
        // this.cipher();
    }
    cipher(str: string): string {
        return this.cipherDecipher(str, this.mapperCipher);
    }

    decipher(str: string): string {
        return this.cipherDecipher(str, this.mapperDecipher);
    }

    cipherDecipher(str: string, mapperFun: MapperFunc): string {
        const arrStr: Array<string> = Array.from(str)
        const arrRes: Array<string> = arrStr.map(sym => {
            let res: string = sym;
            if (sym <= 'z' && sym >= 'a') {
                res = mapperFun(sym, this.shift);
            }
            return res;
        })
        return arrRes.join('');
    }

    mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.leastAscii + this.shift) % this.amountCiphered;
        return String.fromCharCode(this.leastAscii + actualShift);
    }

    mapperDecipher(symb: string): string {
        const actualShift: number = (this.mostAscii - symb.charCodeAt(0) + this.shift) % this.amountCiphered;
        return String.fromCharCode(this.mostAscii - actualShift);
    }

}