import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { logo } from "../assets";
import { contacts, navLinks } from "../constants";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const setDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [width]);

  return (
    <div className="fixed z-10 top-0 w-full body-gradient">
      <nav className="flex items-center justify-between w-[320px] md:w-[768px] lg:w-[1024px] px-5 py-4 mx-auto">
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => scroll.scrollToTop()}
        >
          <img
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="object-contain cursor-pointer"
          />
        </Link>

        <div className="flex items-center gap-10">
          <ul className="list-none hidden md:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="[&>.active]:text-white text-secondary hover:text-white transition-colors duration-300 text-[18px] font-medium cursor-pointer"
              >
                <Link
                  to={nav.id}
                  spy={true}
                  smooth={true}
                  offset={width > 768 ? -152 : -152}
                  duration={500}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="hidden md:flex items-center gap-10">
            {contacts.map(({ title, icon, href }) => (
              <li key={href}>
                <a href={href} target="_blank">
                  <img src={icon} alt={title} width={40} height={40} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
};

export default Navbar;
