type MapperFunc = (symb: string) => string;

export class CipherDecipher {
    private amountCiphered: number;
    constructor(
        private leastAscii: number,
        private mostAscii: number,
        private shift: number) {
        this.amountCiphered = mostAscii - leastAscii + 1;
    }
    cipher(str: string): string {
        return this.cipherDecipher(str, this.mapperCipher);
    }

    decipher(str: string): string {
        return this.cipherDecipher(str, this.mapperDecipher);
    }

    private cipherDecipher(str: string, mapperFun: MapperFunc): string {
        const arrStr: Array<string> = Array.from(str)
        const arrRes: Array<string> = arrStr.map(sym => {
            let res: string = sym;
            if (sym.charCodeAt(0) <= this.mostAscii && sym.charCodeAt(0) >= this.leastAscii) {
                res = mapperFun.call(this, sym);
            }
            return res;
        })
        return arrRes.join('');
    }

    private mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.leastAscii + this.shift) % this.amountCiphered;
        return String.fromCharCode(this.leastAscii + actualShift);
    }

    private mapperDecipher(symb: string): string {
        const actualShift: number = (this.mostAscii - symb.charCodeAt(0) + this.shift) % this.amountCiphered;
        return String.fromCharCode(this.mostAscii - actualShift);
    }

}