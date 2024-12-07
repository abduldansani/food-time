import restaurant from "../assets/icons/restaurant.svg";
import order from "../assets/icons/order.svg";
import deliver from "../assets/icons/deliver.svg";

const Benefits = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-2 xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 p-8 hover:bg-primary hover:bg-opacity-5 rounded-2xl"
          >
            <img src={benefit.icon} alt="" className="w-[75px] h-[90px]" />
            <h3 className="text-size-30 leading-[140%] font-semibold">
              {benefit.title}
            </h3>
            <p className="text-paragraph leading-[160%] text-paragraph-1">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
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
