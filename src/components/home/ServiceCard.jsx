import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCard({ service }) {
  return (
    <div className="max-sm:grid max-sm:grid-cols-2 gap-4 h-fit rounded-xl pb-6 grow space-y-2 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="bg-cover h-60 xl:h-100 w-full bg-center"
      />
      <div className="space-y-2">
        <h4 className="text-xl xl:text-xl font-bold ">{service.title}</h4>
        <p className="text-neutral-600 font-light">{service.description}</p>
        <Button
          size="md"
          label={service.buttonLabel}
          extraClass="!bg-transparent !text-accent !px-0 hover:!text-primary-600"
          Icon={FaArrowRight}
          to={service.path}
        />
      </div>
    </div>
  );
}

export default ServiceCard;

// import { FaArrowRight } from "react-icons/fa6";

// function ServiceCard({ service }) {
//   return (
//     <div className="h-70 md:h-100 2xl:h-120 bg-card drop-shadow-xl drop-shadow-neutral-100 grow overflow-hidden rounded-xl bg-cover text-white hover:scale-105 transition-all duration-300">
//       <div className="flex flex-col gap-2 justify-end p-4 md:p-6 lg:p-8 w-full h-full bg-linear-to-t from-black from-15% to-black/0">
//         <h4 className="text-[18px] xl:text-[22px] font-semibold">
//           {service.title}
//         </h4>
//         <p className="text-sm opacity-80">{service.description}</p>
//         <Button
//           size="md"
//           label={service.buttonLabel}
//           extraClass="!bg-transparent !text-accent !px-0 hover:!text-primary-600"
//           Icon={FaArrowRight}
//           to={service.path}
//         />
//       </div>
//     </div>
//   );
// }

// export default ServiceCard;
