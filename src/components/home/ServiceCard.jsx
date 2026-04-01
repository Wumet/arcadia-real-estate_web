import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCard({ service }) {
  return (
    <div className="md:h-100 bg-card drop-shadow-xl drop-shadow-neutral-100 grow overflow-hidden rounded-xl bg-[url(./assets/hero.png)] bg-center bg-cover text-white">
      <div className="flex flex-col gap-2 justify-end p-4 md:p-6 lg:p-8 w-full h-full bg-linear-to-t from-black from-15% to-black/0">
        <h4 className="text-xl sm:text-2xl font-medium">{service.title}</h4>
        <p className="text-sm opacity-80">{service.description}</p>
        <Button
          size="md"
          label={service.buttonLabel}
          extraClass="!bg-transparent !text-accent !mt-2 !px-0"
          Icon={FaArrowRight}
        />
      </div>
    </div>
  );
}

export default ServiceCard;
