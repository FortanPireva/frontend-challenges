import React from "react";
import StepLink from "../steplink/StepLink";
import css from "./Sidebar.module.scss";
import BackgroundIcon from "../../assets/images/bg-sidebar-desktop.svg";
import MobileBackgroundIcon from "../../assets/images/bg-sidebar-mobile.svg";
import clsx from "clsx";
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
  const isMobile = (navigator as any).userAgentData.mobile; //resolves true/false

  return (
    <div
      className={clsx([css.container, isMobile ? css.mobile : ""])}
      style={{
        backgroundImage: `url(${
          isMobile ? MobileBackgroundIcon : BackgroundIcon
        })`,
      }}
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
