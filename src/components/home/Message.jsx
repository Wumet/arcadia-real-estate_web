import { ImQuotesLeft } from "react-icons/im";
import ceoImage from "../../assets/ceo.jpg";

function Message() {
  return (
    <section className="sm:py-14 2xl:py-20 px-6 sm:pl-10 xl:pl-40 2xl:pl-50 space-y-8 sm:space-y-12 max-sm:flex-col-reverse flex items-center justify-center gap-10 md:gap-14 2xl:gap-20">
      <div className="w-full sm:w-1/3 xl:w-fit h-fit xl:h-140 relative">
        <div className="bg-primary-500 -translate-y-4 translate-x-4 absolute inset-0 -z-10 rounded-xl"></div>
        <img
          src={ceoImage}
          alt="A picture of the CEO"
          className="w-full h-100 xl:h-140 object-cover rounded-xl"
        />
      </div>
      <div className="sm:w-1/2 space-y-5">
        <p className="text-2xl xl:text-3xl font-normal">
          <ImQuotesLeft className="max-sm:text-6xl text-primary-500 mb-6" />
          <span className="text-neutral-700">
            "At Arcadia, we don't just sell properties; we facilitate the
            acquisition of heritage. Every residence in our portfolio is
            selected for its potential to become a cornerstone of your family's
            history."
          </span>
        </p>
        <div className="">
          <p className="text-md font-semibold uppercase">Julian V. Arclight</p>
          <p className="text-accent tracking-tight">
            Founder & CEO, Arcadia Luxury Real Estate
          </p>
        </div>
        <div className="my-4 flex max-sm:justify-between gap-14">
          <div className="">
            <p className="text-xl sm:text-[30px] font-semibold">5000+</p>
            <p className="text-xs sm:text-sm text-gray-500">Plots Allocated</p>
          </div>
          <div className="">
            <p className="text-xl sm:text-[30px] font-semibold">10+</p>
            <p className="text-xs sm:text-sm text-gray-500">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Message;
