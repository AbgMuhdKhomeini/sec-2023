console.log("core.js is loaded");

const fs = require("fs");

// create note.txt file

// const note = "This file was create by node.js";

const notes = [
  {
    fileName: "khomeini.txt",
    content: "This file was created by khomeini",
  },
  {
    fileName: "arif.txt",
    content: "This file was created by arif",
  },
  {
    fileName: "aqif.txt",
    content: "This file was created by aqif",
  },
];

// loop for create file for each note
for (i = 0; i < notes.length; i++) {
  let note = notes[i];
  fs.writeFile(note.fileName, note.content, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("File created successfully!");
    }
  });
}

// create html file

const htmlcontent = `
<html>
<head>
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script></head>
<body>
<h1>Hello World</h1>
<h2>this is my first html file</h2>
</body>
</html>`;

fs.writeFile("index.html", htmlcontent, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(" HTML file created successfully!");
  }
});

// create css file

const csscontent = `
body {
    background-color: red};`;

fs.writeFile("style.css", csscontent, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(" CSS file created successfully!");
  }
});

// create javascript file

const javacontent = `
console.log("Hello world");`;

fs.writeFile("script.js", javacontent, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(" Javascript file created successfully!");
  }
});
