import React, { useState } from "react";
import css from "./Step2.module.scss";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";

const Step2 = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const options = [
    {
      name: "Arcade",
      priceYearly: 90,
      icon: ArcadeIcon,
    },
    {
      name: "Advanced",
      priceYearly: 120,
      icon: AdvancedIcon,
    },
    {
      name: "Pro",
      priceYearly: 150,
      icon: ProIcon,
    },
  ];
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>Selet your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className={css.cards}>
        {options.map((option) => {
          return (
            <div className={css.card}>
              <div>
                <img src={option.icon} width={20} height={20} />
              </div>
              <div>
                <h3>{option.name}</h3>
                <p>
                  {isMonthly
                    ? `$${option.priceYearly / 10}/mo`
                    : `$${option.priceYearly}/year`}
                </p>
                {!isMonthly && <span>Get 2 months free </span>}
              </div>
            </div>
          );
        })}
      </div>
      <div className={css.option}>
        <p>Monthly</p>
        <input
          type={"checkbox"}
          checked
          onChange={() => setIsMonthly(!isMonthly)}
        />
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default Step2;
