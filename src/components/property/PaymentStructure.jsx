import { FaLocationDot } from "react-icons/fa6";
import H1 from "../H1";
import Button from "../Button";

function PropertyHero({ property }) {
  return (
    <section className="py-10 sm:py-14 2xl:py-20 px-6 sm:px-10 xl:px-40 2xl:px-50 sapce-y-6 md:space-y-10 xl:space-y-14 ">
      <H1
        title="Payment Structure"
        extraClass="md:!text-4xl"
        textAlign="center"
      />
      <div className="space-y-4 md:space-y-8">
        {/* outright payment */}
        <div className="p-6 bg-foreground rounded-xl text-background flex justify-between">
          {/* left */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-background rounded-full"></div>
            <div className="">
              <p className="font-bold font-xl">Outright Purchase</p>
              <p className="text-sm opacity-70">
                Pay in full and get immediate physical allocation
              </p>
            </div>
          </div>
          {/*middle- price */}
          <div className="text-center">
            <H1
              title={property.paymentStructure.outright.price}
              extraClass="!text-2xl !text-accent"
            />
            <p className="text-sm uppercase font-medium opacity-70">
              Final price
            </p>
          </div>
          {/* right-cta */}
          <Button
            label={property.paymentStructure.outright.cta}
            size="md"
            extraClass="!bg-background"
          />
        </div>
        {/* monthly payment */}
        <div className="p-6 rounded-xl bg-white">
          <p className="font-bold font-xl">Monthly Installments</p>
          <p />
        </div>
      </div>
    </section>
  );
}

export default PropertyHero;
