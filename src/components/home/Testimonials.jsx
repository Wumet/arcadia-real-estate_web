import TestimonialCard from "./TestimonialCard";
import H1 from "../H1";

function Testimonials({ testimonials }) {
  return (
    <section className="py-10 sm:py-14 2xl:py-20 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12">
      <H1
        label="Testimonials"
        title="Succes stories from our Investors "
        textAlign="center"
      />
      <div className="flex gap-4 max-sm:overflow-auto no-scrollbar">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t}></TestimonialCard>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
