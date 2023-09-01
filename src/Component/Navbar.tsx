import React, { useState } from "react";
import NavItems from "./NavItems";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
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
