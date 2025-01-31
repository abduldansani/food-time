import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";
import app from "../assets/images/app.png";
import { motion } from "motion/react";

const DownloadApp = () => {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-secondary bg-opacity-10 py-10"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-7 px-2 lg:flex-row xl:max-w-7xl">
        <div className="space-y-3 text-center lg:text-left">
          <div className="text-size-30 font-bold text-primary lg:text-size-40">
            Put us in your pocket
          </div>
          <p className="text-size-18 font-medium text-paragraph1 lg:text-size-20">
            Download our app from google play or app store and you don’t have to
            be worry about your food anymore.{" "}
          </p>
          <div className="flex justify-center gap-5">
            <img
              src={appstore}
              alt=""
              className="h-[57px] w-[150px] sm:h-[68px] sm:w-[181px] xl:h-[88px] xl:w-[236px]"
            />
            <img
              src={googleplay}
              alt=""
              className="h-[57px] w-[150px] sm:h-[68px] sm:w-[181px] xl:h-[88px] xl:w-[236px]"
            />
          </div>
        </div>
        <img
          src={app}
          alt=""
          className="lg:h-[395px] lg:w-[593px] xl:h-[474px] xl:w-[711px]"
        />
      </div>
    </motion.section>
  );
};

export default DownloadApp;
