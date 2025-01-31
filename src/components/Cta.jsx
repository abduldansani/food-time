import chef from "../assets/images/chef.png";
import arrow from "../assets/icons/arrow.svg";

import { motion } from "motion/react";

const Cta = () => {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="pb-28"
    >
      <div className="xl: container mx-auto max-w-7xl px-2">
        <div
          className="relative flex h-[827.13px] items-end justify-center rounded-[50px] bg-cover bg-center bg-no-repeat px-2 pb-12"
          style={{ backgroundImage: `url(${chef})` }}
        >
          <div className="flex flex-col items-center gap-5 text-center font-bold text-white">
            <div className="text-size-30 lg:text-size-40">
              Want to be a part of Foodtime?
            </div>
            <p className="text-size-18 font-semibold sm:text-size-20 lg:text-size-24">
              List your restaurant or shop on foodtime.
            </p>
            <button className="flex items-center justify-center gap-2 rounded-[120px] bg-secondary px-8 py-3 text-size-20 font-medium text-white md:text-size-22 lg:px-12 lg:py-4">
              Get started
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
