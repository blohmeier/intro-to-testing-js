// helloWorld functions
// function helloWorld() {
//     return "Hello, World!"
// }
// const helloWorld = function() {
//     return "Hello, World!";
// }
//sayHello function
// function sayHello(name){
//     if (typeof(name) === boolean) {
//         return "Hello, World!"
//     } else {
//         return "Hello, "  +  name + "!"
//     }
// }
//isFive function
// function isFive(input) {
//     if (input === 5 || input === "5") {
//         return true;
//     } else {
//         return false;
//     }
// }
//isEven function
// function isEven(input) {
//     if (input === true || input === false || input === "") {
//         return false;
//     } else
//         if (input % 2 === 0 ) {
//             return true;
//         } else if (input % 2 !== 0) {
//             return false;
//         }
// }
//console.log(isEven(false));
//isVowel function
function isVowel(x) {
    var vowels='aeiouAEIOU';
    if (vowels.indexOf(x) !== -1) {
        return true;
    } else {
        return false;
    }
}

// Clipboard (DO NOT USE BELOW)
// sayHello("Jane");
// // function sayHello(name){
// //     return "Hello, "  +  name + "!"
// // }
// sayHello("Alex");
//function sayHello(name){
//     if (name === "Alex") {
//         return "Hello, Alex!"
//     } else if (name === "Pat") {
//         return "Hello, Pat!"
//     } else {
//         return "Hello, Jane!"
//     }
// }