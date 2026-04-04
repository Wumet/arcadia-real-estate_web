import ServiceCard from "./ServiceCard";
import H1 from "../H1";

function Services() {
  const services = [
    {
      id: "1",
      title: "Property Sales",
      description: "Strategically located plots in high-growth areas.",
      image:
        "https://res.cloudinary.com/do36hdyrf/image/upload/houseminature_ervknw.jpg",
      buttonLabel: "Browse Properties",
      path: "/properties",
    },
    {
      id: "2",
      title: "Buyback Program",
      description: "Buy land today, sell back within a fixed period.",
      image:
        "https://res.cloudinary.com/do36hdyrf/image/upload/cytonn-photography-vWchRczcQwM-unsplash_hkmqhl.jpg",
      buttonLabel: "Learn More",
      path: "/buyback",
    },
    {
      id: "3",
      title: "BulkBuy Opportunity",
      description:
        "Unlock wholesale pricing, higher ROI, and priority allocation.",
      image:
        "https://res.cloudinary.com/do36hdyrf/image/upload/land1_ijzxrj.jpg",
      buttonLabel: "Learn More",
      path: "/bulkbuy",
    },
  ];
  return (
    <section
      id="services"
      className="py-10 sm:py-14 xl:py-20  px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12"
    >
      <div className="flex max-sm:flex-col justify-between sm:items-center">
        <H1 label="Our Services" title="Investment Strategies" />
        <p className="xl:text-xl text-neutral-600 text-rightx">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam
          sit amet diam elit.
        </p>
      </div>
      <div className="max-md:space-y-6 md:grid md:grid-cols-3 gap-4 xl:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} to={service.path} />
        ))}
      </div>
    </section>
  );
}

export default Services;
