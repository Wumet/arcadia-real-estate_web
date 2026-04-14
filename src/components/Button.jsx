import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  to,
  onClick,
  label,
  extraClass = "",
  baseClass = "w-fit font-medium flex items-center justify-center gap-2 rounded-md transition-color duration-50 cursor-pointer text-nowrap",
  variant = "primary",
  size = "lg",
  Icon,
}) {
  const variants = {
    primary: "bg-primary-400 text-primary-900 hover:bg-primary-500",
    secondary:
      "bg-secondary-500 text-secondary-900 hover:bg-primary-500 hover:text-neutral-100",
    tertiary: "bg-primary-500/10",
    outline: "border border-foreground text-foreground",
  };
  const sizes = {
    lg: "px-6 py-4 text-[16px] h-[48px] xl:h-[56px]",
    md: "px-3 py-2 text-[14px] sm:text-base h-[38px] sm:h-[40px]",
    sm: "p-1 text-xs h-[32px]",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClass} ${sizes[size]} ${variants[variant]} ${extraClass}`}
      >
        {label}
        <span className="text-xs">{Icon && <Icon />}</span>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${sizes[size]} ${variants[variant]} ${extraClass}`}
    >
      {label}
      <span className="text-xs">{Icon && <Icon />}</span>
    </button>
  );
}

export default Button;
