import React from "react";
import StepLink from "../steplink/StepLink";
import css from "./Sidebar.module.scss";
interface SidebarProps {
  links: [
    {
      active: boolean;
      index: number;
      step: string;
      title: string;
    }
  ];
  onClick: (index: number) => {};
}
const Sidebar = (props: SidebarProps) => {
  return (
    <div className={css.container}>
      <div className={css.links}>
        {props.links.map((link) => {
          return <StepLink {...link} onClick={props.onClick} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
