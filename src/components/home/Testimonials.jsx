import TestimonialCard from "./TestimonialCard";

function Testimonials({ testimonials }) {
  return (
    <section className="py-14 sm:py-20 2xl:py-30 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510] text-center">
        Trusted by Investors Across Nigeria
      </h1>
      <div className="flex max-sm:flex-col gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t}></TestimonialCard>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
