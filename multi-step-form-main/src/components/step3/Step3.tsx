import React, { useState } from "react";
import css from "./Step3.module.scss";

const Step3 = () => {
  const options = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      name: "Larger Storeage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ];
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className={css.cards}>
        {options.map((option) => {
          return (
            <div className={css.card}>
              <div className="checkbox">
                <input type={"checkbox"} checked />
              </div>
              <div className={css.info}>
                <h3>{option.name}</h3>
                <p>{option.description}</p>
              </div>
              <div className={css.price}>
                <p>+${option.price}/mo</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
