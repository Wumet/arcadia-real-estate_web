import { useState } from "react";
import Input from "../Input";
import H1 from "../H1";

const RECEIVE_LIST = [
  "Available estate allocations",
  "Investment documentation preview",
  "BuyBack agreement details",
  "Current slot availability",
];

function BuybackInterest() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    amount: "",
  });

  const onChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const canSubmit = Boolean(
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.city.trim() &&
    form.amount.trim(),
  );

  return (
    <section className="px-6 sm:px-10 xl:px-36 2xl:px-44  py-4 sm:py-14 2xl:py-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-14 items-start">
        <div className="w-full lg:flex-[1_0_0] space-y-4">
          <H1 title="  Express your Interest" label="Don't wait" />
          <p className="">Submit an Expression of Interest to receive::</p>

          <ul className="space-y-4">
            {RECEIVE_LIST.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span
                  className="relative mt-1 inline-block h-4 w-4 rounded-full bg-secondary"
                  aria-hidden
                />
                <span className="text-lg text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* form */}
        <div className="w-full lg:w-[720px] bg-card rounded-xl px-6 sm:px-10 py-10">
          <h3 className="text-foreground text-[32px] font-bold mb-10 leading-10">
            Submit an Expression of Interest
          </h3>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="Your full name"
                extraClass="bg-[rgba(255,255,255,0.05)] border-[rgba(26,19,1,0.1)] text-foreground placeholder:text-foreground/40 border-[0.5px]"
                id="fullName"
                value={form.fullName}
                onChange={onChange("fullName")}
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+234 9xx xxx xxxx"
                extraClass="bg-[rgba(255,255,255,0.05)] border-[rgba(26,19,1,0.1)] text-foreground placeholder:text-foreground/40 border-[0.5px]"
                id="phone"
                value={form.phone}
                onChange={onChange("phone")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  extraClass="bg-[rgba(255,255,255,0.05)] border-[rgba(26,19,1,0.1)] text-foreground placeholder:text-foreground/40 border-[0.5px]"
                  id="email"
                  value={form.email}
                  onChange={onChange("email")}
                />
              </div>
              <div className="space-y-2">
                <Input
                  label="City"
                  type="text"
                  name="city"
                  placeholder="e.g. Port Harcourt"
                  extraClass="bg-[rgba(255,255,255,0.05)] border-[rgba(26,19,1,0.1)] text-foreground placeholder:text-foreground/40 border-[0.5px]"
                  id="city"
                  value={form.city}
                  onChange={onChange("city")}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Input
                label="Investment Amount"
                type="number"
                name="amount"
                placeholder="1000000"
                extraClass="bg-[rgba(255,255,255,0.05)] border-[rgba(26,19,1,0.1)] text-foreground placeholder:text-foreground/40 border-[0.5px]"
                id="amount"
                value={form.amount}
                onChange={onChange("amount")}
              />
              <p className="text-xs text-foreground/60">
                Mininimum Amount: #1,000,000
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`rounded-lg! w-full! h-[56px]! flex items-center justify-center px-6 text-[14px] font-medium transition-colors ${
                  canSubmit
                    ? "bg-primary-500 text-primary-900 hover:bg-primary-400"
                    : "bg-primary-500/50 text-primary-900 cursor-not-allowed"
                }`}
              >
                Submit Interest
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BuybackInterest;
