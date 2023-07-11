"use client";

import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { logo } from "../../public/assets/img";
import { navLinks } from "@/core/shared/constants";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClickMenu = (event: ChangeEvent<HTMLInputElement>) => {
    setMenuOpen(event.target.checked);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-software-grey h-14 flex-center">
        <div className="container mx-auto padding-x flex-between">
          {/* Logo */}
          <div>
            <h1>
              <Link href="/">
                <Image
                  src={logo}
                  alt="turntabl logo"
                  height={25}
                  className="object-contain"
                />
              </Link>
            </h1>
          </div>
          {/* nav links */}
          <ul className="hidden md:flex">
            {navLinks.map((link) => {
              if (pathName !== "/" && link.url === "#clients") {
                return;
              }
              return (
                <li
                  key={link.title}
                  className={`mr-4 last:mr-0 nav-link relative ${
                    link.url === pathName ? "nav-link-selected" : ""
                  }`}
                >
                  <Link href={link.url}>{link.title}</Link>
                  <div className="absolute nav-link-indicator"></div>
                </li>
              );
            })}
          </ul>
          {/* mobile nav button */}
          <input
            onChange={handleClickMenu}
            checked={menuOpen}
            hidden
            type="checkbox"
            id="menu"
            className="nav-mobile-menu"
          />
          <label htmlFor="menu" className="cursor-pointer md:hidden">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
      </nav>
      {/* mobile nav items */}
      <nav
        className={`nav-mobile md:hidden fixed h-screen w-full top-0 left-0 z-50 bg-disruption -translate-x-full transition-all duration-700 ${
          menuOpen ? "translate-x-0" : ""
        }`}
      >
        <div className="flex justify-end p-5 nav-mobile-close">
          <div
            onClick={handleCloseMenu}
            className="flex items-center justify-center bg-white rounded-full cursor-pointer button-bg w-14 h-14"
          >
            <FontAwesomeIcon size="xl" icon={faXmark} />
          </div>
        </div>
        <ul className="flex-col mt-28 flex-center">
          {navLinks.map((link, index) => {
            if (pathName !== "/" && link.url === "#clients") {
              return;
            }
            return (
              <li
                key={link.title}
                onClick={handleCloseMenu}
                className="relative mb-10 mr-4 last:mr-0 nav-link"
              >
                <Link
                  className="px-4 py-3 text-3xl uppercase transition-all duration-500 nav-mobile-link"
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
