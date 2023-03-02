//TODO

import { CipherRightShift } from "./CipherRightShift";
import { displayCipherDecipher } from "./displayCipherDecipher";
import { CipherLeftShift } from "./CipherLeftShift";

//module for testing
const rightShiftCipher:CipherRightShift=new CipherRightShift(2);
displayCipherDecipher(rightShiftCipher,"aaa");
const leftShiftcipher: CipherLeftShift=new CipherLeftShift(1);
displayCipherDecipher(leftShiftcipher,"ccc");

