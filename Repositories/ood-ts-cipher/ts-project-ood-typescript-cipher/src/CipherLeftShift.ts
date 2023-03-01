import { CipherImpl } from "./CipherDecipher";
export class CipherLeftShift extends CipherImpl {
    constructor(shift:number){
        super(CipherImpl.arguments,shift)
    }
    cipher(plainText: string): string {
        return super.decipher(super.text)
    }
    decipher(cipherText: string): string {
        return super.cipher(super.text)
    }
    //TODO
    //deciphering right shift ' ' + shift
    //ciphering left shift '~' - shift
}