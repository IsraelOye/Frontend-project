import React, { useRef, useState, useEffect } from "react";
import ShipmentForm from "../component/ShipmentForm";
import ShipmentDetails from "../component/ShipmentDetails";

// Main Shipment component
// This component handles the shipment process, including the form and details section
const Shipment = () => {
  const detailsRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);

  // Function to handle the transition to shipment details
  // This will be called when the user clicks "Describe Shipment" in the form
  const handleContinue = () => {
    setShowDetails(true);
  };

  // Scroll to the shipment details section when it becomes visible
  // This effect runs whenever showDetails changes
  useEffect(() => {
    if (showDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDetails]);

  // Main render function
  // It includes the shipment form and conditionally renders the shipment details section
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-indigo-100 px-4 py-14">
     
      {/* Shipment Form Section */}
      {/* This section contains the form for initiating a shipment */}
      <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-sky-200 p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-6 tracking-wide">
          Start Your Shipment 📦
        </h1>
        <ShipmentForm onDescribeClick={handleContinue} />
      </section>

      {/* Shipment Details Section */}
      {/* This section is conditionally rendered based on the showDetails state */}
      {showDetails && (
        <section
          ref={detailsRef}
          className="max-w-4xl mx-auto mt-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-indigo-200 p-6 sm:p-10 animate-fade-in"
        >
          
          <h2 className="text-2xl font-semibold text-indigo-700 text-center mb-4 tracking-wide">
            Package Details 📦
          </h2>
          <ShipmentDetails />
        </section>
      )}
    </main>
  );
};

export default Shipment;
