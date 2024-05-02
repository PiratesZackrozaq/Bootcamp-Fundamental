let age = 15;

if (age >= 17) {
    console.log('ID card created!')
} else {
    console.log("ID card not created! Age problem!")
}

let grade = "A";

if (grade == "A") {
    console.log('Excellent!')
} else if (grade === "B") {
    console.log("Mid!")
} else if (grade === "C"){
    console.log("Bad")
} else {
    console.log("Grade problem!")
}

let now = new Date();
let day = now.getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Saturday");
} 

let str 
