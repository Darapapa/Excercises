//=======================================> Simple If/else statements <==============================================================

// -----> 1.Create 2 variables, x and y. Each of them should have a different numeric value.<-----

// let x = 5;
// let y = 2;

// -----> 2.Write an if/else statement that checks which number is bigger.<-----

// let x = 5;
// let y = 3;

// if (x > y) {
//     console.log("x is bigger than y");
// } else {
//     console.log("y smaller than x");
// }

//=============================================> Exercise 2: Chihuahua <===========================================================

// -------> 1:Create a variable called newDog where it’s value is “Chihuahua”. <-------------------

//let newDog = ("Chihuahua");

// 2:Check and display how many letters are in newDog.

// let length = newDog.length;
// console.log(length);


//----> 3:Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice). <----

// console.log(newDog.toLocaleLowerCase());
// console.log(newDog.toLocaleUpperCase());

// -------> 4:Check if the variable newDog is equal to “Chihuahua” <-----------

// if (newDog = "Chihuahua") {
//     console.log("our new dog is a chihuahua");
// } else {
//     console.log("It's a Doberman");
// }

// ------> 5:if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’ <----------

// console.log("I love " + newDog + "it's my favorite dog breed");

// ------> 6:else, console.log ‘I dont care, I prefer cats’ <---------

// if (newDog != "Chihuahua") {
//     console.log("our new dog is a chihuahua");
// } else {
//     console.log("I love cat's anyway");
// }

// =================================================> EXCERCISE 3:EVEN OR ODD <======================================================

// -------------> 1.Prompt the user for a number and save it to a variable. <--------------

// let age = prompt("How old are you?");


// --------------> 2.Check whether the variable is even or odd. <------------------------
// 1.If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// 2.If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

// if (age % 2 == 0) {
//     alert("The number is even.");
// }
// else {
//     alert("The number is odd.");
// }

// ======================================================= Group Chat <===============================================================

// let userList = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]; --array
// if (userList.length === 0) { --if the userlist length is 0 
//     alert('No one is online')  ---comes to this alert if the value of the length is 0
// } else if (userList.length === 1 || userList.length === 2) {
//     alert(userList + " Is Online") cames as 2 
// } else if (userList.length > 2) { if the user list length bigger than 2 then it will come back as true
//     alert (userList[0, 2] + " and 2 others are Online") with the [0, 2] position of nanes in the array
// }