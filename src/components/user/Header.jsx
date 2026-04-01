import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

function Header() {
  const navLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "My Properties", path: "/dashboard/myproperties" },
    { name: "Payments", path: "/dashboard/payments" },
    { name: "Wallet", path: "/dashboard/wallet" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  // const [openModal, setOpenModal] = useState(false);

  // const handleModal = () => {
  //   setOpenModal(true);
  // };

  return (
    <>
      <header className="flex justify-between bg-white px-8 xl:px-40 py-5 sticky top-0 left-0 right-0 z-10">
        <Link to="/" className="">
          <img src={Logo} alt="Acardia Logo" className="w-25 sm:w-30 xl:w-35" />
        </Link>
        <ul className="max-sm:hidden flex gap-8 lg:gap-12 font-normal tracking-wide opacity-80">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <NavLink
                to={navLink.path}
                end={navLink.path === "/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-medium"
                    : "hover:text-accent transition-all duration-300"
                }
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden">
          <IoIosNotifications className="text-2xl" />
          {/* <button onClick>Log out</button> */}
        </div>

        {/* confirm log out modal */}
        {/* <LogOutModal isOpen={openModal} /> */}
        {/* <Modal isOpen={openModal} /> */}

        {/* mobile hambuger trigger */}
        <button className="sm:hidden text-xl" onClick={handleClick}>
          {navIsOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {/* mobile nav menu  */}
      {navIsOpen && (
        <div
          className={`sm:hidden fixed right-0 w-5/6 bg-white z-20 p-8 shadow-lg transition-[height] duration-500 ease-in-out ${navIsOpen ? "h-[99vh]" : "max-h-0"}`}
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
        </div>
      )}
    </>
  );
}

export default Header;
