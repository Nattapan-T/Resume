import React from "react";

interface NavItemProps {
  item: string;
  tolink: string;
  activenav: (item: string) => void;
}

const NavItems: React.FC<NavItemProps> = (props) => {
  return (
    <li id={props.item}>
      <a href={props.tolink} onClick={() => props.activenav(props.item)}>
        {props.item}
      </a>
    </li>
  );
};

export default NavItems;
