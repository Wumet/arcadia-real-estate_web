import ServiceCard from "./ServiceCard";
import propertyImage from "../../assets/ceo.jpg";
import buyBackImage from "../../assets/hero.png";
import bulkBuyImage from "../../assets/hero.png";

function Services() {
  const services = [
    {
      id: "1",
      title: "Property Sales",
      description:
        "Own prime real estate in our fast-growing, high-demand estate locations. These plots are strategically positioned for rapid appreciation and long-term value growth. Don’t wait — prime properties move fast. Secure yours today before prices rise..",
      image: { propertyImage },
      buttonLabel: "Browse Properties",
    },
    {
      id: "2",
      title: "Buyback Program",
      description:
        "Want guaranteed short-term returns? This is your opportunity. Buy today. Sell back to us within a fixed period. Get guaranteed returns. No stress. No market guesswork. This is the smart investor’s shortcut to predictable profits.",
      image: { buyBackImage },
      buttonLabel: "Learn More",
    },
    {
      id: "3",
      title: "BulkBuy Opportunity",
      description:
        "Serious investors don’t buy retail — they buy wholesale. Join our exclusive bulk-buy program and unlock:",
      image: { bulkBuyImage },
      buttonLabel: "Learn More",
    },
  ];
  return (
    <section className="py-10 sm:py-14 2xl:py-20  px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510] text-center">
        Choose Your Investment Strategy
      </h1>
      <div className="space-y-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
