import arrow from "../assets/icons/arrow.svg";
import orders from "../assets/images/orders.png";

const Explore = () => {
  return (
    <section className="bg-secondary bg-opacity-5 py-10">
      <div className="container mx-auto xl:max-w-7xl px-2 flex items-center flex-col-reverse lg:flex-row justify-between">
        <div className="space-y-6">
          <h2 className="text-size-40 xl:text-size-50 font-merienda leading-[130%] text-primary">
            Explore your favourite city’s food.
          </h2>
          <p className="text-size-18 text-paragraph1 leading-[160%]">
            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
            tristique. Non ligula tristique ut ut libero sit convallis maecenas.
            At egestas auctor porta mattis.
          </p>
          <button className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-8 lg:py-4 lg:px-12 rounded-[225px] text-h6 font-medium">
            Explore
            <img src={arrow} alt="" />
          </button>
        </div>
        <img
          src={orders}
          alt=""
          className="lg:w-[500px] lg:h-[333px] xl:w-[750px] xl:h-[500px]"
        />
      </div>
    </section>
  );
};

export default Explore;
