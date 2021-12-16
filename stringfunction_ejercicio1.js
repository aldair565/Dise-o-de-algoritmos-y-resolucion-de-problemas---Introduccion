/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" 
 */

function checkEmptyString(str) {
    if(str){
    console.log(str.charAt(0));
    }else{
    console.log("This string is empty");
    }
}
// Example test, should return a
checkEmptyString("apple");