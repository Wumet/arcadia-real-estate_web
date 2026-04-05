import properties from "../../data/properties";
import PropertyHero from "../../components/property/PropertyHero";
import PaymentStructure from "../../components/property/PaymentStructure";
import { useParams } from "react-router-dom";

function Property() {
  const { id } = useParams();
  console.log(id);
  const property = properties.find((p) => String(p.id) === id);

  if (!property) {
    return (
      <main className="p-8">
        <p>Property not found.</p>
      </main>
    );
  }

  return (
    <>
      <main className="">
        <PropertyHero property={property} />
        <PaymentStructure property={property} />
      </main>
    </>
  );
}

export default Property;
