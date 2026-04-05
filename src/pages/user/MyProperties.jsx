import { PiBuildings, PiBuildingsFill } from "react-icons/pi";
import Card from "../../components/user/Card";
import Header from "../../components/user/Header";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import MyPropertyCard from "../../components/user/MyPropertyCard";

function MyProperties() {
  return (
    <main className="space-y-8 sm:space-y-10">
      <div>
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
          My Properties
        </h1>
        <p className="mt-1 font-light">
          Here is what's happening with your properties today.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols">
        <MyPropertyCard />
      </div>
    </main>
  );
}

export default MyProperties;
