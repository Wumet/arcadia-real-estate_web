import { FaLocationDot } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Property Sales", path: "/properties" },
    { name: "Buyback Program", path: "/buyback" },
    { name: "BulkBuy", path: "/bulkbuy" },
  ];

  return (
    <footer className="pt-10 sm:pt-20 2xl:pt-30 px-6 sm:px-20 xl:px-40 2xl:px-50 bg-foreground text-gray-400">
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-8 sm:gap-20 pb-8">
        <div className="sm:col-span-2">
          <img src={Logo} alt="" className="w-30 md:w-40 xl:w-60 mb-4" />
          <p className="text-neutral-600 sm:text-[18px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
            amet diam elit. Curabitur libero erat, consectetur quis aliquam
            quis, laoreet non lorem
          </p>
        </div>
        <div className="">
          <h4 className="text-xs text-gray-500 uppercase">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="text-xs text-gray-500 uppercase">Contact Us</h4>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-1 sm:items-center">
              <FaLocationDot className="text-primary-500" />
              <span>123 Elite Plaza, GRA, PortHarcourt</span>
            </li>
            <li className="flex gap-1 sm:items-center">
              <FaPhoneAlt className="text-primary-500" />
              <span>+234 905 000 1234</span>
            </li>
            <li className="flex gap-1 sm:items-center">
              <MdEmail className="text-primary-500" />
              <span>hello@arcadia-realestate.com</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t-[.5px] border-neutral-600 w-full text-center p-6 text-sm text-neutral-400 font-light block">
        © 2024 Arcadia Real Estate Platform. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
