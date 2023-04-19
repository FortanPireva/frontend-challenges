import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";
import { AddOn } from "./model/types";
import { Plan } from "./model/types";
import ArcadeIcon from "./assets/images/icon-arcade.svg";
import ProIcon from "./assets/images/icon-pro.svg";
import AdvancedIcon from ".//assets/images/icon-advanced.svg";
import Step4 from "./components/step4/Step4";
import Step5 from "./components/step5/Step5";
const initialAddOns: AddOn[] = [
  {
    id: 1,
    title: "Online service",
    description: "Access to multiplayer games",
    isPicked: false,
    priceMonthly: 1,
  },
  {
    id: 2,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    isPicked: false,
    priceMonthly: 2,
  },
  {
    id: 3,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    isPicked: false,
    priceMonthly: 2,
  },
];
const initialOptions: Plan[] = [
  {
    id: 1,
    name: "Arcade",
    priceYearly: 90,
    icon: ArcadeIcon,
    activated: false,
  },
  {
    id: 2,
    name: "Advanced",
    priceYearly: 120,
    icon: AdvancedIcon,
    activated: false,
  },
  {
    id: 3,
    name: "Pro",
    priceYearly: 150,
    icon: ProIcon,
    activated: false,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [addOns, setAddOns] = useState(initialAddOns);
  const [plans, setPlans] = useState(initialOptions);
  const [isMonthly, setIsMonthly] = useState(false);
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
          {step == 2 && (
            <Step2
              plans={plans}
              onPlanClicked={(id: number) => {
                const copy: Plan[] = JSON.parse(JSON.stringify(plans));
                copy.forEach((plan) => {
                  if (plan.id == id) {
                    plan.activated = !plan.activated;
                  } else {
                    plan.activated = false;
                  }

                  setPlans(copy);
                });
              }}
              isMonthly={isMonthly}
              setIsMonthly={setIsMonthly}
            />
          )}
          {step == 3 && (
            <Step3
              addons={addOns}
              onAddOnChange={(id: number) => {
                const copy: AddOn[] = JSON.parse(JSON.stringify(addOns));
                copy.forEach((addon) => {
                  if (addon.id == id) {
                    addon.isPicked = !addon.isPicked;
                  }
                });

                setAddOns(copy);
              }}
              isMonthly={isMonthly}
            />
          )}
          {step == 4 && (
            <Step4
              isMonthly={isMonthly}
              onChangePlan={() => setStep(2)}
              selectedPlan={plans.find((plan) => plan.activated) || plans[0]}
              selectedAddons={addOns.filter((addon) => addon.isPicked)}
            />
          )}
          {step == 5 && <Step5 />}
        </div>

        {step !== 5 && (
          <div className="buttons">
            {step === 4 && (
              <button className="confirm" onClick={() => setStep(5)}>
                Confirm
              </button>
            )}
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
        )}
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
