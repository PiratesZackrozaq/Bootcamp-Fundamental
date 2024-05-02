//Write Celcius To Farenheit
//fahrenheit = (celsius * 9 / 5) + 32;
//celcius gini aja bisa
let celcius = 60;

if (celcius >= 60) {
    console.log('140 Farenheit')
} else {
    console.log("60 Celcius")
}

//check if the number is odd or even
//check if the number is even
function isEven (number) {
    return number % 2 === 0;
  }
  
  //check if the number is odd
  function isOdd (number) {
    return number % 2 !== 0;
  }
  
  //test
  console.log(isEven(5)); //false
  console.log(isOdd(5));  //true