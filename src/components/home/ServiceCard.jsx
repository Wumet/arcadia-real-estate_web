import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCard({ service }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 rounded-xl overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-xl w-full h-full sm:h-50 xl:h-80 bg-center"
        />
        <div className="rounded-xl absolute inset-0 bg-primary-800/30"></div>
      </div>
      {/* Text */}
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h4 className="text-lg xl:text-2xl font-bold">{service.title}</h4>
          <p className="text-xs sm:text-base font-light">
            {service.description}
          </p>
        </div>

        <Button
          size="md"
          label={service.buttonLabel}
          extraClass="!bg-transparent !text-accent !px-0 hover:!text-primary-600 mt-4"
          Icon={FaArrowRight}
          to={service.path}
        />
      </div>
    </div>
  );
}
export default ServiceCard;
