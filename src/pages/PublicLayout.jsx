import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Auth from "../components/modals/Auth";
import CreateAccount from "../components/modals/CreateAccount";

function PublicLayout() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  // const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

  return (
    <>
      <Header onLogInClick={() => setIsLogInOpen(true)} />
      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer />
      <Auth isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
    </>
  );
}

export default PublicLayout;
