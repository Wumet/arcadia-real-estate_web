function Input({
  label,
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
      <label className="pl-2 opacity-70 font-medium text-sm">{label}</label>
      <input
        className={`mt-2 border-[0.5px] rounded-md p-4 h-fit w-full focus:outline-none focus:border focus:border-primary-500 ${extraClass}`}
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
