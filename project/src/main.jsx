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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
