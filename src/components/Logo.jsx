import time from "../assets/icons/time.svg";
const Logo = ({ colored }) => {
  return (
    <div className="flex">
      <div className={`text-[28px] text-${colored ? "primary" : "white"} `}>
        <span className="font-merienda font-bold">Food</span>
        <span className="font-poppins font-medium">Time</span>
      </div>
      <img src={time} alt="" className="w-2.5 h-4" />
    </div>
  );
};

export default Logo;
