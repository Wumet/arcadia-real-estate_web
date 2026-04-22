import { useEffect, useState } from "react";
import { getUserPayments } from "../../api/payments";
import PaymentCard from "../../components/user/PaymentCard";

function Payments() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getUserPayments();
      setPlans(data);
    };

    load();
  }, []);

  return (
    <main className="space-y-8 sm:space-y-10">
      <div>
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
          Payments
        </h1>
        <p className="mt-1 font-light">
          Here is what's happening with your properties today.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <PaymentCard key={plan.id} plan={plan} />
        ))}
      </div>
    </main>
  );
}
export default Payments;
