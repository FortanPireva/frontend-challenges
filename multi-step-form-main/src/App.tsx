import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const links = [
    {
      index: 1,
      step: "Step 1",
      title: "Your Info",
    },
    {
      index: 2,
      step: "Step 2",
      title: "Select Plan",
    },
    {
      index: 3,
      step: "Step 3",
      title: "Add-Ons",
    },
    {
      index: 4,
      step: "Step 4",
      title: "Summary",
    },
  ];
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar
          step={step}
          links={links}
          onClick={(index: number) => {
            console.log("hey");
          }}
        />
      </div>
      <div className="main">
        <div className="step">
          {step == 1 && <Step1 />}
          {step == 2 && <Step2 />}
          {step == 3 && <Step3 />}
        </div>

        <div className="buttons">
          {step !== 4 && (
            <button className="next" onClick={() => setStep(step + 1)}>
              Next Step
            </button>
          )}
          {step !== 1 && (
            <button className="back" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
        </div>
      </div>
      {/* <!-- Sidebar start -->

Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary

<!-- Sidebar end -->

<!-- Step 1 start -->

Personal info Please provide your name, email address, and phone number.
Name e.g. Stephen King Email Address e.g. stephenking@lorem.com Phone Number
e.g. +1 234 567 890 Next Step

<!-- Step 1 end -->

<!-- Step 2 start -->

Select your plan You have the option of monthly or yearly billing. Arcade
$9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next Step

<!-- Step 2 end -->

<!-- Step 3 start -->

Pick add-ons Add-ons help enhance your gaming experience. Online service
Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save
+$2/mo Customizable Profile Custom theme on your profile +$2/mo Go Back Next
Step

<!-- Step 3 end -->

<!-- Step 4 start -->

Finishing up Double-check everything looks OK before confirming.

<!-- Dynamically add subscription and add-on selections here -->

Total (per month/year) Go Back Confirm

<!-- Step 4 end -->

<!-- Step 5 start -->

Thank you! Thanks for confirming your subscription! We hope you have fun
using our platform. If you ever need support, please feel free to email us
at support@loremgaming.com.

<!-- Step 5 end --> */}
    </div>
  );
}

export default App;
