import { Link } from "react-router-dom";
import Button from "../Button";
import PropertyCard from "../PropertyCard";
import { FaArrowRight } from "react-icons/fa6";

function FeaturedProperties({ properties }) {
  return (
    <section className="pt-10 sm:pt-14 2xl:pt-20 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 md:space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-[510] leading-14x">
          Land in Fast-Growing Areas
        </h1>
        <Link
          to="/properties"
          className="text-sm text-accent flex items-center gap-3 max-sm:hidden"
        >
          <span>Browse all Properties</span>
          <FaArrowRight className="opacity-80" />
        </Link>
        {/* <div className="">
          <Button
            to="/properties"
            size="md"
            label="Browse All Properties"
            variant="outline"
            Icon={FaArrowRight}
          />
        </div> */}
      </div>
      <div className="max-sm:space-y-6 sm:grid grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

        <Link
          to=""
          className="mt-6 text-sm text-accent flex items-center justify-center py-4 gap-3 sm:hidden border border-accent rounded-md"
        >
          <span>Browse all Properties</span>
          <FaArrowRight className="opacity-80" />
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProperties;
