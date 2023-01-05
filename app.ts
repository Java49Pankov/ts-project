for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
}
let a = 10;
console.log(`a = ${a}`);

/*-----------variables----------*/

const hello = "world";
// hello = "ggggg"; // error: const not change

let hi = "world";
// hi = 10; // error: hi this type string not number;
hi = "vasya";

let b; // let b it's any type
b = 10;
b = "abs";

/*---------------------------- */
let c: string;
//c = 10; // error: c it's type string
c = "10";

function getRandomNumber(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}

//HW #30

function shiftCipher(str: string, shift: number = 1): string {
    //TODO
    //1.for each lower case letter (a-z) you should perform code ASCII on a given shift.
    //2.shift should be in cycleof lower case letter.
    //code ASCII 'z' + 2 = 'b' 
    //examples:
    //shiftCipher ("abz.", 3) => "dec."
    return "";
}

function shiftDecipfer(str: string, shift: number = -1): string {
    return "";
}

