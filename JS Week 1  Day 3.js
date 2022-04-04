//------------> Excercise 1 <-------------

// let age = "18";
// let carkey = prompt("how old are you?");

// if (age === 18) {
//     console.log("Congratulations on your first year of driving. Enjoy the ride!")
// } else if (age > 18) {
//     console.log("Powering On. Enjoy the ride!")
// } else {
//     console.log("Sorry...You have to stay at home tonight")
// }

//-----------> Excercise 2 <---------------

// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' ); <----- this will be the resolution because it comes back as a true statement
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

//-----------> Excercise 3 <-------------------

// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

// let a = 2 + 2;

// switch (a) {
//     case 4:
//         alert('Right!'); // < -- - will be the resolution
//         break;

//     case 3: // (*) grouped two cases
//     case 5:
//         alert('Wrong!');
//         alert("Why don't you take a math class?");
//         break;

//     default:
//         alert('The result is strange. Really.');
// }

//------------> Excercise 4 <-----------------------

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// let login = {
//     username: "valaki",
//     password: "12345",
// }

//2. Create an array which contains the object you have made above and name the array "database".

// let database = Object.keys(login);

// 3. Create an array called "newsfeed"
// which contains 3 objects with properties "username" and "timeline".

// let object1 = {
//     username: "valaki",
//     timeline: "valahol",
// }

// let object2 = {
//     username: "valaki2",
//     timeline: "valahol2",
// }

// let object3 = {
//     username: "valaki3",
//     timeline: "valahol3",
// }

// let newsfeed = Object.keys(object1, object2, object3); <---not sure