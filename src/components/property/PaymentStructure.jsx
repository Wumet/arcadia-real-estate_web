import { FaCartArrowDown, FaLocationDot } from "react-icons/fa6";
import H1 from "../H1";
import Button from "../Button";

function PropertyHero({ property }) {
  const monthlyInstallments = property.paymentStructure.monthly;
  const weeklyInstallments = property.paymentStructure.weekly;

  return (
    <section className="py-10 xl:py-14 px-6 sm:px-10 xl:px-40 2xl:px-50 sapce-y-6 md:space-y-10 xl:space-y-14 ">
      <H1 title="Payment Structure" textAlign="center" />
      <div className="space-y-4 md:space-y-8">
        {/* outright payment */}
        <div className="p-6 bg-foreground rounded-xl text-background flex max-sm:flex-col sm:justify-between sm:items-center gap-4">
          {/* left */}
          <div className="flex max-sm:flex-col sm:items-center gap-3">
            <div className="flex items-center justify-center size-12 bg-primary-500/20 rounded-full max-sm:hidden">
              <FaCartArrowDown className="text-primary-500 text-xl" />
            </div>
            <div className="space-y-1">
              <h4 className="font-medium font-xl sm:text-2xl">
                Outright Purchase
              </h4>
              <p className="text-sm opacity-70">
                Pay in full and get immediate physical allocation
              </p>
            </div>
          </div>
          {/*middle- price */}
          <div className="sm:text-center">
            <h4 className="font-semibold font-xl sm:text-2xl text-accent">
              {property.paymentStructure.outright.price}
            </h4>
            <p className="text-xs uppercase opacity-70 mt-1">Final price</p>
          </div>
          {/* right-cta */}
          <Button
            label={property.paymentStructure.outright.cta}
            size="md"
            extraClass="max-sm:mt-2! max-sm:w-full!"
          />
        </div>
        {/* monthly payment */}
        <div className="p-6 rounded-xl bg-white">
          <h4 className="font-medium font-xl sm:text-2xl">
            Monthly Installments
          </h4>
          <p />
          {/* table */}
          <div className="">
            <div className="">
              <div className="mt-4 p-3 sm:p-4 grid grid-cols-3 gap-4 text-[9px] sm:text-base text-foreground/60 bg-[#f0f0f0]">
                <div>Duration</div>
                <div className="text-center">Total Price</div>
                <div className="text-center opacity-0">Action</div>
              </div>
              {monthlyInstallments.map((installment, idx) => (
                <div
                  key={installment.duration}
                  className="py-2 sm:p-6 text-xs sm:text-[18px] xl:text-[22px] text-foreground flex gap-4 items-center font-semibold border-b-[.5px] border-neutral-300"
                >
                  <div className="flex-1">{installment.duration}</div>
                  <div className="flex-1">{installment.totalPrice}</div>
                  <Button
                    label={installment.cta}
                    variant="outline"
                    size="md"
                    extraClass="border-accent! text-accent!"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* weekly payment */}
        <div className="p-4 sm:p-6 rounded-xl bg-white">
          <h4 className="font-medium font-xl sm:text-2xl">
            Weekly Installments
          </h4>
          {/* table */}
          <div className="">
            <div className="">
              <div className="mt-4 p-3 sm:p-4 grid grid-cols-3 gap-4 text-[9px] sm:text-base text-foreground/60 bg-[#f0f0f0]">
                <div>Duration</div>
                <div className="text-center">Weekly payment</div>
                <div className="text-center opacity-0">Action</div>
              </div>
              {weeklyInstallments.map((installment, idx) => (
                <div
                  key={installment.duration}
                  className="py-2 sm:p-6 text-xs sm:text-[18px] xl:text-[22px] text-foreground flex gap-4 items-center font-semibold border-b-[.5px] border-neutral-300"
                >
                  <div className="flex-1">{installment.duration}</div>
                  <div className="flex-1">{installment.weeklyPayment}</div>
                  <Button
                    label={installment.cta}
                    variant="outline"
                    size="md"
                    extraClass="border-accent! text-accent!"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyHero;
