import React from "react";
import { AddOn, Plan } from "../../model/types";
import css from "./Step4.module.scss";
interface Step4Props {
  isMonthly: boolean;
  selectedPlan: Plan;
  selectedAddons: AddOn[];
  onChangePlan: () => void;
}
const Step4 = ({
  isMonthly,
  selectedAddons,
  selectedPlan,
  onChangePlan,
}: Step4Props) => {
  const calculateTotal = () => {
    if (isMonthly) {
      return (
        selectedPlan.priceYearly / 10 +
        selectedAddons.reduce((a, b) => a + b.priceMonthly, 0)
      );
    } else {
      return (
        selectedPlan.priceYearly +
        selectedAddons.reduce((a, b) => a + b.priceMonthly * 10, 0)
      );
    }
  };
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className={css.boxcontainer}>
        <div className={css.summary}>
          <div className={css.plan}>
            <h1>
              {selectedPlan.name}({isMonthly ? "Monthly" : "Yearly"})
            </h1>
            <p className={css.underline} onClick={onChangePlan}>
              Change
            </p>
          </div>
          <div className={css.price}>
            <p>
              {isMonthly
                ? `$${selectedPlan.priceYearly / 10}/mo`
                : `$${selectedPlan.priceYearly}/yr`}
            </p>
          </div>
        </div>
        <div className={css.addons}>
          {selectedAddons.map((selectedAddon) => {
            return (
              <div className={css.addon}>
                <p>{selectedAddon.title}</p>
                <p>
                  {isMonthly
                    ? `$${selectedAddon.priceMonthly}/mo`
                    : `$${selectedAddon.priceMonthly * 10}/yr`}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={css.total}>
        <p>Total ({isMonthly ? "per month" : "per year"}) </p>
        <p className={css.price}>
          {isMonthly ? `$${calculateTotal()}/mo` : `$${calculateTotal()}/yr`}
        </p>
      </div>
    </div>
  );
};

export default Step4;
