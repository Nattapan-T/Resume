import React, { useState } from "react";
import NavItems from "./NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [NavItemActive, setNavItemActive] = useState<string | null>(null);

  const activateItem = (item: string) => {
    if (NavItemActive) {
      const prevActiveItem = document.getElementById(NavItemActive);
      if (prevActiveItem) {
        prevActiveItem.classList.remove("active");
      }
    }
    setNavItemActive(item);
    const newActiveItem = document.getElementById(item);
    if (newActiveItem) {
      newActiveItem.classList.add("active");
    }
  };

  return (
    <nav>
      <button
        id="nav-toggle"
        className="toggle-button"
        onClick={() => {
          const navUl = document.querySelector("nav ul");
          if (navUl) {
            navUl.classList.toggle("open");
          }
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <NavItems item="Home" tolink="/" activenav={activateItem} />
        <NavItems item="About" tolink="/about" activenav={activateItem} />
        <NavItems
          item="Education"
          tolink="/education"
          activenav={activateItem}
        />
        <NavItems
          item="Experience"
          tolink="/experience"
          activenav={activateItem}
        />
        <NavItems item="Skill" tolink="/skill" activenav={activateItem} />
        <NavItems item="Contact" tolink="/contact" activenav={activateItem} />
      </ul>
    </nav>
  );
};

export default Navbar;
