import H1 from "../components/H1";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import Services from "../components/home/Services";
import Button from "../components/Button";

function Properties() {
  return (
    <main className="pt-4 sm:py-14 2xl:py-20 ">
      {/* search & filter */}
      <div className="rounded-xl border border-gray-300 sm:w-5/6 mx-6 p-6">
        <input type="search" name="" id="" />
      </div>

      {/* properties */}
      <section className="pt-5 pb-10 sm:py-10 px-6 sm:px-20 xl:px-40 2xl:px-50 space-y-6 lg:space-y-12">
        <div>
          <H1 title="Available Land Opportunities" />
          <p>
            Explore strategically located land assets across high-growth
            corridors.
          </p>
        </div>
        <div className="max-sm:space-y-6 sm:grid grid-cols-3 gap-4 xl:gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="py-6 sm:py-16 px-6 sm:px-28 xl:px-40 2xl:px-50 space-y-6 flex flex-col items-center bg-[#f0f0f0]">
        <H1
          title="Ready to Secure a Property?"
          label="Contact Us"
          textAlign="center"
          extraClass="!text-3xl leading-10 sm:!text-[40px] 2xl:text-[54px]"
        />
        <p className="sm:text-[18px] mb-6 text-center">
          Speak with our team to identify the land opportunity
          <br aria-hidden className="max-sm:hidden" /> that aligns with your
          investment goals
        </p>
        <Button label="Contact Us" extraClass="max-sm:!w-full !w-[320px]" />
      </section>

      {/* services */}
      <div className="">
        <Services />
      </div>
    </main>
  );
}

export default Properties;
