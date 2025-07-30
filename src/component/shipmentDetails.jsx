import React from "react";

const ShipmentDetails = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-blue-100 p-6 rounded-md shadow-md max-w-3xl mx-auto my-6">
      <h2 className="text-2xl font-bold mb-4">SHIPMENT</h2>

      
      <p className="text-gray-700 mb-2">
        Please provide the details of your shipment below. Ensure all fields are filled out accurately to avoid any delays.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Weight (kg)</label>
          <input type="number" className="w-full p-2 border rounded" required />
        </div>

      </div>
      
      
      <div className="mt-6">
        <label className="block mb-1 font-medium">Destination</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="Enter destination address" required />
      </div>
          
        
      

      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Ship Now
        </button>
      </div>
    </div>
  );
});

export default ShipmentDetails;
