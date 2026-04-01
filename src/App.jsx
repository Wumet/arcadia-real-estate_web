import { Routes, Route } from "react-router-dom";
import PublicLayout from "./pages/PublicLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import DashboardLayout from "./pages/user/Layout";
import Overview from "./pages/user/Overview";
import MyProperties from "./pages/user/MyProperties";
import Wallet from "./pages/user/Wallet";
import Payments from "./pages/user/Payments";
import Settings from "./pages/user/Settings";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="property" element={<Property />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
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
    </div>
  );
}

export default App;
