import { Link } from "react-router-dom";
import Button from "../Button";

function Hero() {
  return (
    <div className="relative h-[50vh] md:h-[60vh] 2xl:h-[80vh]x flex justify-center items-center py-20 max-sm:px-6 text-neutral-300 z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute object-fill"
      >
        <source
          src="https://res.cloudinary.com/do36hdyrf/video/upload/v1775033396/heroVideo1-compressed_evqjcj.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 via-40%  to-black/0"></div>
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
  );
}

export default Hero;
