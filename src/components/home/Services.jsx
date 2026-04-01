import ServiceCard from "./ServiceCard";
import propertyImage from "../../assets/heroImage.jpg";
import buyBackImage from "../../assets/heroImage.jpg";
import bulkBuyImage from "../../assets/heroImage.jpg";

function Services() {
  const services = [
    {
      id: "1",
      title: "Property Sales",
      description: "Strategically located plots in high-growth areas.",
      image: { propertyImage },
      buttonLabel: "Browse Properties",
    },
    {
      id: "2",
      title: "Buyback Program",
      description: "Buy land today, sell back within a fixed period.",
      image: { buyBackImage },
      buttonLabel: "Learn More",
    },
    {
      id: "3",
      title: "BulkBuy Opportunity",
      description:
        "Unlock wholesale pricing, higher ROI, and priority allocation.",
      image: { bulkBuyImage },
      buttonLabel: "Learn More",
    },
  ];
  return (
    <section className="py-10 sm:py-14 2xl:py-20  px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510] text-center">
        Choose Your Investment Strategy
      </h1>
      <div className="space-y-6 md:grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
