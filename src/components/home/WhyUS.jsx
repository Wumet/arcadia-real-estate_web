import ServiceCard from "./ServiceCard";
import image from "../../assets/ceo.jpg";

function WhyUs() {
  return (
    <section className="pt-10 sm:pt-14 2xl:pt-20  px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12 flex">
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
          Why Investors <br /> Choose Arcadia
        </h1>
        <div className="space-y-6"></div>
      </div>
      <div className="w-full sm:w-1/3 xl:w-fit h-fit xl:h-140 relative">
        <img
          src={image}
          alt="A picture of the CEO"
          className="xl:h-140 xl:object-cover rounded-xl"
        />
      </div>
    </section>
  );
}

export default WhyUs;
