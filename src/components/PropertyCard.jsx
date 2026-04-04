import { Link } from "react-router-dom";
import Button from "./Button";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

function PropertyCard({ property }) {
  // const tagVariants = {
  //   default: "bg-primary-900 text-primary-100",
  //   hot: "bg-accent text-dark",
  //   new: "bg-secondary-600 text-neutral-900",
  // };
  return (
    <div className="pb-4 p-2 drop-shadow-xl drop-shadow-neutral-100 grow overflow-hidden rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100">
      <div className="relative ">
        <img
          src={property.images.hero}
          alt={property.propertyName}
          className="bg-cover max-xl:h-80 xl:h-90 w-full bg-center rounded-xl"
        />
        {/* <p
          className={`text-xs w-fit h-fit rounded-sm px-2 py-1 ${tagVariants[tagVariant]} absolute inset-4`}
        >
          {property.tag}
        </p> */}
      </div>
      <div className="divide-y-[0.5px] divide-neutral-300 pt-4 pb-2 px-4x">
        <div className="flex justify-between pb-4">
          <div className="space-y-1">
            <h4 className="text-[18px] xl:text-[22px] font-mediumx text-nowrap">
              {property.propertyName}
            </h4>
            <p className="flex items-center gap-1 text-[10px] md:text-sm xl:text-[16px] text-neutral-600 font-normal text-nowrap">
              <FaLocationDot className="text-primary-500" />
              <span> {property.location}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4">
          <div className="">
            <p className="text-[12px] font-light">Starting Price</p>
            <p className="font-semibold text-xl xl:text-2xl">
              {property.startingPrice}
            </p>
          </div>
          <div className="shrink">
            <Button
              to={`/property/${property.id}/${property.propertyName.replace(/\s+/g, "-").toLowerCase()}`}
              variant="primary"
              size="md"
              label="View Property"
              Icon={FaArrowRight}
              extraClass="!bg-foreground !text-primary-500 !w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
