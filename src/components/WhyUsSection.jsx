import H1 from "./H1";

const POINTS = [
  { n: "01", title: "Verified land documentation" },
  { n: "02", title: "Strategic land locations" },
  { n: "03", title: "Transparent allocation process" },
  { n: "04", title: "Dedicated investor support" },
];

/**
 * “Why Investors Choose Arcadia”)
 */
function WhyUsSection() {
  return (
    <section className="py-10 sm:py-14 2xl:py-20 px-6 sm:px-10 xl:px-40 2xl:px-50">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 xl:gap-[72px] items-center">
        <div className="w-full lg:flex-1 space-y-8 lg:space-y-14">
          <H1
            label="Why us?"
            title={
              <>
                Why Investors <br /> Choose Arcadia
              </>
            }
          />
          {/* points */}
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-10">
            {POINTS.map((p) => (
              <article key={p.n} className="space-y-4 max-w-[247px]">
                <div className="relative grid place-items-center size-12 sm:size-16 rounded-full bg-foreground">
                  <span className="sm:text-xl font-bold italic text-accent leading-none">
                    {p.n}
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-medium text-foreground leading-snug">
                  {p.title}
                </p>
              </article>
            ))}
          </div>
        </div>
        {/* image */}
        <div className="max-sm:hidden h-full w-full sm:w-1/3 lg:w-[min(100%,505px)] shrink-0">
          <div className="relative rounded-[25px] overflow-hidden aspect-[505/560] max-h-[70vh]">
            <img
              src="https://res.cloudinary.com/do36hdyrf/image/upload/v1775165072/cytonn-photography-vWchRczcQwM-unsplash_hkmqhl.jpg"
              alt="Aerial view of development and green landscape"
              className="absolute inset-0 size-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black/20 pointer-events-none"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
