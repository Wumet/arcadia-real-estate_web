import { Link } from "react-router-dom";
import PropertyCard from "../PropertyCard";
import { FaArrowRight } from "react-icons/fa6";
import H1 from "../H1";
import properties from "../../data/properties";

function FeaturedProperties() {
  const featured = properties.filter((p) => p.tag === "Hot Listing");
  return (
    <section className="py-10 2xl:py-14 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 md:space-y-12">
      <div className="flex justify-between items-center">
        <H1 label="Featured Properties" title="Land in Fast-Growing Areas" />
        <Link
          to="/properties"
          className="text-sm text-accent flex items-center gap-3 max-sm:hidden"
        >
          <span>Browse all Properties</span>
          <FaArrowRight className="opacity-80" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {featured.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

        <Link
          to="/properties"
          className="mt-10 text-sm text-accent flex items-center justify-center py-4 gap-3 sm:hidden border border-accent rounded-md"
        >
          <span>Browse all Properties</span>
          <FaArrowRight className="opacity-80" />
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProperties;
