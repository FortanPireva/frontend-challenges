import React, { useState } from "react";
import { AddOn } from "../../model/types";
import css from "./Step3.module.scss";
import clcx, { clsx } from "clsx";
interface Step3Props {
  addons: AddOn[];
  onAddOnChange: (id: number) => void;
  isMonthly: boolean;
}
const Step3 = ({ addons, onAddOnChange, isMonthly }: Step3Props) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className={css.cards}>
        {addons.map((addon) => {
          return (
            <div
              className={clsx([css.card, addon.isPicked ? css.picked : ""])}
              onClick={() => onAddOnChange(addon.id)}
            >
              <div className="checkbox">
                <input
                  type={"checkbox"}
                  checked={addon.isPicked}
                  onChange={() => onAddOnChange(addon.id)}
                />
              </div>
              <div className={css.info}>
                <h3>{addon.title}</h3>
                <p>{addon.description}</p>
              </div>
              <div className={css.price}>
                <p>
                  +$
                  {isMonthly
                    ? `${addon.priceMonthly}/mo`
                    : `${addon.priceMonthly * 10}/yr`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
