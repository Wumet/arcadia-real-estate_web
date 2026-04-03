import { Link } from "react-router-dom";
import Button from "../Button";

function Hero() {
  return (
    <section className="z-10 borderx pt-6 sm:pt-14 2xl:pt-20 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 md:space-y-12">
      {/* <div className="flex flex-row-reverse justify-between items-center ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="xl:w-2/5 h-[40vh] rounded-md object-fill"
        >
          <source
            src="https://res.cloudinary.com/do36hdyrf/video/upload/v1775033396/heroVideo1-compressed_evqjcj.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="mt-6 space-y-2 sm:space-y-4  flex flex-col">
          <h1 className="max-sm:text-4xl text-5xl 2xl:text-6xl font-bold leading-14 md:leading-18 xl:leading-22">
            Own Land.
            <br className="" /> Build Wealth.
          </h1>
          <p className="sm:text-xl 2xl:text-2xl opacity-90 font-light max-w-120">
            Secure prime estate plots positioned for appreciation, structured
            returns, and long-term wealth.
          </p>
          <div className="mt-2">
            <Button
              to="/properties"
              label="Browse Properties"
              variant="primary"
            />
          </div>
        </div>
      </div> */}
      <div className="relative rounded-md h-[40vh] md:h-[60vh] flex justify-center items-center py-20 max-sm:px-6 text-neutral-300 z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full absolute object-fill rounded-xl"
        >
          <source
            src="https://res.cloudinary.com/do36hdyrf/video/upload/v1775033396/heroVideo1-compressed_evqjcj.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/80 via-40%  to-black/0"></div>
        <div className="relative z-20 space-y-4 sm:space-y-6 text-center flex flex-col items-center">
          <h1 className="max-sm:text-5xl text-6xl 2xl:text-7xl font-[510] leading-14 md:leading-18">
            Own Land.
            <br className="sm:hidden" /> Build Wealth.
          </h1>
          <p className="sm:text-xl 2xl:text-2xl opacity-90 font-light">
            Secure prime estate plots positioned for appreciation,
            <br className="max-sm:hidden" />
            structured returns, and long-term wealth.
          </p>
          <div className="mt-2">
            <Button
              to="/properties"
              label="Browse Properties"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
