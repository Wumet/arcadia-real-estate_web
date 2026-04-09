import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Auth from "../../components/modals/Auth";

function PublicLayout() {
  // Auth
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("login"); // "login" or "create"

  const handleOpenAuth = (type) => {
    setAuthType(type);
    setAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthOpen(false);
  };

  return (
    <>
      <Header
        onLogInClick={() => handleOpenAuth("login")}
        onCreateAccountClick={() => handleOpenAuth("create")}
      />
      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer />
      <Auth
        isOpen={authOpen}
        onClose={handleCloseAuth}
        type={authType}
        setType={setAuthType}
      />
    </>
  );
}

export default PublicLayout;
