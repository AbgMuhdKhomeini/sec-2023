const fs = require("fs");
const path = require("path");

const displayBmiHtml = fs.readFileSync(
  path.join(__dirname, "../pages/displayBmi.html"),
  "utf8"
);

//read Users.json
const Users = fs.readFileSync(
  path.join(__dirname, "../model/Users.json"),
  "utf8"
);

//convert Users.json to array
const usersArray = JSON.parse(Users);
// console.log(Users);

const postBmi = function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const weight = req.body.weight;
  const height = req.body.height;
  const bmiCalc = Math.round(weight / (height * height));

  //save data to User.json
  const newUser = {
    name: name,
    email: email,
    weight: weight,
    height: height,
    bmi: bmiCalc,
  };

  //validation
  // check if name or email is already taken
  const isEmailTaken = usersArray.some(function (user) {
    return user.email === email;
  });

  if (isEmailTaken) {
    res.send("Invalid data");
    return;
  }

  //insert new user to usersArray
  usersArray.push(newUser);
  //save usersArray to Users.json
  fs.writeFileSync(
    path.join(__dirname, "../model/Users.json"),
    JSON.stringify(usersArray, null, 2),
    "utf8"
  );

  if (bmiCalc < 15) {
    // console.log("Very severely underweight.");
    const cat1 = "Very severely underweight.";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat1)
    );
  } else if (bmiCalc < 16) {
    // console.log("severely underweight");

    const cat2 = "severely underweight";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat2)
    );
  } else if (bmiCalc < 18.5) {
    // console.log("underweight");
    const cat3 = "underweight";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat3)
    );
  } else if (bmiCalc <= 18.5 || bmiCalc <= 25) {
    // console.log("Normal (healthy weight)");
    const cat4 = "Normal (healthy weight)";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat4)
    );
  } else if (bmiCalc >= 25 && bmiCalc <= 30) {
    // console.log("Overweight");
    const cat5 = "Overweight";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat5)
    );
  } else if (bmiCalc >= 30 && bmiCalc <= 35) {
    // console.log("Obese Class I (Moderately obese)");

    const cat6 = "Obese Class I (Moderately obese)";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat6)
    );
  } else if (bmiCalc >= 35 && bmiCalc <= 40) {
    // console.log("Obese Class II (Severely obese)");
    const cat7 = "Obese Class II (Severely obese)";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat7)
    );
  } else {
    // console.log("Obese Class III (Very severely obese)");
    const cat8 = "Obese Class III (Very severely obese)";
    res.setHeader("Content-Type", "text/html");
    res.write(
      displayBmiHtml
        .replace("##NAME##", name)
        .replace("##BMI##", bmiCalc)
        .replace("##CATEGORY##", cat8)
    );
  }

  // console.log(bmiCalc);

  //   res.setHeader("Content-Type", "text/html");
  //   res.write(
  //     displayBmiHtml.replace("##NAME##", name).replace("##BMI##", bmiCalc)
  //   );
};

module.exports = postBmi;
