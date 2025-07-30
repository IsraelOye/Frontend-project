import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx'
import Create from './pages/create.jsx'
import Login from './pages/login.jsx'
import Shipment from './pages/shipment.jsx'
import Track from './pages/track.jsx'
import ShipmentDetails from './component/shipmentDetails.jsx'
import ShipmentForm from './component/shipmentForm.jsx'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shipping" element={<Shipment />} />
        <Route path="/track" element={<Track />} />
        <Route path="/shipment-details" element={<ShipmentDetails />} />
        <Route path="/shipment-form" element={<ShipmentForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
