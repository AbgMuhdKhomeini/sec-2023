const fs = require("fs");
const path = require("path");

const outcomeNotes = "This is an outcome note";

// fs.writeFile("../outcome/outcome.txt", outcomeNotes, function (err) {
//   if (err) {
//     console.log("error occured");
//   } else {
//     console.log("Saved");
//   }
// });

// fs.readFile("../outcome/outcome.txt", "UTF8", function (err, data) {
//   if (err) {
//     console.log("error occured");
//   } else {
//     console.log(data);
//   }
// });

// Important
console.log(__dirname);
// console.log(__filename);
const outcomePath = path.join(__dirname, "../outcome/outcome.txt");
const pdfPath = path.join(__dirname, "../outcome/hello.pdf");
console.log(outcomePath);

// fs.readFile(outcomePath, "UTF8", function (err, data) {
//   if (err) {
//     console.log("error occured");
//   } else {
//     console.log(data);
//   }
// });

const outcomeFileExtension = path.extname(outcomePath);
const pdfFileExtension = path.extname(pdfPath);

const files = [outcomeFileExtension, pdfFileExtension];

for (let i = 0; i < files.length; i++) {
  if (files[i] === ".txt") {
    console.log(i, " ", "This is a text file");
  } else {
    console.log(i, " ", "This is not text file");
  }
}

console.log(outcomeFileExtension);
console.log(pdfFileExtension);
