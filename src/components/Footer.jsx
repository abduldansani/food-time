import time from "../assets/icons/time.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#224300] text-[#DEDEDE]  pb-16">
      <div className="container xl:max-w-7xl mx-auto px-2 flex flex-col lg:flex-row justify-between gap-16 xl:gap-28 py-24">
        <div className="space-y-9 max-w-[485px]">
          <Logo />
          <div className="text-size-18">
            Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
            convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
            Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row gap-12 md:gap-16 xl:gap-32 ">
          {footerLinks.map((link, i) => (
            <div key={i} className="space-y-5 xl:space-y-9">
              <div className="font-semibold text-size-18 xl:text-size-20 text-white">
                {link.title}
              </div>
              <div className="flex flex-col gap-2 xl:gap-3 text-size-18 xl:text-size-20">
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
      <p className="text-center text-[16px]">© 2023 Nayeemur R Sakib</p>
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
