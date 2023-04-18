import React from "react";
import StepLink from "../steplink/StepLink";
import css from "./Sidebar.module.scss";
import BackgroundIcon from "../../assets/images/bg-sidebar-desktop.svg";
interface SidebarProps {
  links: {
    active: boolean;
    index: number;
    step: string;
    title: string;
  }[];
  onClick: (index: number) => {};
}
const Sidebar = (props: SidebarProps) => {
  return (
    <div
      className={css.container}
      style={{ backgroundImage: `url(${BackgroundIcon})` }}
    >
      <div className={css.links}>
        {props.links.map((link) => {
          return <StepLink {...link} onClick={props.onClick} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
