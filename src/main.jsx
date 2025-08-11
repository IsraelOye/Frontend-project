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
import Blog from './pages/blog.jsx';
import Office from './pages/office.jsx';
import Privacy from './pages/privacy.jsx'
import Create from './pages/create.jsx'
import Login from './pages/login.jsx'
import Footer from './component/footer.jsx'
import Track from './dashboard/track.jsx'
import Shipment from './dashboard/shipment.jsx';
import ShipmentHistory from './dashboard/history.jsx';
// import ShipmentDetails from './component/ShipmentDetails.jsx'
// import ShipmentForm from './component/ShipmentForm.jsx'
import DashboardLayout from './layouts/dashboardlayout.jsx'
import DashboardHome from './dashboard/dashboardhome.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        {/* dashboard routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="shipment" element={<Shipment />} />
          <Route path="history" element={<ShipmentHistory />} />
          <Route path="track" element={<Track />} />
        </Route>

        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/office" element={<Office />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
