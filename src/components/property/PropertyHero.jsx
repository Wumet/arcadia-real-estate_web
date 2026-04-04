import { FaLocationDot } from "react-icons/fa6";
import H1 from "../H1";
import Button from "../Button";

function PropertyHero({ property }) {
  return (
    <section className="py-6 sm:py-14 2xl:py-20 px-6 sm:px-10 xl:px-40 2xl:px-50 max-sm:flex flex-col-reverse md:grid grid-cols-2 gap-10 md:gap-20 xl:gap-40">
      {/* image and thumbnails */}
      <div className="h-full">
        <img src={property.images.hero} className="" alt="" />
        <div className=""></div>
      </div>
      {/* left */}
      <div className="space-y-2 md:space-y-4 xl:space-y-6">
        <div className="">
          <H1 title={property.propertyName} extraClass="font-medium!" />
          <p className="flex items-center gap-1 text-sm md:text-[16px] text-neutral-600 font-normal text-nowrap mt-2">
            <FaLocationDot className="text-primary-500" />
            <span> {property.location}</span>
          </p>
        </div>
        {/* starting price */}
        <>
          <p className="text-[12px] uppercase font-light mb-1">
            Starting Price
          </p>
          <H1 title={property.startingPrice} />
        </>
        {/* description */}
        <p className="leading-8">{property.description}</p>
        {/* buttons */}
        <div className="flex gap-6 mt-4">
          <Button label="BUY NOW" extraClass="!uppercase !w-full" size="lg" />
          <Button
            label="subscribe"
            extraClass="!uppercase !w-full"
            size="lg"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyHero;
