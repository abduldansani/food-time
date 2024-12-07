import close from "../assets/icons/close.svg";
import arrowdown from "../assets/icons/arrowdown.svg";
import Logo from "./Logo";

const MobileMenu = ({ onMenuClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-opacity-95 bg-white">
      <div className="w-screen h-dvh flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-end p-2 border-b-2">
            <Logo colored={true} />
            <button onClick={onMenuClose}>
              <img src={close} alt="" className="h-10 w-10" />
            </button>
          </div>
          <div className="p-2">
            <nav className="flex flex-col text-paragraph gap-4 mt-8">
              {navLinks.map((navLink, i) => (
                <a key={i} href="#">
                  {navLink}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="p-4">
          <p className="text-center text-[16px]">
            <a
              href="https://www.figma.com/community/file/1235552657512909825/online-food-ordering-website-landing-page"
              target="_blank"
            >
              © 2023 Nayeemur R Sakib
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const navLinks = ["Home", "Blog", "About us"];
export default MobileMenu;
