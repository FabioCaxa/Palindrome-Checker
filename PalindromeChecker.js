//Create a function that receives a string as an argument
function palindrome(str) {
    //Use the replace method to replace everything that is not an Alphanumeric digit globally, multi-lined, and case insensitive with nothing, so it cuts the strings
    //Converts all to lowercase using the toLowerCase method and assigns it to a new variable
    let newStr = str.replace(/[^a-z0-9]/gmi, '').toLowerCase();
    //Use the split method so every letter becomes an array, reverse it with the reverse method, and join to a string again with the join method
    let reverseStr = newStr.split("").reverse().join("");
    //Return a boolean value using the strict equality operator
    return newStr === reverseStr;
}

//Function calls
palindrome("eye");
palindrome("Subi no onibus");
palindrome("TeneT");
palindrome("an eye for an eye");