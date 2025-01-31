import close from "../assets/icons/close.svg";
import Logo from "./Logo";
import { motion } from "motion/react";
const menuVar = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const MobileMenu = ({ onMenuClose }) => {
  return (
    <motion.div
      variants={menuVar}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-white"
    >
      <div className="flex h-dvh w-screen flex-col">
        <div className="flex-1">
          <div className="flex items-end justify-between border-b-2 px-6 py-2">
            <Logo colored={true} />
            <button onClick={onMenuClose}>
              <img src={close} alt="" className="h-10 w-10" />
            </button>
          </div>
          <div className="px-6">
            <nav className="mt-8 flex flex-col gap-4 text-paragraph">
              {navLinks.map((navLink, i) => (
                <a key={i} href="#">
                  {navLink}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t-2">
          <p className="px-6 py-4 text-[16px]">
            <a
              href="https://www.figma.com/community/file/1235552657512909825/online-food-ordering-website-landing-page"
              target="_blank"
            >
              © 2023 <span className="underline">Nayeemur R Sakib</span>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const navLinks = ["Home", "Blog", "About us"];
export default MobileMenu;
