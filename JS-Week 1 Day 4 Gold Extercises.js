//---------------> Exercise 1: The World Translator <---------------------
// Instructions

// 1.Ask the user which language they speak.

// let language = prompt("what language do you speak?");


// 2.Convert the user’ s answer to lowercase, so that all the user’ s inputs will be accepted in the
// if statement.For example“ english” or“ English” or“ ENGlish” ect…”

// let low = language.toLocaleLowerCase();

// 3.Create a few conditions:
//     If the user speaks French: display“ Bonjour”
// If the user speaks English: display“ Hello”
// If the user speaks Hebrew: display“ Shalom”
// If the user doesn’ t speak any of these 3 languages: display‘ 01110011 01101111 01110010 01110010 01111001’

// switch (low) {
//     case "French":
//         alert("Bonjour");
//         break;
//     case "English":
//         alert(" Hello");
//         break;
//     case "Hebrew":
//         alert("Shalom")
//         break;
//     default:
//         alert("011100111100 0011 000111 101010 0111 0101010110100101");
// }

//----------------> Exercise 2 : The Grade Assigner <------------------------

// Instructions
// Ask the user for their grade.

// let grade = prompt("what grade did you get?");


// If the grade is bigger than 90, console.log “A”

// if (grade > 90) {
//     console.log("A");
// }

// If the grade is between 80 and 90 (included), console.log “B”

// if (grade >= 80 && grade <= 90) {
//     console.log("B");
// }
// If the grade is between 70(included) and 80 (included), console.log “C”

// if (grade >= 70 && grade <= 80) {
//     console.log("C");
// }
// If the grade is lower than 70, console.log “D”

// if (grade < 70) {
//     console.log("D");
// }

// ------------------------> Exercise 3 : Verbing  Couldn't solve it <-----------------------------

// Instructions
// Prompt the user for a string. It must be a verb.

let verb = prompt("what you like to do the most?");

let ing = ("ing");
let ly = ("ly");

// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

if (verb.length >= 3) {
    if (verb.endsWith("ing") === false)
        alert(verb + ing);
    else(verb.length >= 3)
    if (verb.endsWith("ing") === true)
        alert(verb + ly)
}

if (verb.length < 3) {

    alert(verb);
}