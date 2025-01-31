import restaurant from "../assets/icons/restaurant.svg";
import order from "../assets/icons/order.svg";
import deliver from "../assets/icons/deliver.svg";

import { motion } from "motion/react";

const Benefits = () => {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-28"
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 rounded-2xl p-8 hover:bg-primary hover:bg-opacity-5"
          >
            <img src={benefit.icon} alt="" className="h-[90px] w-[75px]" />
            <h3 className="text-size-30 font-semibold leading-[140%]">
              {benefit.title}
            </h3>
            <p className="text-paragraph-1 text-paragraph leading-[160%]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const benefits = [
  {
    icon: restaurant,
    title: "Wide selection of restaurants",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.",
  },
  {
    icon: order,
    title: "Easy ordering process",
    description: "Lorem ipsum dolor sit amet consectetur. Ornare massa nunc .",
  },
  {
    icon: deliver,
    title: "Fast delivery within 20 min",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh.",
  },
];
export default Benefits;
