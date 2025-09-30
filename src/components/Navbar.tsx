"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Event", link: "/event" },
  { name: "Committee", link: "/committee" },
  { name: "Ambassador", link: "/ambassador" },
  { name: "Registration", link: "/registration" },
  { name: "Contact", link: "mailto:ieeeaiubstudentbranch@gmail.com" },
];

export default function MyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-[#020b33]">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavItems items={navItems} className="text-black hover:text-white" />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="md:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-black hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
