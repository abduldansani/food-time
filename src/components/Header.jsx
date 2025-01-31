import Logo from "./Logo";
import arrowdown from "../assets/icons/arrowdown.svg";
import cart from "../assets/icons/cart.svg";
import menu_icon from "../assets/icons/menu_icon.svg";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

export const headerVar = {
  visible: { y: 0, transition: { duration: 0.35, ease: "easeInOut" } },
  hidden: { y: "-100%", transition: { duration: 0.35, ease: "easeInOut" } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 350) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <motion.header
      variants={headerVar}
      animate={hidden ? "hidden" : "visible"}
      className="sticky top-0 z-50 border-b-2 border-b-lightBlack border-opacity-20 bg-green-50"
    >
      <div className="bg-primaryLight bg-opacity-10 py-2 md:py-3 lg:py-4">
        <div className="container mx-auto flex items-center justify-between px-2 xl:max-w-7xl">
          <Logo colored={true} />
          <div className="hidden items-center gap-10 md:flex lg:gap-24">
            <nav className="flex items-center justify-between gap-8 text-paragraph lg:gap-16">
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
            <div className="flex items-center gap-4 lg:gap-6">
              <button className="rounded-[225px] bg-primary px-8 py-3 text-size-18 font-medium text-white lg:px-12 lg:py-4 lg:text-size-20">
                Login
              </button>
              <div className="rounded-full bg-primary p-3 lg:p-4">
                <img src={cart} alt="" className="h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 md:hidden">
            <a href="#" className="flex items-center gap-2">
              EN
              <img src={arrowdown} alt="" />
            </a>
            <button onClick={() => setMenuOpen(true)}>
              <img src={menu_icon} alt="" className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuClose={handleMenuClose} />}
      </AnimatePresence>
    </motion.header>
  );
};

const navLinks = ["Home", "Blog", "About us"];
export default Header;
