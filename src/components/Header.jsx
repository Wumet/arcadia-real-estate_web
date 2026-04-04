import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoChevronDown } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  {
    name: "Investments",
    path: "#",
    icon: <IoChevronDown />,
    children: [
      { name: "Buyback Program", path: "/BuyBack" },
      { name: "BulkBuy Program", path: "/BulkBuy" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];
function Header({ onLogInClick, onCreateAccountClick }) {
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open
  const navRef = useRef();

  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between px-8 xl:px-40 py-5 bg-card sticky top-0 left-0 right-0 z-50 max-sm:text-[16px] max-md:text-sm">
        <Link to="/" className="">
          <img src={Logo} alt="Acardia Logo" className="w-25 sm:w-30 xl:w-35" />
        </Link>

        {/* Desktop nav menu */}
        <ul className="max-sm:hidden flex gap-5 2xl:gap-8">
          {links.map((link) => (
            <li key={link.name} className="relative">
              {link.children ? (
                <>
                  <button
                    className="flex items-center gap-1 font-medium text-gray-800"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name,
                      )
                    }
                  >
                    {link.name} {link.icon}
                  </button>
                  {/* dropdown */}
                  {openDropdown === link.name && (
                    <ul
                      ref={navRef}
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-fit z-50 py-4"
                    >
                      {link.children.map((child) => (
                        <li
                          key={child.name}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap"
                        >
                          <Link to={child.path}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={link.path} className="font-medium text-gray-800">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden max-lg:text-sm">
          <button
            onClick={() => {
              onLogInClick();
              setIsOpen(false);
            }}
            className="pr-2 hover:underline"
          >
            Login
          </button>
          |
          <button
            onClick={() => {
              onCreateAccountClick();
              setIsOpen(false);
            }}
            className="pl-2 hover:underline"
          >
            Create Account
          </button>
        </div>
        <button className="sm:hidden text-xl" onClick={handleMenuClick}>
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {/* mobile nav menu  */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* menu */}
      {isOpen && (
        <div
          className={`text-sm sm:hidden fixed right-0 h-screen w-5/6 bg-white z-40 p-8 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="text-base flex flex-col gap-8 font-medium tracking-wide opacity-70">
            {links.map((link) => (
              <li key={link.name}>
                {link.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.name ? null : link.name,
                        )
                      }
                    >
                      {link.name}
                      <span>{link.icon}</span>
                    </button>

                    {mobileDropdown === link.name && (
                      <ul className="ml-2 pt-4 flex flex-col gap-4">
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.path}
                              className=""
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className=""
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* call to action */}
          <div className="mt-12 space-y-6">
            <button
              onClick={() => {
                onLogInClick();
                setIsOpen(false);
              }}
              className="w-full border py-2 rounded-md"
            >
              Login
            </button>
            <button
              onClick={() => {
                onCreateAccountClick();
                setIsOpen(false);
              }}
              className="w-full bg-primary-500 py-2 rounded-md"
            >
              Create Account
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
