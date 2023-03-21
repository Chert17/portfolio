import React, { useState } from "react";
import { Link } from "react-scroll";

import { close, menu } from "../assets";
import { contacts, navLinks } from "../constants";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:hidden flex flex-1 justify-end items-center relative">
      <img
        src={toggle ? close : menu}
        alt="menu"
        width={28}
        height={28}
        className="object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />

      <div
        className={`${
          !toggle ? "opacity-0 translate-x-[200%]" : "opacity-100 translate-x-0"
        } transition-all duration-700 flex flex-col gap-4 p-6 black-gradient absolute top-10 right-[-30px] mx-4 my-2 min-w-[140px] z-10 rounded-xl md:hidden`}
      >
        <ul className="list-none flex justify-start items-center flex-1 gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="[&>.active]:text-white font-poppins font-medium cursor-pointer text-[18px] text-secondary"
            >
              <Link
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-155}
                duration={500}
                onClick={() => setToggle((prev) => !prev)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex justify-end items-start flex-1 gap-4">
          {contacts.map(({ title, icon, href }) => (
            <li key={href}>
              <a href={href} target="_blank">
                <img src={icon} alt={title} width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
