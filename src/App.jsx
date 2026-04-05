import { Routes, Route } from "react-router-dom";
import PublicLayout from "./pages/public/PublicLayout";
import Home from "./pages/public/Home";
import Properties from "./pages/public/Properties";
import Property from "./pages/public/Property";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Blog from "./pages/public/Blog";
import DashboardLayout from "./pages/user/Layout";
import Overview from "./pages/user/Overview";
import MyProperties from "./pages/user/MyProperties";
import Wallet from "./pages/user/Wallet";
import Payments from "./pages/user/Payments";
import Settings from "./pages/user/Settings";
import BuyBack from "./pages/public/BuyBack";
import BulkBuy from "./pages/public/BulkBuy";
import ScrollToTop from "./components/ScrollToTTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="/property/:id/:slug" element={<Property />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="buyback" element={<BuyBack />} />
          <Route path="bulkbuy" element={<BulkBuy />} />
        </Route>

        {/* Dashboard parent */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="myproperties" element={<MyProperties />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
