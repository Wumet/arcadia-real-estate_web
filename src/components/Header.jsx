import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function Header({ onLogInClick }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Investments", path: "/investments" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between px-8 xl:px-40 py-5 bg-card sticky top-0 left-0 right-0 z-20 max-sm:text-[16px] max-md:text-sm">
        <Link to="/" className="">
          <img src={Logo} alt="Acardia Logo" className="w-25 sm:w-30 xl:w-35" />
        </Link>
        <ul className="max-sm:hidden flex gap-6 2xl:gap-8 font-normal tracking-wide opacity-80">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link
                to={navLink.path}
                className="hover:border-b-[3px] border-secondary-600 transition-all duration-300"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden">
          <button onClick={onLogInClick} className="pr-2 hover:underline">
            Login
          </button>
          |
          <button onClick className="pl-2 hover:underline">
            Create Account
          </button>
        </div>
        <button className="sm:hidden text-xl" onClick={handleClick}>
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {/* mobile nav menu  */}
      {isOpen && (
        <div
          className={`sm:hidden fixed right-0 w-5/6 bg-white z-20 p-8 shadow-lg transition-[height] duration-500 ease-in-out ${isOpen ? "h-[99vh]" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-8 font-medium tracking-wide opacity-70">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link to={navLink.path} className="text-xl">
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* call to action */}
          {/* <div className="mt-12 space-y-6">
            <button
              onClick={onLogInClick}
              className="w-full border py-2 rounded-md"
            >
              Login
            </button>
            <button
              onClick={onCreateAccountClick}
              className="w-full bg-primary-500 py-2 rounded-md"
            >
              Create Account
            </button>
          </div> */}
        </div>
      )}
    </>
  );
}

export default Header;
