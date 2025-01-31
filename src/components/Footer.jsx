import time from "../assets/icons/time.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#224300] pb-16 text-[#DEDEDE]">
      <div className="container mx-auto flex flex-col justify-between gap-16 px-6 py-24 md:px-2 lg:flex-row xl:max-w-7xl xl:gap-28">
        <div className="max-w-[485px] space-y-9">
          <Logo />
          <div className="text-size-18">
            Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
            convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
            Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-16 xl:gap-32">
          {footerLinks.map((link, i) => (
            <div key={i} className="space-y-5 xl:space-y-9">
              <div className="text-size-18 font-semibold text-white xl:text-size-20">
                {link.title}
              </div>
              <div className="flex flex-col gap-2 text-size-18 xl:gap-3 xl:text-size-20">
                {link.links.map((link, i) => (
                  <a key={i} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[16px]">
        <a
          href="https://www.figma.com/community/file/1235552657512909825/online-food-ordering-website-landing-page"
          target="_blank"
        >
          © 2023 <span className="underline">Nayeemur R Sakib</span>
        </a>
      </p>
    </footer>
  );
};

const footerLinks = [
  {
    title: "Quick links",
    links: ["Browse Foodtime", "Browse Food tim", "Registrations"],
  },
  {
    title: "About",
    links: ["About us`", "Minssion", "Contact"],
  },
  {
    title: "Social",
    links: ["Facebook", "Twitter", "Instagram"],
  },
];

export default Footer;
