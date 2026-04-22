import { formatNaira } from "../utils/formatNaira";

 const payments = [
{
    id: 1,
    title: "Emerald Heights - Penthouse B",
    planId: "#ARC-9902",
    image: "https://placehold.co/574x320",
    plot: "Plot A12",
    size: "600 sqm",
    status: "active",
    nextDueDate: "Oct 15, 2023",
    amount: formatNaira(1250000),
  },
  {
    id: 2,
    title: "Emerald Heights - Penthouse B",
    planId: "#ARC-9902",
    image: "https://placehold.co/574x320",
    plot: "Plot A12",
    size: "600 sqm",
    status: "refunded",
    refundAmount: formatNaira(1250000),
    refundOption: "Wallet",
    nextDueDate: "Oct 15, 2023",
  }
];
export default payments;