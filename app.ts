
function shiftCipher(str: string, shift: number = 1): string {
    str = str.toLowerCase();
    let res: string = "";
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(i);
        if (digit >= 97 && digit <= 122) {
            let symb = String.fromCharCode(((digit - 97 + shift) % 26) + 97);
            res += symb;
        }
    }
    return res;
}
let inputShift = [26, 27, 1000, 5];
["abz", "abz", "abz", "123=-ASnKb"].forEach((elem, ind) => {
    console.log(`these letters ${elem} shift to the right by ${inputShift[ind]}, Result =  ${shiftCipher(elem, inputShift[ind])}`)
})

console.log("==============================================");

function shiftDecipher(str: string, shift: number = 1): string {
    str = str.toLowerCase();
    if (shift > 26) {
        shift %= 26;
    }
    let res: string = "";
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(i);
        if (digit >= 97 && digit <= 123) {
            let symb = String.fromCharCode(((digit - 97 - shift + 26) % 26) + 97);
            res += symb;
        }
    }
    return res;
}
let inpShift = [3, 27, 1000, 6];
["dec", "bca", "mnl", "123=-ASnKb"].forEach((elem, ind) => {
    console.log(`these letters ${elem} shift to the left by ${inpShift[ind]}, Result =  ${shiftDecipher(elem, inpShift[ind])}`)
})
