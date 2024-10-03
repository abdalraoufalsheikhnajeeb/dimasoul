"use client";

import { useState, useEffect, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "../data";

interface SubMenuProps {
  submenuItems: SubMenuItem[];
  submenuId: string;
}

export interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  href?: string;
  highlight?: boolean;
  submenu?: SubMenuItem[];
}

const SubMenu: React.FC<SubMenuProps> = memo(({ submenuItems, submenuId }) => (
  <ul
    id={submenuId}
    className="absolute hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:block"
    role="menu"
  >
    {submenuItems.map((subItem, subIndex) => (
      <li key={subIndex}>
        <Link
          href={subItem.href}
          className="block w-full rounded-md px-4 py-3 text-lg text-gray-700 transition-colors hover:bg-gray-200"
          role="menuitem"
        >
          {subItem.title}
        </Link>
      </li>
    ))}
  </ul>
));

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>(
    {},
  );
  const pathname = usePathname();

  const isHomeActive = pathname === "/";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeMenuOnClick = () => {
    setIsOpen(false); // Close the mobile menu when a nav item is clicked
  };

  return (
    <nav
      className={`${
        isOpen
          ? "inset-0 bg-transparent"
          : `container left-1/2 top-4 max-w-[90vw] -translate-x-1/2 shadow-md ${
              isHomeActive ? "bg-primaryBG" : "bg-white"
            }`
      } fixed z-50 w-full rounded-full py-4`}
      role="navigation"
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            quality={60}
            src="/images/logo.svg"
            alt="Logo"
            className="h-full"
            width={70}
            height={70}
          />
        </div>

        {/* Center: Menu */}
        <div className="hidden items-center space-x-8 text-sm font-medium text-gray-700 md:flex">
          {menuItems.map((item, index) => {
            const isActive = item.href === pathname;
            const submenuId = `submenu-${index}`;
            return (
              <div key={index} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center transition-colors hover:text-primary ${
                      isActive
                        ? "text-primary underline underline-offset-8"
                        : ""
                    }`}
                    role="menuitem"
                  >
                    <span className="text-lg">{item.title}</span>
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-2 text-lg transition-colors hover:text-primary"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls={submenuId}
                    role="menuitem"
                  >
                    {item.title}
                    <Image
                      quality={60}
                      width={20}
                      height={20}
                      src={"/images/arr-down.svg"}
                      alt="arrow down"
                    />
                  </button>
                )}
                {item.submenu && (
                  <SubMenu submenuItems={item.submenu} submenuId={submenuId} />
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Contact Us Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact-us"
            className="rounded-full bg-green-900 px-4 py-2 text-white transition-all hover:bg-green-700"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <Image
                quality={60}
                width={80}
                height={80}
                src={"/images/x.svg"}
                alt="x"
                className="fixed right-4 top-4 z-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Image
                quality={60}
                width={80}
                height={80}
                src={"/images/burger.svg"}
                alt="burger"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          <div className="fixed left-0 top-0 z-40 h-screen w-screen bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
          <div className="fixed inset-0 z-40 md:hidden">
            <ul className="flex h-screen w-full flex-col items-center justify-center gap-8 pb-11 pt-[20vh] text-sm text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index} className="px-4 py-2">
                  {item.href ? (
                    <Link
                      className="text-xl text-white"
                      href={item.href}
                      onClick={closeMenuOnClick} // Close menu after click
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleSubmenuToggle(index)}
                        className="flex w-full items-center justify-between gap-2"
                        aria-expanded={openSubmenus[index] || false}
                        aria-controls={`mobile-submenu-${index}`}
                      >
                        <span className="text-lg text-white">{item.title}</span>
                        <Image
                          quality={60}
                          width={20}
                          height={20}
                          src={"/images/arr-down-w.svg"}
                          alt="burger"
                        />
                      </button>
                      {openSubmenus[index] && item.submenu && (
                        <ul
                          id={`mobile-submenu-${index}`}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="py-1 text-start text-lg text-white"
                            >
                              <Link
                                href={subItem.href}
                                onClick={closeMenuOnClick}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li className="mt-auto rounded-full bg-green-900 px-8 py-4 text-xl text-white shadow-md transition-all hover:bg-green-700">
                <Link href="/contact-us" onClick={closeMenuOnClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
