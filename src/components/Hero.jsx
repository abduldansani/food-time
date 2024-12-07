import leaf from "../assets/images/leaf.png";
import leaf2 from "../assets/images/leaf2.png";
import heroImg from "../assets/images/heroImg.png";
import search from "../assets/icons/Search.svg";
import location from "../assets/icons/location.svg";
import check from "../assets/icons/check.svg";
const Hero = () => {
  return (
    <section className="bg-primaryLight bg-opacity-10 relative py-16 md:py-24 lg:py-32 overflow-x-hidden">
      <div className="container mx-auto px-2 xl:max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
        <img
          src={leaf}
          alt=""
          className="w-32 lg:w-40 xl:w-64 absolute -top-10 xl:-top-16 left-0"
        />
        <img
          src={leaf2}
          alt=""
          className="w-32 lg:w-52 xl:w-72 absolute right-0 lg:right-3 xl:-right-7 2xl:right-20 bottom-1/2 md:top-4"
        />
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-primary text-size-50 lg:text-size-65 font-bold font-merienda leading-[110%] lg:leading-[130%]">
            Order food online <br className="hidden lg:block" /> from your
            favourite <br className="hidden lg:block" />
            local restaurants<span className="text-secondary">.</span>
          </h1>
          <p className="text-size-20 lg:text-size-24 font-semibold text-paragraph1">
            Freshly made food delivered to your door.
          </p>
          <div className="flex justify-between border-2 border-lightBlack border-opacity-20 rounded-[120px] max-w-[95vw]">
            <div className="p-2 flex flex-1">
              <div className="bg-secondary shrink-0 p-2 rounded-full flex items-center justify-center">
                <img src={location} alt="" className="w-5 h-5 lg:w-8 lg:h-8" />
              </div>
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-1 px-2 focus:outline-none flex-shrink bg-transparent text-size-18 lg:text-size-20 max-w-[10vw]"
              />
            </div>
            <button className="flex items-center justify-center gap-2 rounded-[120px] py-2 lg:py-4 px-6 sm:px-8 lg:px-14 font-medium text-size-18 lg:text-size-22 bg-primary text-white shrink-0">
              <img src={search} alt="" className="w-6 h-6" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
        <div className="relative shrink-0">
          <div className="py-4 px-8 absolute -top-14 md:-top-20 translate-x-1/2 xl:translate-x-3/4 rounded-lg bg-gradient-to-b from-white to-[rgba(255,255,255,0.58)] z-10">
            <div className="flex gap-2 items-center">
              <img
                src={check}
                alt=""
                className="w-6 h-6 lg:w-8 xl:w-10 xl:h-10 lgh-8"
              />
              <div className="font-bold text-size-30 xl:text-size-40 text-secondary">
                200k+
              </div>
            </div>
            <p className="text-size-18 lg:text-size-20 font-semibold text-paragraph2">
              People delivered
            </p>
          </div>
          <img
            src={heroImg}
            alt=""
            className="relative md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[530px] xl:h-[530px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
