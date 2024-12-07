import close from "../assets/icons/close.svg";
import arrowdown from "../assets/icons/arrowdown.svg";
import Logo from "./Logo";

const MobileMenu = ({ onMenuClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-white">
      <div className="w-screen h-dvh flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-end py-2 px-6 border-b-2">
            <Logo colored={true} />
            <button onClick={onMenuClose}>
              <img src={close} alt="" className="h-10 w-10" />
            </button>
          </div>
          <div className="px-6">
            <nav className="flex flex-col text-paragraph gap-4 mt-8">
              {navLinks.map((navLink, i) => (
                <a key={i} href="#">
                  {navLink}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t-2">
          <p className="text-[16px] py-4 px-6">
            <a
              href="https://www.figma.com/community/file/1235552657512909825/online-food-ordering-website-landing-page"
              target="_blank"
            >
              © 2023 <span className="underline">Nayeemur R Sakib</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const navLinks = ["Home", "Blog", "About us"];
export default MobileMenu;
