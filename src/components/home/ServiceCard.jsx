import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCard({ service, children }) {
  return (
    <div className="flex gap-4 sm:gap-6 2xl:gap-8 p-4 md:p-8 bg-card drop-shadow-xl drop-shadow-neutral-100 grow overflow-hidden rounded-xl">
      <img
        src={service.image}
        alt=""
        className="bg-cover max-sm:h-60 xl:h-80 w-full bg-center rounded-lg"
      />
      <div className="space-y-3">
        <h4 className="text-xl sm:text-2xl font-medium">{service.title}</h4>
        <p className="max-sm:text-sm">{service.description}</p>
        <p>{children}</p>
        <Button
          size="md"
          label={service.buttonLabel}
          extraClass="!w-[180px] !mt-6"
          Icon={FaArrowRight}
        />
      </div>
    </div>
  );
}

export default ServiceCard;
