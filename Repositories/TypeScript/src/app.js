"use strict";
function shiftRound(str, shift) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
            let charIndexAfterShift = letter.charCodeAt(0) + shift;
            if (charIndexAfterShift > 122) {
                letter = String.fromCharCode(charIndexAfterShift % 122 + 96);
            }
            else {
                letter = String.fromCharCode(charIndexAfterShift);
            }
        }
        newString += letter;
    }
    return newString;
}
console.log(shiftRound("z!", 1));
console.log(shiftRound("zzzz!", 16));
console.log(shiftRound("z!#$%a", 2));
function unShiftRound(str, shift) {
    if (shift > 25) {
        shift = shift % 25;
    }
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
            let charIndexAfterShift = letter.charCodeAt(0) - shift;
            if (charIndexAfterShift < 97) {
                letter = String.fromCharCode(122 - shift + 1);
            }
            else {
                letter = String.fromCharCode(charIndexAfterShift);
            }
        }
        newString += letter;
    }
    return newString;
}
console.log("**********************");
console.log(unShiftRound("z!", 1));
console.log(unShiftRound("a", 1));
console.log(unShiftRound("aaa!", 10));
console.log(unShiftRound("zzzz!", 101));
//# sourceMappingURL=app.js.map