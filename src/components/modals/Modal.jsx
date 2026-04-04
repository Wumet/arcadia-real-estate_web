import { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Modal({ isOpen, onClose, title, subtitle, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="px-6 fixed inset-0 z-50 bg-black/60 flex justify-center items-center"
      onClick={onClose} // click outside closes
    >
      <div
        className="bg-neutral-100 p-6 sm:p-8 xl:p-10 rounded-xl sm:max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-medium">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1 text-sm xl:text-base font-light">{subtitle}</p>
            )}
          </div>
          <button onClick={onClose} className="text-red-500/70 text-2xl">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
