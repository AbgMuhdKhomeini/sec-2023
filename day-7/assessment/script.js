//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it

// BMI calculator web app
// BMI is calculated by dividing a person's weight in kilograms by the square of his/her height in meters
// BMI = kg/m^2
// BMI = kg/m/m
// BMI = kg/(m*m)

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40

// how our app will work:
// prompt user for weight in kilograms
// prompt user for height in meters
// calculate BMI based on user input (weight and height)
// display BMI at h2 with id="bmiValue"
// display BMI category at h2 with id="bmiCategory"

// case conversion
// 1. camelCase - first word is lowercase, second word is uppercase
// example: myNameIsJohn, myAgeIs20, myHeightIs170, myWeightIs70
// usually used in javascript and html id

// 2. snake_case - all words are lowercase, words are separated by underscore
// example: my_name_is_john, my_age_is_20, my_height_is_170, my_weight_is_70

// 3. kebab-case - all words are lowercase, words are separated by dash
// example: my-name-is-john, my-age-is-20, my-height-is-170, my-weight-is-70
// usually used in html class

// 4. PascalCase - all words are uppercase, words are separated by uppercase
// example: MyNameIsJohn, MyAgeIs20, MyHeightIs170, MyWeightIs70

// example change h2 with id="bmi-value" to 20
// hashtag is used to select id

//example
//let h2BmiValue = document.querySelector("#bmiValue");
//let newValue = prompt("Enter new value");
//h2BmiValue.innerText = newValue;

myBmi();
function myBmi() {
  let weight = prompt("What is your weight?");
  let height = prompt("What is your height?");
  let bmiCalc = Math.round(weight / (height * height));

  let h2BmiDisp = document.querySelector("#bmiValue");
  h2BmiDisp.innerText = `Your BMI is ${bmiCalc}`;

  if (bmiCalc < 15) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "Very severely underweight.";
  } else if (bmiCalc < 16) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "severely underweight";
  } else if (bmiCalc < 18.5) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "underweight";
  } else if (bmiCalc <= 18.5 || bmiCalc <= 25) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "Normal (healthy weight)";
  } else if (bmiCalc >= 25 && bmiCalc <= 30) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "Overweight";
  } else if (bmiCalc >= 30 && bmiCalc <= 35) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "Obese Class I (Moderately obese)";
  } else if (bmiCalc >= 35 && bmiCalc <= 40) {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "Obese Class II (Severely obese)";
  } else {
    let h2BmiCat = document.querySelector("#bmiCategory");
    h2BmiCat.innerText = "Obese Class III (Very severely obese)";
  }
}
