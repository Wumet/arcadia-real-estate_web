function Stats() {
  const STATS = [
    { value: "100%", label: "Asset-Backed Investments" },
    { value: "200+", label: "Land Units Allocated" },
    { value: "94%", label: "Investor Re-Participation Rate" },
  ];

  return (
    <section className="px-6 sm:px-16 lg:px-32 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col max-sm:gap-8 sm:flex-row flex-wrap justify-between text-center">
        {STATS.map((s) => (
          <div key={s.label} className="space-y-2">
            <p className="text-4xl sm:text-[44px] font-semibold text-secondary">
              {s.value}
            </p>
            <p className="max-sm:text-sm text-secondary">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
