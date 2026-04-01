import { IoMdCloseCircleOutline } from "react-icons/io";

function Modal({ isOpen, onClose, title, subtitle, children }) {
  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center">
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="flex justify-between">
            <h1 className="text-xl sm:text-2xl xl:text-3xl font-[510]">
              {title}
            </h1>
            <button
              onClick={onClose}
              className="-translate-y-4 text-xl text-red-500/70"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <p className="max-sm:text-xs sm:mt-1 font-light">{subtitle}</p>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
