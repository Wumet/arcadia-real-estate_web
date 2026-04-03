import { FaCircleCheck, FaLocationDot } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { MdBarChart, MdWork } from "react-icons/md";
import Button from "../components/Button";
import WhyUsSection from "../components/WhyUsSection";
import heroImage from "../assets/heroImage.jpg";
import estateImage from "../assets/luxury-estate.png";
import { formatNaira } from "../components/utils/formatNaira";
import H1 from "../components/H1";
import Stats from "../components/Stats";

const HERO_CHECKS = [
  "Low entry price",
  "Higher appreciation potential",
  "Access to multiple acres at discounted rates",
];

const BENEFITS = [
  {
    title: "Wholesale Land Pricing",
    body: "Acquire land at prices normally reserved for developers.",
    Icon: GiLightBulb,
  },
  {
    title: "Strategic Growth Locations",
    body: "Land located in areas experiencing rapid infrastructure and economic growth.",
    Icon: MdBarChart,
  },
  {
    title: "Portfolio-Level Ownership",
    body: "Buy multiple acres and build a long-term real estate portfolio.",
    Icon: MdWork,
  },
];

const FEATURED = [
  {
    id: "1",
    image: heroImage,
    price: 3_500_000,
    location: "Ibeju-Lekki, Lagos",
    infrastructure: [
      "Dangote Refinery",
      "Lekki Deep Sea Port",
      "Lekki Free Trade Zone",
      "Coastal Highway",
    ],
  },
  {
    id: "2",
    image: estateImage,
    price: 1_800_000,
    location: "Epe, Lagos",
    infrastructure: [
      "Proposed International Airport",
      "Lagos Food Logistics Hub",
      "Epe Marina Development",
      "Major Road Expansion",
    ],
  },
  // {
  //   id: "3",
  //   image: heroImage,
  //   price: 1_200_000,
  //   location: "Sagamu Interchange, Ogun State",
  //   infrastructure: [
  //     "Major Road Expansion",
  //     "Lagos-Ibadan Expressway",
  //     "Ogun Industrial Parks",
  //     "Regional logistics corridor",
  //   ],
  // },
];

const STEPS = [
  {
    n: "01",
    title: "Submit Expression of Interest",
    body: "Indicate the acreage and location you are interested in.",
  },
  {
    n: "02",
    title: "Speak With Our Investment Team",
    body: "Review available allocations and documentation.",
  },
  {
    n: "03",
    title: "Secure Your Land Allocation",
    body: "Confirm acreage and complete documentation.",
  },
  {
    n: "04",
    title: "Hold for Appreciation or Develop",
    body: "Retain for long-term value growth or develop strategically.",
  },
];

function BulkBuy() {
  return (
    <main className="">
      {/* Hero */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-4 sm:py-14 2xl:py-20 sm:text-lg ">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-10 xl:gap-16 2xl:gap-20 items-center justify-center">
          {/* left */}
          <div className="w-full lg:max-w-[540px] shrink-0">
            <div className="max-sm:hidden relative rounded-xl overflow-hidden xl:aspect-[480/640] max-sm:h-20 max-lg:h-40 lg:max-h-[50vh] xl:max-h-[60vh] w-full">
              <img
                src="https://res.cloudinary.com/do36hdyrf/image/upload/v1775165931/ariel3_fx1ljy.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black/15 pointer-events-none"
                aria-hidden
              />
            </div>
          </div>
          {/* right */}
          <div className="flex-1 w-full space-y-4 sm:space-y-6">
            <H1
              title={
                <>
                  Buy Land Before the <br className="hidden lg:block" />
                  Market Does
                </>
              }
            />
            <div className="space-y-4 leading-relaxed sm:w-2/3">
              <p>
                Most investors buy after appreciation begins.
                <br />
                Smart investors secure land before public release.
              </p>
              <p>
                Arcadia BulkBuy gives investors access to developer-level land
                pricing in strategic growth locations before public market
                release.
              </p>
            </div>
            <div className="space-y-4 pb-4">
              <p className="">Submit an Expression of Interest to receive:</p>
              <ul className="space-y-3">
                {HERO_CHECKS.map((line) => (
                  <li key={line} className="flex gap-4 items-start">
                    <FaCircleCheck
                      className="text-primary-500 text-2xl shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="leading-snug">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8">
              <Button
                to="/properties"
                label="View Available Listings"
                variant="outline"
                extraClass="max-sm:!w-full"
                size="lg"
              />
              <Button
                to="/contact"
                label="Join the BulkBuy Program"
                extraClass="max-sm:!w-full"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Why buy early */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-8 sm:py-14 2xl:py-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 xl:gap-16 2xl:gap-20 sm:items-end lg:items-center">
          <div className="space-y-4">
            <H1
              title={
                <>
                  The Secret Behind
                  <br className="" /> Real Estate Wealth
                </>
              }
              label=" Why buy early?"
            />
            <div className="leading-loose sm:text-lg ">
              <p>
                Real estate wealth is rarely created by buying land at retail
                price.
              </p>
              <p>It is created by buying:</p>
            </div>
            <ul className="space-y-3 sm:text-lg">
              {[
                "Early",
                "In strategic locations",
                "At developer-level pricing",
              ].map((line) => (
                <li key={line} className="flex gap-4 items-center">
                  <FaCircleCheck
                    className="text-primary-500 text-2xl shrink-0"
                    aria-hidden
                  />
                  <span className="">{line}</span>
                </li>
              ))}
            </ul>
            <p className="sm:text-lg leading-loose text-foreground max-w-3xl capitalize">
              Arcadia BulkBuy allows investors to access land opportunities
              before they are released to the public market.
            </p>
          </div>
          {/* image */}
          <div className="w-full sm:w-[281px] lg:w-[540px] shrink-0">
            <div className="relative rounded-[20px] overflow-hidden aspect-[281/215]  xl:aspect-[480/640] max-sm:h-20 max-lg:h-40 lg:max-h-[50vh] xl:max-h-[60vh] w-full">
              <img
                src="https://res.cloudinary.com/do36hdyrf/image/upload/houseminature_ervknw.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-8 pt-8 sm:pt-14 2xl:pt-20">
          <H1 title="The BulkBuy advantage" label="Benefits" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
            {BENEFITS.map((benefit, i) => {
              const BenefitIcon = benefit.Icon;
              return (
                <div
                  key={benefit.title}
                  className="flex md:flex-row gap-6 md:gap-4 lg:gap-6"
                >
                  {i > 0 && (
                    <div
                      className="hidden md:block w-px shrink-0 self-stretch min-h-[120px] bg-foreground/15"
                      aria-hidden
                    />
                  )}
                  <div className="flex-1 flex sm:flex-col gap-4 py-2">
                    <div className="size-14 sm:size-16 rounded-full bg-secondary grid place-items-center">
                      <BenefitIcon
                        className="text-3xl text-primary-500"
                        aria-hidden
                      />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-semibold capitalize">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-foreground/70 leading-relaxed max-w-[347px]">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured bulk */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-10 sm:py-16 space-y-10 sm:space-y-16 bg-background">
        <div className="space-y-4 max-w-4xl">
          <H1 label="Featured" title="Available bulk land opportunity" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {FEATURED.map((f) => (
            <article
              key={f.id}
              className="bg-card rounded-xl p-4 shadow-[0px_10px_40px_rgba(0,0,0,0.02)] flex flex-col"
            >
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] w-full">
                <img src={f.image} alt="" className="size-full object-cover" />
              </div>
              <div className="pt-6 pb-4 px-2 flex flex-col gap-6 flex-1">
                <div>
                  <p className="text-foreground">
                    <span className="text-[28px] font-bold tracking-tighter">
                      {formatNaira(f.price)}
                    </span>{" "}
                    <span className="font-light text-xs">per acre</span>
                  </p>
                  <p className="mt-2 text-foreground/70 flex gap-2 items-center">
                    <FaLocationDot
                      className="text-primary-500 text-xl shrink-0 mt-0.5"
                      aria-hidden
                    />
                    {f.location}
                  </p>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-foreground/70">Nearby Infrastructure:</p>
                  <ul className="space-y-3">
                    {f.infrastructure.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <FaCircleCheck
                          className="text-primary-900 text-xl shrink-0 mt-0.5"
                          aria-hidden
                        />
                        <span className="text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  label="Submit Expression of Interest"
                  size="md"
                  extraClass="!w-full !justify-center !rounded-lg"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-10 sm:py-16 space-y-10 sm:space-y-16">
        <H1
          title="How the program works"
          label=" Simple & secure"
          textAlign="center"
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          <div className="max-lg:hidden w-full lg:w-[min(100%,505px)] shrink-0">
            <div className="relative rounded-[20px] overflow-hidden aspect-square max-h-[520px]">
              <img
                src={estateImage}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </div>
          {/* steps */}
          <div className="flex-1 w-full space-y-5">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="bg-card rounded-xl p-6 flex max-sm:flex-col gap-4 sm:gap-12 items-start shadow-sm shadow-gray-200"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-primary-500 leading-none">
                  {step.n}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-xl font-semibold capitalize">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-base text-foreground/70 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* whyus */}
      {/* <WhyUsSection /> */}

      {/* Bottom CTA */}
      <section className="xl:mt-10 bg-primary-900 px-6 sm:px-10 xl:px-36 2xl:px-44 py-14 sm:py-20 text-white">
        <div className=" mx-auto text-center space-y-6 py-4">
          <H1
            title={<>Secure Land Before the Market Moves</>}
            textAlign="center"
            extraClass="!text-3xl sm:!text-5xl 2xl:!text-6xl !leading-12 sm:!leading-18 !text-primary-300 !font-black"
          />
          <p className="max-w-2xl text-sm md:text-lg mx-auto opacity-80">
            The most significant real estate gains are created before public
            market entry. Arcadia BulkBuy positions you ahead of the curve.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 justify-center pt-4 max-w-xl mx-auto">
            <Button
              to="/properties"
              label="View Available Listings"
              variant="outline"
              size="lg"
              extraClass="!rounded-lg !justify-center sm:flex-1 !py-3 !text-white/80 !border-white/40 !w-full"
            />
            <Button
              to="/contact"
              label="Join the BulkBuy Program"
              size="lg"
              extraClass="!rounded-lg !w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BulkBuy;
