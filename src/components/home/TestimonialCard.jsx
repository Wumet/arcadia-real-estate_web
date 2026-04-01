import { FaStar } from "react-icons/fa6";

function TestimonialCard({ t }) {
  return (
    <div className="h-fit bg-card p-4 sm:p-6 rounded-xl drop-shadow-2xl drop-shadow-gray-700/5 grow space-y-4 2xl:space-y-6 overflow-hidden">
      <div className="flex gap-1 items-center text-primary-500 text-xl">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="font-light">{t.testimony}</p>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full border"></div>
        <div className="">
          <p className="text-sm">{t.user}</p>
          <p className="opacity-60 text-[10px] font-light uppercase">
            {t.occupation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
