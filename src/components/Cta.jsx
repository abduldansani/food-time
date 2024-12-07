import chef from "../assets/images/chef.png";
import arrow from "../assets/icons/arrow.svg";

const Cta = () => {
  return (
    <section className="pb-28">
      <div className="container mx-auto xl: max-w-7xl px-2">
        <div
          className="relative flex px-2 justify-center items-end pb-12 h-[827.13px] bg-no-repeat bg-center bg-cover rounded-[50px]"
          style={{ backgroundImage: `url(${chef})` }}
        >
          <div className="flex flex-col gap-5 text-white font-bold items-center text-center">
            <div className="text-size-30 lg:text-size-40">
              Want to be a part of Foodtime?
            </div>
            <p className="font-semibold text-size-18 sm:text-size-20 lg:text-size-24">
              List your restaurant or shop on foodtime.
            </p>
            <button className="flex items-center justify-center gap-2 rounded-[120px] py-3 px-8 lg:py-4 lg:px-12 font-medium text-size-20 md:text-size-22 bg-secondary text-white">
              Get started
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
