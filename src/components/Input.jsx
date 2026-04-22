function Input({
  label,
  htmlFor,
  type,
  id,
  name,
  placeholder,
  extraClass,
  value,
  onChange,
  required,
  min,
  step,
}) {
  return (
    <div className="">
      <label htmlFor={htmlFor} className="pl-2 opacity-70 font-medium text-sm">
        {label}
      </label>
      <input
        className={`mt-2 bg-neutral-100 rounded-md p-3 lg:p-4 h-fit w-full focus:outline-none focus:border-[0.5px] focus:border-primary-800 ${extraClass}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        step={step}
      />
    </div>
  );
}

export default Input;
