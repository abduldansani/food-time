import leaf from "../assets/images/leaf.png";
import leaf2 from "../assets/images/leaf2.png";
import heroImg from "../assets/images/heroImg.png";
import search from "../assets/icons/Search.svg";
import location from "../assets/icons/location.svg";
import check from "../assets/icons/check.svg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden overflow-x-hidden bg-primaryLight bg-opacity-10 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between px-2 md:flex-row xl:max-w-7xl">
        <img
          src={leaf}
          alt=""
          className="absolute -top-10 left-0 w-32 lg:w-40 xl:-top-16 xl:w-64"
        />
        <img
          src={leaf2}
          alt=""
          className="absolute bottom-1/2 right-0 w-32 max-sm:hidden md:top-4 lg:right-3 lg:w-52 xl:-right-7 xl:w-72 2xl:right-20"
        />
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center md:text-left"
        >
          <h1 className="font-merienda text-size-50 font-bold leading-[110%] text-primary lg:text-size-65 lg:leading-[130%]">
            Order food online <br className="hidden lg:block" /> from your
            favourite <br className="hidden lg:block" />
            local restaurants<span className="text-secondary">.</span>
          </h1>
          <p className="text-size-20 font-semibold text-paragraph1 lg:text-size-24">
            Freshly made food delivered to your door.
          </p>
          <div className="flex max-w-[95vw] justify-between rounded-[120px] border-2 border-lightBlack border-opacity-20">
            <div className="flex flex-1 p-2">
              <div className="flex shrink-0 items-center justify-center rounded-full bg-secondary p-2">
                <img src={location} alt="" className="h-5 w-5 lg:h-8 lg:w-8" />
              </div>
              <input
                type="text"
                placeholder="Enter your location"
                className="max-w-[60vw] flex-1 flex-shrink bg-transparent px-2 text-size-18 focus:outline-none md:max-w-[25vw] lg:text-size-20"
              />
            </div>
            <button className="flex shrink-0 items-center justify-center gap-2 rounded-[120px] bg-primary px-6 py-2 text-size-18 font-medium text-white sm:px-8 lg:px-14 lg:py-4 lg:text-size-22">
              <img src={search} alt="" className="h-6 w-6" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </motion.div>
        <div className="relative shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -top-14 z-10 translate-x-1/2 rounded-lg bg-gradient-to-b from-white to-[rgba(255,255,255,0.58)] px-8 py-4 md:-top-20 xl:translate-x-3/4"
          >
            <div className="flex items-center gap-2">
              <img
                src={check}
                alt=""
                className="lgh-8 h-6 w-6 lg:w-8 xl:h-10 xl:w-10"
              />
              <div className="text-size-30 font-bold text-secondary xl:text-size-40">
                200k+
              </div>
            </div>
            <p className="text-size-18 font-semibold text-paragraph2 lg:text-size-20">
              People delivered
            </p>
          </motion.div>
          <motion.img
            initial={{ rotate: -90 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            src={heroImg}
            alt=""
            className="relative md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[530px] xl:w-[530px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
