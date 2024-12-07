import Logo from "./Logo";
import arrowdown from "../assets/icons/arrowdown.svg";
import cart from "../assets/icons/cart.svg";
import menu_icon from "../assets/icons/menu_icon.svg";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <header className="bg-primaryLight bg-opacity-10 border-b-2 border-b-lightBlack border-opacity-20 py-2 md:py-3 lg:py-4">
      <div className="container mx-auto px-2 xl:max-w-7xl flex items-center justify-between">
        <Logo colored={true} />
        <div className="hidden md:flex items-center  gap-10 lg:gap-24">
          <nav className="flex items-center justify-between text-paragraph gap-8 lg:gap-16">
            {navLinks.map((navLink, i) => (
              <a key={i} href="#">
                {navLink}
              </a>
            ))}
            <a href="#" className="flex items-center gap-2">
              EN
              <img src={arrowdown} alt="" />
            </a>
          </nav>
          <div className="gap-4 lg:gap-6 flex items-center">
            <button className="bg-primary text-white py-3 px-8 lg:py-4 lg:px-12 rounded-[225px] text-size-18 lg:text-size-20 font-medium">
              Login
            </button>
            <div className="rounded-full bg-primary p-3 lg:p-4">
              <img src={cart} alt="" className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex gap-8 items-center">
          <a href="#" className="flex items-center gap-2">
            EN
            <img src={arrowdown} alt="" />
          </a>
          <button onClick={() => setMenuOpen(true)}>
            <img src={menu_icon} alt="" className="h-7 w-7" />
          </button>
        </div>
      </div>
      {menuOpen && <MobileMenu onMenuClose={handleMenuClose} />}
    </header>
  );
};

const navLinks = ["Home", "Blog", "About us"];
export default Header;
