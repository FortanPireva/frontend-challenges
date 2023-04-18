import React from "react";
import css from "./StepLink.module.scss";
import clsx from "clsx";
interface StepLinkProps {
  active: boolean;
  index: number;
  step: string;
  title: string;
  onClick: (index: number) => {};
}

const StepLink = (props: StepLinkProps) => {
  return (
    <div className={css.link}>
      <div className={clsx([css.number, props.active ? css.active : ""])}>
        {props.index}
      </div>
      <div>
        <p>{props.step}</p>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default StepLink;
