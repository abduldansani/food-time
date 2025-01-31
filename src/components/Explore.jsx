import arrow from "../assets/icons/arrow.svg";
import orders from "../assets/images/orders.png";

import { motion } from "motion/react";

const Explore = () => {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-secondary bg-opacity-5 py-10"
    >
      <div className="container mx-auto flex flex-col-reverse items-center justify-between px-2 lg:flex-row xl:max-w-7xl">
        <div className="space-y-6">
          <h2 className="font-merienda text-size-40 leading-[130%] text-primary xl:text-size-50">
            Explore your favourite city’s food.
          </h2>
          <p className="text-size-18 leading-[160%] text-paragraph1">
            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
            tristique. Non ligula tristique ut ut libero sit convallis maecenas.
            At egestas auctor porta mattis.
          </p>
          <button className="flex items-center justify-center gap-2 rounded-[225px] bg-primary px-8 py-3 text-h6 font-medium text-white lg:px-12 lg:py-4">
            Explore
            <img src={arrow} alt="" />
          </button>
        </div>
        <img
          src={orders}
          alt=""
          className="lg:h-[333px] lg:w-[500px] xl:h-[500px] xl:w-[750px]"
        />
      </div>
    </motion.section>
  );
};

export default Explore;
