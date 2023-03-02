const firstSymCodeAscii: number = ' '.charCodeAt(0);
const lastSymCodeAscii: number = '~'.charCodeAt(0);
const usableSymbols: number = lastSymCodeAscii - firstSymCodeAscii + 1;
import { Cipher } from "./Cipher";
export class CipherImpl implements Cipher {
    side: string;
    shift: number;
    //TODO
    protected constructor(shift: number,side:string="left"||"right") {
        this.side=side;
        this.shift=shift;
    }
    cipher(plainText: string): string {
        //TODO
        const arStr: Array<string> = Array.from(plainText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
                if(this.side=="right"){
                    res = this.mapperCipher(symb,this.shift);

                }else{
                    res = this.mapperDecipher(symb,this.shift);
                }
            }
            return res;
        })
        return arRes.join('');

    }
    
    mapperCipher(symb: string, shift: number): string {
        const actualShift: number =
            (symb.charCodeAt(0) - firstSymCodeAscii + shift) % usableSymbols;
        return String.fromCharCode(firstSymCodeAscii + actualShift);
    }


    decipher(cipherText: string): string {
        //TODO
        const arStr: Array<string> = Array.from(cipherText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
                if(this.side=="right"){
                    res = this.mapperDecipher(symb, this.shift);
                }else{
                    res = this.mapperCipher(symb, this.shift);
                }
            }
            return res;
        })
        return arRes.join('');

    }
    mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (lastSymCodeAscii - symb.charCodeAt(0) + shift) % usableSymbols;
        return String.fromCharCode(lastSymCodeAscii - actualShift);
    }

}

