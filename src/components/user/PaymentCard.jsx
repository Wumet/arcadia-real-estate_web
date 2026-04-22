//   const isOverdue = plan.status === "overdue";

//   return (
//     <div className="bg-white p-4 rounded-xl space-y-2">
//       <img src={plan.image} className="w-full h-72 object-cover rounded-lg" />

//       <h3 className="text-[18px] text-xl font-semibold">{plan.title}</h3>

//       <p>
//         {plan.plot} • {plan.size}
//       </p>

//       <p className="font-bold">{plan.total}</p>

//       <p className="text-orange-500">{plan.remaining}</p>

//       <p>{isOverdue ? plan.overdueDays + " days" : plan.nextDueDate}</p>
//     </div>
//   );
// }
// export default PaymentCard;
function PaymentCard({ plan }) {
  return (
    <div className="bg-white p-4 rounded-xl space-y-3">
      <img src={plan.image} className="w-full h-72 object-cover rounded-lg" />

      <h3 className="text-xl font-semibold">{plan.title}</h3>

      <p className="text-sm text-gray-500">
        {plan.plot} • {plan.size}
      </p>

      <p className="font-bold">₦{plan.total}</p>

      {/* STATUS */}
      <p
        className={
          plan.status === "refunded"
            ? "text-green-600"
            : plan.status === "active"
              ? "text-orange-500"
              : "text-blue-600"
        }
      >
        {plan.status}
      </p>

      {/* CONDITIONAL DETAIL ONLY (small, not layout changes) */}
      {plan.status === "active" && <p>Next Due: {plan.nextDueDate}</p>}

      {plan.status === "refunded" && <p>Refund via Wallet</p>}

      {plan.status === "fully_paid" && <p>Completed ✔</p>}
    </div>
  );
}

export default PaymentCard;
