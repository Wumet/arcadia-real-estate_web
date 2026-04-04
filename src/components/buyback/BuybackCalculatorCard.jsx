import { useMemo, useState } from "react";
import { formatNaira } from "../../utils/formatNaira";

const DURATION_OPTIONS = [
  { label: "6 months", months: 6, rate: 0.18 },
  { label: "12 months", months: 12, rate: 0.45 },
  { label: "18 months", months: 18, rate: 0.65 },
  { label: "24 months", months: 24, rate: 1.0 },
];

const MIN_AMOUNT = 1_000_000;

function clampNonNegativeNumber(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return 0;
  return Math.max(0, num);
}

function BuybackCalculatorCard() {
  const [amount, setAmount] = useState(() => {
    // Try to get saved amount from localStorage, default to 10,000,000
    return Number(localStorage.getItem("buybackAmount")) || 10_000_000;
  });

  const handleAmountChange = (val) => {
    const clamped = clampNonNegativeNumber(val);
    setAmount(clamped);
    localStorage.setItem("buybackAmount", clamped);
  };

  const [durationLabel, setDurationLabel] = useState(() => {
    return localStorage.getItem("buybackDuration") || "12 months";
  });

  const handleDurationChange = (val) => {
    setDurationLabel(val);
    localStorage.setItem("buybackDuration", val);
  };

  const isBelowMinimum = amount < MIN_AMOUNT;

  const selected = useMemo(
    () =>
      DURATION_OPTIONS.find((d) => d.label === durationLabel) ??
      DURATION_OPTIONS[1],
    [durationLabel],
  );
  //  calculate profit and total payout
  const { profit, totalPayout } = useMemo(() => {
    const a = clampNonNegativeNumber(amount);

    if (a < MIN_AMOUNT) {
      return { profit: 0, totalPayout: 0 };
    }

    const p = Math.round(a * selected.rate);
    return { profit: p, totalPayout: a + p };
  }, [amount, selected.rate]);

  return (
    <aside className="bg-foreground text-card rounded-2xl px-8 py-10 w-full lg:w-[596px]">
      <h3 className="text-card text-base sm:text-[22px] font-semibold leading-tight mb-4">
        Calculate Returns
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {/* Amount Input */}
        <div className="mt-2">
          <label className="pl-2 block text-white/90 text-xs mb-3">
            Input Amount
          </label>
          <input
            inputMode="numeric"
            value={amount}
            onChange={(e) =>
              handleAmountChange(clampNonNegativeNumber(e.target.value))
            }
            className="w-full bg-transparent border border-primary-700/40 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-700/70"
            placeholder="1000000"
          />
          <p
            className={`mt-2 pl-2 text-xs ${isBelowMinimum ? "text-red-500/70" : "text-white/60"}`}
          >
            {isBelowMinimum
              ? `Amount must be at least ${formatNaira(MIN_AMOUNT)}`
              : `Minimum Amount: ${formatNaira(MIN_AMOUNT)}`}
          </p>
        </div>
        {/* duration input */}
        <div className="">
          <label className="pl-2 block text-white/90 text-xs mb-3">
            Select Duration
          </label>
          <select
            value={durationLabel}
            onChange={(e) => handleDurationChange(e.target.value)}
            className="w-full bg-transparent border border-primary-700/40 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
          >
            {DURATION_OPTIONS.map((d) => (
              <option key={d.label} value={d.label} className="text-black">
                {d.label}
              </option>
            ))}
          </select>
        </div>
        {/* results */}
        <div className="border-t-[.5px] border-secondary/90 pt-6">
          <p className="text-card text-lg font-medium mb-5">Estimated Return</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-800/20 rounded-lg  px-3 sm:px-6 py-5">
              <p className="text-white/70 max-sm:text-xs text-sm mb-2">
                Profit
              </p>
              <p className="text-primary-500 sm:text-[20px] font-semibold">
                {isBelowMinimum ? formatNaira(0) : formatNaira(profit)}
              </p>
            </div>
            <div className="bg-primary-800/20 rounded-lg px-3 sm:px-6 py-5">
              <p className="text-white/70 max-sm:text-xs text-sm mb-2">
                Total Payout
              </p>
              <p className="text-primary-500 sm:text-[20px] font-semibold">
                {formatNaira(totalPayout).replace("₦", "₦")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default BuybackCalculatorCard;
