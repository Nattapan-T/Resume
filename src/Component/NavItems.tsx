import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  item: string;
  tolink: string;
  activenav: (item: string) => void;
}

const NavItems: React.FC<NavItemProps> = (props) => {
  return (
    <li id={props.item}>
      <Link to={props.tolink} onClick={() => props.activenav(props.item)}>
        {props.item}
      </Link>
    </li>
  );
};

export default NavItems;
