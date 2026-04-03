function H1({ title, label, textAlign = "left", extraClass }) {
  return (
    <div className={`${textAlign === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <p className="w-full">
          <span className="bg-accent/10 w-fit px-3 py-2 rounded-full text-xs text-accent uppercase font-semibold">
            {label}
          </span>
        </p>
      )}

      <h1
        className={`mt-2 text-[28px] sm:text-[32px] 2xl:text-[40px] font-bold leading-8 sm:leading-12 capitalize xl:leading-16 ${extraClass}`}
      >
        {title}
      </h1>
    </div>
  );
}

export default H1;
