import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";
import app from "../assets/images/app.png";

const DownloadApp = () => {
  return (
    <section className="bg-secondary bg-opacity-10 py-10">
      <div className="container mx-auto px-2 xl:max-w-7xl flex gap-7 items-center justify-between flex-col lg:flex-row">
        <div className="space-y-3 text-center lg:text-left">
          <div className="text-size-30 lg:text-size-40 font-bold text-primary">
            Put us in your pocket
          </div>
          <p className="text-size-18 lg:text-size-20 font-medium text-paragraph1">
            Download our app from google play or app store and you don’t have to
            be worry about your food anymore.{" "}
          </p>
          <div className="flex gap-5 justify-center">
            <img
              src={appstore}
              alt=""
              className="w-[150px] h-[57px] sm:w-[181px] sm:h-[68px] xl:w-[236px] xl:h-[88px] "
            />
            <img
              src={googleplay}
              alt=""
              className="w-[150px] h-[57px] sm:w-[181px] sm:h-[68px] xl:w-[236px] xl:h-[88px] "
            />
          </div>
        </div>
        <img
          src={app}
          alt=""
          className="lg:w-[593px] lg:h-[395px] xl:w-[711px] xl:h-[474px] "
        />
      </div>
    </section>
  );
};

export default DownloadApp;
