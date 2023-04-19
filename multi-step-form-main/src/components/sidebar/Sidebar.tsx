import React from "react";
import StepLink from "../steplink/StepLink";
import css from "./Sidebar.module.scss";
import BackgroundIcon from "../../assets/images/bg-sidebar-desktop.svg";
interface SidebarProps {
  links: {
    index: number;
    step: string;
    title: string;
  }[];
  onClick: (index: number) => void | {};
  step: number;
}
const Sidebar = (props: SidebarProps) => {
  return (
    <div
      className={css.container}
      style={{ backgroundImage: `url(${BackgroundIcon})` }}
    >
      <div className={css.links}>
        {props.links.map((link, i) => {
          return (
            <StepLink
              active={i + 1 == props.step || (i + 1 == 4 && props.step == 5)}
              {...link}
              onClick={props.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
