// helloWorld functions
function helloWorld() {
    return "Hello, World!"
}
//sayHello function
function sayHello(name){
    if (typeof(name) === "boolean") {
        return "Hello, World!"
    } else {
        return "Hello, "  +  name + "!"
    }
}
//isFive function
function isFive(input) {
    if (input === 5 || input === "5") {
        return true;
    } else {
        return false;
    }
}
//isEven function
function isEven(input) {
        if (input === true || input === false || input === "") {
                return false;
        } else if (input % 2 === 0) {
                return true;
        } else if (input % 2 !== 0) {
                return false;
        }
}
//isVowel function
function isVowel(x) {
    var vowels='aeiouAEIOU';
    if (vowels.indexOf(x) !== -1) {
        return true;
    } else {
        return false;
    }
}
//add function
function add(x, y) {
        if (isNaN(parseInt(x)) || isNaN(parseInt(y))) {
                return "NaN";
        } else {
                return parseInt(x) + parseInt(y);
        }
}
console.log(add("banana","split"));
console.log(add(2,"apples"));
console.log(add());