// array
// square bracket
//array of string
// 3 elemnts
// position elemnts ----index
// index start 0
let animals = ["lion", "tiger", "dolphin", "monkey", "cat"];

//array of number
// 6 elemnts
let primary = [7, 8, 9, 10, 11, 12];
// 5 elemnts
let secondary = [13, 14, 15, 16, 17];

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals.length);

// i love lion
// i love tiger
// i love dolphin

for (index = 0; index < animals.length; index++) {
  console.log(`i love ${animals[index]}`);
}

// array method
//.push()
//.sort()
// .join()
