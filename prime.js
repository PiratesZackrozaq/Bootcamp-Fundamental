//write code to check prime number
// 2,3,5.. 2 pembagi habis

let number = 7;
let divide = 0;

for (let index = 0; index <= number; index++) {
    if (number % index === 0) {
        divide++;
    }
    
}

console.log(divide == 2 ? "Prime" : "Not Prime");