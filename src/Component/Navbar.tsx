import React, { useState } from "react";
import NavItems from "./NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [navItemActive, setNavItemActive] = useState<boolean>(false);

  const toggleNav = () => {
    setNavItemActive(!navItemActive);
  };

  const closeNav = () => {
    setNavItemActive(false);
  };

  return (
    <nav>
      <button
        id="nav-toggle"
        className={`toggle-button ${navItemActive ? "open" : ""}`}
        onClick={toggleNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-list ${navItemActive ? "open" : ""}`}>
        <NavItems item="Home" tolink="/" activenav={closeNav} />
        <NavItems item="About" tolink="/about" activenav={closeNav} />
        <NavItems item="Education" tolink="/education" activenav={closeNav} />
        <NavItems item="Experience" tolink="/experience" activenav={closeNav} />
        <NavItems item="Skill" tolink="/skill" activenav={closeNav} />
        <NavItems item="Contact" tolink="/contact" activenav={closeNav} />
      </ul>
    </nav>
  );
};

export default Navbar;
