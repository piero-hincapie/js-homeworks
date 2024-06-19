function padString(yourString, characterToAdd, newStringLength, addToStart) {
    const numberOfCharactersToAdd = newStringLength - yourString.length;
    if (numberOfCharactersToAdd <= 0) {
        return yourString
    }
    const repeatCount = Math.ceil(numberOfCharactersToAdd / characterToAdd.length);
    let stringToAdd = characterToAdd.repeat(repeatCount).slice(0, numberOfCharactersToAdd);
    // if addToStart is true, prepend stringToAdd to yourString; otherwise, append stringToAdd to yourString
    return addToStart ? stringToAdd + yourString : yourString + stringToAdd;

}

console.log(padString("Originals", "*", 8, false)) // returns original string - Originals
console.log(padString("Origin", "*", 8, false)) // returns Origin**
console.log(padString("Origin", "*", 8, true)) // returns **Origin
console.log(padString("Origin", "aoaoao", 8, true)) // returns aoOrigin
console.log(padString("", "aoaoao", 8, true)) // returns aoaoaoao