import React, { useState } from "react";
import css from "./Step2.module.scss";
import { Plan } from "../../model/types";
import clsx from "clsx";
interface Step2Props {
  plans: Plan[];
  onPlanClicked: (id: number) => void;
  isMonthly: boolean;
  setIsMonthly: (monthly: boolean) => void;
}

const Step2 = ({
  plans,
  onPlanClicked,
  isMonthly,
  setIsMonthly,
}: Step2Props) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className={css.cards}>
        {plans.map((option) => {
          return (
            <div
              className={clsx([
                css.card,
                option.activated ? css.activated : "",
              ])}
              onClick={() => onPlanClicked(option.id)}
            >
              <div className={css.icon}>
                <img src={option.icon} width={20} height={20} />
              </div>
              <div className={css.info}>
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
        <p className={isMonthly ? "bold" : ""}>Monthly</p>
        <input
          type={"checkbox"}
          checked={isMonthly}
          onChange={() => setIsMonthly(!isMonthly)}
        />
        <p className={!isMonthly ? "bold" : ""}>Yearly</p>
      </div>
    </div>
  );
};

export default Step2;
