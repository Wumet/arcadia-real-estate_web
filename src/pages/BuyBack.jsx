import { useRef } from "react";
import BuybackCalculatorCard from "../components/buyback/BuybackCalculatorCard";
import BuybackInterest from "../components/buyback/BuybackInterest";
import heroImg from "../assets/heroImage.jpg";
import H1 from "../components/H1";
import Button from "../components/Button";
import { formatNaira } from "../components/utils/formatNaira";
import { PiCertificateFill } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";
import { MdDomainVerification } from "react-icons/md";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbCertificate } from "react-icons/tb";

const FIXED_RETURN_TABLE = [
  {
    months: "6 months",
    rate: "18%",
    payout: "₦11,800,000",
    bg: "bg-[#f0f0f0]",
  },
  {
    months: "12 months",
    rate: "45%",
    payout: "₦14,500,000",
    bg: "bg-transparent",
  },
  {
    months: "18 months",
    rate: "65%",
    payout: "₦16,500,000",
    bg: "bg-[#f0f0f0]",
  },
  {
    months: "24 months",
    rate: "100%",
    payout: "₦20,000,000",
    bg: "bg-transparent",
  },
];

const INVESTMENT_STEPS = [
  {
    n: "01",
    title: "Invest",
    body: "Choose an investment amount.",
    sub: "Minimum investment: ₦1,000,000.",
  },
  {
    n: "02",
    title: "Land Allocation",
    body: "A land unit within one of our estates is allocated to you.",
  },
  {
    n: "03",
    title: "Documentation",
    body: "You receive your complete investor documentation package.",
  },
  {
    n: "04",
    title: "Investment period",
    body: "Your investment runs for your selected duration: 6 – 24 months.",
  },
  {
    n: "05",
    title: "BuyBack execution",
    body: "At maturity:",
    bullets: [
      "The company repurchases the land",
      "You return the land documents",
      "Your post-dated cheque is cleared",
      "You receive your full payout",
    ],
  },
];

const RECEIVE_CARDS = [
  {
    title: "Allocation Documents",
    body: "Proof of ownership of the allocated land.",
    icon: <TbCertificate />,
  },
  {
    title: "Contract of Sale",
    body: "Legally binding agreement covering the purchase.",
    icon: <LiaFileContractSolid />,
  },
  {
    title: "BuyBack Agreement",
    body: "Document outlining the company's obligation to repurchase the land.",
    icon: <MdDomainVerification />,
  },
  {
    title: "Post-Dated Cheque",
    body: "Issued for the full payout amount based on your selected investment duration.",
    icon: <CgFileDocument />,
  },
];

const WHY_CARDS = [
  {
    n: "01",
    title: "Fixed returns",
    body: "Your profit is predetermined and not dependent on market fluctuations.",
  },
  {
    n: "02",
    title: "Real asset backing",
    body: "Your investment is tied to physical land within an estate.",
  },
  {
    n: "03",
    title: "Short-term liquidity",
    body: "Traditional land investments take years. This structure delivers returns within months.",
  },
  {
    n: "04",
    title: "Legal protection",
    body: "Traditional land investments take years. This structure delivers returns within months.",
  },
  {
    n: "05",
    title: "Scalable investment",
    body: "Investors can participate from ₦1,000,000 and increase their allocation based on availability.",
  },
];

function BuyBack() {
  const interestRef = useRef(null);

  const onHeroCTA = () => {
    interestRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fixedReturnRows = FIXED_RETURN_TABLE;

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-4 sm:py-14 2xl:py-20 sm:text-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-10 lg:gap-14 items-start lg:items-center">
          <div className="flex-1 space-y-4 sm:flex flex-col">
            <H1
              title={
                <>
                  Arcadia Land <br />
                  BuyBack Investment
                </>
              }
            />
            <p className="leading-relaxed">
              Invest in physical land today. Receive a pre-agreed return within
              a fixed timeline without relying on market appreciation
            </p>

            <div className="pt-2">
              {/* <Button
                onClick={onHeroCTA}
                label="Submit Expression of Interest"
              /> */}
              <button
                type="button"
                onClick={onHeroCTA}
                className="bg-primary-500 text-primary-900 rounded-[8px] px-10 py-4 font-semibold hover:bg-primary-400 transition-colors w-full sm:w-fit"
              >
                Submit Expression of Interest
              </button>
            </div>

            <div className="relative mt-8 sm:mt-12 2xl:mt-16 hidden sm:block w-full">
              <img
                src="https://res.cloudinary.com/do36hdyrf/image/upload/micheile-henderson-ZVprbBmT8QA-unsplash_ybfkxr.jpg"
                alt=""
                className="rounded-xl w-full h-[240px] object-cover opacity-90"
              />
              {/* overlay */}
              <div className="rounded-xl absolute inset-0 bg-black/50"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-[596px]">
            <BuybackCalculatorCard />
          </div>
        </div>
      </section>

      {/* Returns table */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-4 sm:py-10 2xl:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <div className="rounded-full bg-accent/10 px-4 py-2"></div>
            <H1
              title={
                <>
                  Your return is determined from{" "}
                  <span className="whitespace-nowrap">the day you invest</span>
                </>
              }
              label=" returns"
              textAlign="center"
            />
          </div>

          <div className="rounded-xl overflow-hidden drop-shadow-xl drop-shadow-gray-100 bg-card">
            <div className="px-10 py-8 bg-card">
              <div className="grid grid-cols-3 gap-4 text-sm sm:text-base text-foreground/60 tracking-tight">
                <div>Duration</div>
                <div>Fixed Return</div>
                <div className="text-center">
                  Total payout on {formatNaira(1000000)}
                </div>
              </div>
            </div>
            {fixedReturnRows.map((row, idx) => (
              <div
                key={row.months}
                className={`${idx % 2 === 0 ? "bg-[#f0f0f0]" : "bg-transparent"} px-10 py-7 text-[18px] sm:text-[22px] text-foreground flex gap-4 items-center font-semibold`}
              >
                <div className="flex-1">{row.months}</div>
                <div className="flex-1">{row.rate}</div>
                <div className="flex-1 text-right whitespace-nowrap">
                  {row.payout}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Express interest */}
      <div ref={interestRef}>
        <BuybackInterest />
      </div>

      {/* How the investment works */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-4 sm:py-14 2xl:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <H1
              title=" How the investment works"
              label="  SIMPLE &amp; secure"
              textAlign="center"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-20 items-center max-w-6xl mx-auto">
            <div className="max-xl:hidden w-1/3 h-full">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/do36hdyrf/image/upload/realestatereturn_rrg5kz.jpg"
                  alt=""
                  className="w-full h-full object-coverx"
                />
              </div>
            </div>

            <div className="flex-1 w-full! lg:w-2/3 space-y-5">
              {INVESTMENT_STEPS.map((step) => (
                <div
                  key={step.n}
                  className="bg-card rounded-xl p-6 flex gap-4 items-start shadow-sm shadow-gray-200"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-primary-500 leading-none shrink-0">
                    {step.n}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-xl font-semibold capitalize">
                      {step.title}
                    </h3>
                    <p className="max-sm:text-sm sm:text-base text-foreground/70">
                      {step.body}
                    </p>
                    {step.sub && <p className="">{step.sub}</p>}
                    {step.bullets && (
                      <ul className="list-none space-y-2">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span
                              className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-primary-500"
                              aria-hidden
                            />
                            <span className="text-foreground/70">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-4 sm:py-10 2xl:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-10">
            <H1
              title={
                <>
                  What You Receive <br className="sm:hidden" /> As An Investor
                </>
              }
              label="security"
              textAlign="center"
            />
          </div>
          {/* cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-6">
            {RECEIVE_CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-xl p-4 lg:p-6 bg-card h-full"
              >
                <div
                  className="size-14 rounded-full bg-accent/10 grid place-items-center mb-3"
                  aria-hidden
                >
                  <span className="text-3xl text-accent">{c.icon}</span>
                </div>
                <h3 className="capitalize lg:text-[22px] font-semibold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-sm lg:text-[16px] text-foreground/70 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited allocation availability */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 pb-12 sm:pb-16 mt-4 sm:mt-10 2xl:mt-14">
        <div className="max-w-6xl mx-auto bg-background">
          <div className="rounded-xl bg-foreground text-background px-8 sm:px-12 py-10 sm:py-14">
            <div className="flex flex-col sm:items-center sm:text-center gap-4 lg:gap-6">
              <h2 className="text-[32px] sm:text-[48px] font-bold">
                Limited Allocation Availability
              </h2>
              <p className="text-[16px] sm:text-base opacity-80 max-w-4xl leading-relaxed mb-4">
                Because each investment is tied to specific land units, the
                number of available positions in the BuyBack program is limited.
                Participation is offered on a first-come, first-served basis
                once estates and units are allocated for the program
              </p>
              <button
                type="button"
                onClick={onHeroCTA}
                className="bg-primary-500 text-primary-900 rounded-[8px] px-10 py-4 font-semibold hover:bg-primary-400 transition-colors w-full sm:w-fit"
              >
                Submit Expression of Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why investors prefer this model */}
      <section className="px-6 sm:px-10 xl:px-36 2xl:px-44 py-4 pb-10 sm:py-10 2xl:py-20">
        <div className="max-w-6xl mx-auto">
          <H1 title="   Why Investors Prefer This Model" label=" WHy model?" />

          {/* cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CARDS.map((c) => (
              <div key={c.n} className="">
                <div className="flex gap-4 items-start mb-4">
                  <div className="relative size-12 sm:size-16 rounded-full bg-secondary grid place-items-center">
                    <span className="font-bold italic text-primary-500 leading-none">
                      {c.n}
                    </span>
                  </div>
                </div>
                <h3 className="capitalize font-semibold text-foreground mb-3">
                  {c.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BuyBack;
