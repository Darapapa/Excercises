// -----> Excercise 1 Day 2<---------

//Write some simple Javascript code that will join all the items in the array above, and console.log the result.

// let what = ["whatever", "whomever", "Whenever"];
// 7console.log(what);


// ------> Excercise 2 Day2<---------


// let favorite = "valamit "; --->defined favorite variable with the value of Valamit
// let meal = "launch ";    ------>defined the meal variable with the value of launch
// let color = "i eat " + favorite + "at every " + meal; --->i defined the color variable with the text + valamit and launch values

// console.log(color); --->i displayed the color variable value

// -----------> Excerise 3 (XP Gold) <----------


//let sentence = ["my","favorite","color","is","blue"];
//Write some simple Javascript code that will join all the items in the array above, and console.log the result.


// let sentence = ["my", "favorite", "color", "is", "blue"]; ---> i defined an array variable with the values
// console.log(sentence); ---->i displayed the array values in the console log


//-------------> Exercise 4 Mix up <-------------

// Instructions : Create 2 variables. The values should be strings. For example:

// let str = "Hello Everyone"; ---->I defined a string variable with the value of Hello Everyone
// let str2 = "Welcome on my page"; ----> I defined a string variable with the value of Welcome on my page

// console.log(str + str2); ----> i displayed on the console the value of the str + str2 strings

// ------------> Excercise 5 Slice <------------

//Slice out and swap the first 2 characters of the two strings from part 1.

// let str = "Hello Everyone"; //---->I defined a string variable with the value of Hello Everyone
// let str2 = "Welcome on my page"; ///----->Defined the str2 variable with the value of Welcome....
// let str3 = str.slice(0, 2); ///---->I sliced down the first 2 letter of str 
//let str4 = str2.slice(0, 2); ///---> Sliced down the first 2 letter of str2
//let str5 = str.slice(2, 14); ///----> sliced down letters starting from the third letter till the end of text
//let str6 = str2.slice(2, 14); ///----->sliced down letters starting from the third letter till the end of text

//console.log(str4, str5); //---->I i swapped the first 2 letter by dysplaying the sliced pieces as one
//console.log(str3, str6); //-----> i swapped the first 2 letter by dysplaying the sliced pieces as one


//--------------> Excercise 6 <--------------------

// Create a third variable where the value is the concatenation 
// of the two strings from the part 1 (separated by a space).

//couldn't solved it and it's probaly somet stupid mistake that i will ead myself about it



//let birth = "1996"; -->define birth variable with the value of 1996
//let future = "2030"; -->define future variable with the value of 2030
//let age = future - birth;
//[20:30]
//console.log('I will be' + age)


//--------->Excercise 6 Calculator <------------


//couldn't solve it
//let first = propmt("Please Enter the first number");
//let second = prompt("please enter the second number you want to add");
//let res = Number(first) + Number(second);
//alert(res);

//------------------>Exercise 7 <-----------------

// Using this array : let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1:Remove Banana from the array:

// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(fruits.splice(0, 1, )) // < --I removed the first(0) index of the array

//2:Sort the array in alphabetical order.


// fruits.sort(function(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
//     return 0;
// });

//3:Add “Kiwi” to the end of the array.

//fruits.push("Kiwi");

//fruits.sort(function(a, b) {
// if (a < b) {
//    //     return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
//     return 0;
// //});

//4:Remove “Apples” from the array. Don’t use the same method as in part 1.

//fruits.shift(0);

//5:Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])

// fruits.reverse();

//5:Using this array :

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log("Oranges")

//Access and then console.log “Oranges”.