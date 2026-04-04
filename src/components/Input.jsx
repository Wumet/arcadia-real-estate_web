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
        className={`mt-2 border-[0.5px] border-neutral-500 rounded-md p-4 h-fit w-full focus:outline-none focus:border focus:border-primary-600 ${extraClass}`}
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
