const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLetters: number = zCodeAscii - aCodeAscii + 1;
//HW #29
function shiftRound(str: string, shift: number): string {
    //TODO
    //shift any positive number
    //adds "shift" to ASCII codes of lower case letters
    //if the shifted code will be greater than ASCII code 'z'
    // the code should be begun from ASCII code 'a'
    //source letter 'a' will be 'c' if "shift" == 2
    //source letter 'z' will be 'b' if shift ==2
    //example: shiftRound("aabx!", 4) => ("eefb!")

    return cipherDecipher(str, shift, mapperCipher);
}
function unshiftRound(str: string, shift: number): string {
    //subtracts "shift" from ASCII codes of lower case letters
    //if the shifted code will be less than ASCII code 'a'
    // the code should be begun from ASCII code 'z'
    //source letter 'c' will be 'a' if "shift" == 2
    //source letter 'b' will be 'z' if shift ==2
    //example: ushiftRound("eefb!", 4) => ("aabx!")
    return cipherDecipher(str, shift, mapperDecipher);
}
type MapperFunction = (symb: string, shift: number) => string;
function cipherDecipher(str: string, shift: number,
    mapperFun: MapperFunction): string {
       //const arStr: string[] = Array.from(str);
       const arStr: Array<string> = Array.from(str);
       const arRes: Array<string> = arStr.map(symb => {
           let res: string = symb;
           if (symb <= 'z' && symb >= 'a') {
               res = mapperFun(symb, shift);
           }
           return res;
       })
       return arRes.join('');
    }
    function mapperCipher(symb: string, shift: number) : string {
        const actualShift: number = 
        (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
        return String.fromCharCode(aCodeAscii + actualShift);
     }
     function mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
        return String.fromCharCode(zCodeAscii - actualShift);
     }