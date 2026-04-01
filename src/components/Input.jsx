function Input({ label, type, id, name, placeholder, extraClass }) {
  return (
    <div className="">
      <label>{label}</label>
      <input
        className={`border-[0.5px] rounded-md p-4 h-fit w-full focus:outline-none focus:border focus:border-primary-500 ${extraClass}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
