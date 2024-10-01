"use client";

/* eslint-disable react/display-name */
// NavBar.tsx
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
    className="absolute hidden rounded-lg bg-white shadow-md group-hover:block"
    role="menu"
  >
    {submenuItems.map((subItem, subIndex) => (
      <li key={subIndex}>
        <Link
          href={subItem.href}
          className="mt-4 w-full whitespace-nowrap px-4 py-2 text-lg text-black hover:bg-gray-100"
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

  // Determine if the active link is "Home"
  const isHomeActive = pathname === "/";

  // Disable scrolling on body when menu is open
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

  return (
    <nav
      className={`${
        isOpen
          ? "inset-0 bg-transparent"
          : `left-1/2 top-4 max-w-[90vw] -translate-x-1/2 lg:max-w-7xl shadow-md ${
              isHomeActive ? "bg-primaryBG" : "bg-white"
            }`
      } fixed z-50 w-full rounded-full py-4`}
      role="navigation"
    >
      <div className="mx-auto flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
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
                    className={`flex flex-col items-center hover:text-primary ${
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
                    className="flex items-center gap-2 text-lg hover:text-primary"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls={submenuId}
                    role="menuitem"
                  >
                    {item.title}
                    <Image
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
            className="rounded-full bg-green-900 px-4 py-2 text-white hover:bg-green-700"
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
                width={80}
                height={80}
                src={"/images/arr-down.svg"}
                alt="x"
              />
            ) : (
              <Image
                width={80}
                height={80}
                src={"/images/arr-down.svg"}
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
          <div className="fixed inset-0 z-50 md:hidden">
            <ul className="flex h-screen w-full flex-col items-center justify-center py-11 text-sm text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index} className="px-4 py-2">
                  {item.href ? (
                    <Link className="text-lg text-white" href={item.href}>
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
                          width={20}
                          height={20}
                          src={"/images/arr-down.svg"}
                          alt="burger"
                        />
                      </button>
                      {openSubmenus[index] && item.submenu && (
                        <ul
                          id={`mobile-submenu-${index}`}
                          className="ml-4 mt-2"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="py-2">
                              <Link href={subItem.href}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li className="mt-auto rounded-full bg-green-900 px-8 py-4 text-xl text-white shadow-md hover:bg-green-700">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
