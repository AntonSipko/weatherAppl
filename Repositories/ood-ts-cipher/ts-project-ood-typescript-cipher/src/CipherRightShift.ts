import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {
    constructor(shift:number){
        super(,shift)
    }
    cipher(plainText: string): string {
        return super.cipher(super.text)
    }
    decipher(cipherText: string): string {
        return super.decipher(super.text)
    }

    //TODO
    //ciphering right shift ' ' + shift
    //deciphering left shift '~' - shift
}