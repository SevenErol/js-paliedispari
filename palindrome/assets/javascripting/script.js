

function checkPalindrome(phrase) {

    // create string without spaces
    const string = phrase.replace(/\s/g, '');

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        return true
    }
    else {
        return false
    }
}

//take input
const phrase = prompt('Enter a string: ');

// check result
const result = checkPalindrome(phrase);

if (result) {
    console.log("It's a palindrome")
}else {
    console.log("It's not a palindrome")
}