import { CipherImpl } from "./CipherDecipher";
export class CipherLeftShift extends CipherImpl {
    constructor(shift:number){
        super(shift,"left")
    }
   
    //TODO
    //deciphering right shift ' ' + shift
    //ciphering left shift '~' - shift
}