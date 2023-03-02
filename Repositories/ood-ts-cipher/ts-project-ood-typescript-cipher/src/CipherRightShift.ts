import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {
    constructor(shift:number){
        super(shift,"right")
    }
    

    //TODO
    //ciphering right shift ' ' + shift
    //deciphering left shift '~' - shift
}