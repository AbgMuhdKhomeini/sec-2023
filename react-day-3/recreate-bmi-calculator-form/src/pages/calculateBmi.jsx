import { useForm } from "react-hook-form";

function CalculateBmi() {
  const form = useForm();

  function onSubmit(data) {
    const name = data.name;
    const email = data.email;
    const weight = data.weight;
    const height = data.height;
    const bmiCalc = Math.round(weight / (height * height));
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

  return (
    <main>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h3 style={{ color: "white" }}>BMI Calculator</h3>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...form.register("name", { required: true })}
          />
          {form.formState.errors.name ? (
            <span className="error">* Name is required</span>
          ) : null}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...form.register("email", { required: true })}
          />
          {form.formState.errors.email ? (
            <span className="error">* Email is required</span>
          ) : null}
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            placeholder="Enter your weight (kg)"
            {...form.register("weight", { required: true })}
          />
          {form.formState.errors.weight ? (
            <span className="error">* Enter your weight</span>
          ) : null}
        </div>
        <div className="input-container">
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            placeholder="Enter your height (m)"
            {...form.register("height", { required: true })}
          />
          {form.formState.errors.height ? (
            <span className="error">* Enter your height</span>
          ) : null}
        </div>
        <div className="btn-container">
          <button type="submit">Calculate</button>
          <button className="btn-outline" onClick={form.reset} type="reset">
            Reset
          </button>
        </div>
        <div className="display">
          <p id="bmiValue"></p>
          <p id="bmiCategory"></p>
        </div>
      </form>
    </main>
  );
}

export default CalculateBmi;
