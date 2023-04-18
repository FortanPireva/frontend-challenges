import React from "react";
import css from "./StepLink.module.scss";
import clsx from "clsx";
interface StepLinkProps {
  active: boolean;
  index: number;
  step: string;
  title: string;
  onClick: (index: number) => void | {};
}

const StepLink = (props: StepLinkProps) => {
  return (
    <div className={css.link}>
      <div className={clsx([css.number, props.active ? css.active : ""])}>
        {props.index}
      </div>
      <div className={css.info}>
        <p>{props.step}</p>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default StepLink;
