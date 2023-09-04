import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  item: string;
  tolink: string;
  activenav: (item: string) => void;
}

const NavItems: React.FC<NavItemProps> = (props) => {
  return (
    <li id={props.item}>
      <NavLink to={props.tolink} onClick={() => props.activenav(props.item)}>
        {props.item}
      </NavLink>
    </li>
  );
};

export default NavItems;
