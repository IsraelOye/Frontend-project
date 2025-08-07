import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx'
import FAQ from './pages/Faq.jsx'
import Office from './pages/office.jsx';
import Create from './pages/create.jsx'
import Login from './pages/login.jsx'
import Footer from './component/footer.jsx'
// import Shipment from './pages/shipment.jsx'
import Track from './pages/track.jsx'
import ShipmentDetails from './component/ShipmentDetails.jsx'
import ShipmentForm from './component/ShipmentForm.jsx'
import DashboardLayout from './layouts/dashboardlayout.jsx'
import DashboardHome from './dashboard/dashboardhome.jsx'
import Users from './dashboard/users.jsx'
import Settings from './dashboard/settings.jsx'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        {/* dashboard routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/office" element={<Office />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/track" element={<Track />} />
        <Route path="/shipment-details" element={<ShipmentDetails />} />
        <Route path="/shipment-form" element={<ShipmentForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
