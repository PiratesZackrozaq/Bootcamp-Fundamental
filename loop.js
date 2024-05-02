for (let i = 0; i <= 100; i++) {
    console.log("Hello For! " + i);
    
}

let i = 0;
while (i <= 10) {
    console.log("Hello While " + i);
    i++
}

let id = 5;

while (id < 5) {
    console.log("Hello While 2nd " + id);
    id++
}

do {
    console.log("Hello Do While " + id);
    id++
  }
while (i < 5);

for (let ic = 0; ic < 5; ic++) {
    if (ic == 3) continue
    console.log(ic)
}