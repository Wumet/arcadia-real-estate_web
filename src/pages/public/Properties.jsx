import H1 from "../../components/H1";
import PropertyCard from "../../components/PropertyCard";
import properties from "../../data/properties";
import Services from "../../components/home/Services";
import Button from "../../components/Button";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Properties() {
  return (
    <main className="pt-6">
      <section className="sm:py-14 px-6 sm:px-20 xl:px-40 2xl:px-50 space-y-4 sm:space-y-6 lg:space-y-12">
        <div>
          <H1 title="Available Land Opportunities" />
          <p>
            Explore strategically located land assets across high-growth
            corridors.
          </p>
        </div>
        {/* search & filter */}
        {/* <div className="rounded-xl border border-gray-300 sm:w-5/6 p-6">
          <input type="search" name="" id="" />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="pt-10 px-6 sm:px-28 xl:px-40 2xl:px-50 md:py-10 2xl:pt-20 space-y-3 sm:space-y-6 flex flex-col items-center">
        <H1
          title="Ready to secure a property?"
          label="Contact Us"
          textAlign="center"
          extraClass="!text-2xl sm:leading-10 sm:!text-[40px] 2xl:text-[54px]"
        />
        <p className="text-sm sm:text-[18px] mb-6 text-center">
          Speak with our team to identify the land opportunity
          <br aria-hidden className="max-sm:hidden" /> that aligns with your
          investment goals.
        </p>
        {/* contact details */}
        <div className="max-sm:space-y-4 sm:flex gap-4 items-center">
          <p className="flex items-center justify-center gap-2 border border-gray-300 p-4 rounded-md h-20">
            <span className="bg-accent/20 p-2 rounded-full">
              <MdOutlineMail className="text-accent text-xl " />
            </span>
            Hello@arcadiang.com
          </p>
          <p className="flex items-center justify-center gap-2 border border-gray-300 p-4 rounded-md h-20">
            <span className="bg-accent/20 p-2 rounded-full">
              <FiPhone className="text-accent text-xl " />
            </span>
            +2348101319125
          </p>
        </div>
      </section>

      {/* services */}
      <div className="">
        <Services />
      </div>
    </main>
  );
}

export default Properties;
