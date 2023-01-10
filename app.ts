import { CipherDecipher } from "./CipherDecipher";

type TestObj = { str: string, shift: number }

const cipDecipher = new CipherDecipher(97, 122, 1);
console.log(cipDecipher.cipher("abc"))
