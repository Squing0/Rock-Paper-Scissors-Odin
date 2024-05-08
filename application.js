// function add7(num){
//     return num + 7;
// }
// function multiply(num1, num2){
//     return num1 * num2;
// }
// function capitalize(message){
//     message = message.toLowerCase();
//     message = message[0].toUpperCase() + message.slice(1);
//     return message;
// }
// function lastLetter(message){
//     return message.charAt(-1);
// }
// console.log(lastLetter("abcd"))

let answer = parseInt(prompt("Enter number:"));

for(let i = 1; i < answer; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        continue;
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else{
        console.log(i);
    }
10}