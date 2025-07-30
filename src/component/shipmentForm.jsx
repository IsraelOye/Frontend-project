import React, { useState } from "react";

const ShipmentForm = ({ onDescribeClick }) => {
  const [shippingType, setShippingType] = useState("private");

  const handleToggle = (type) => {
    setShippingType(type);
  };

  return (
    <div className="p-6 md:p-10 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      
      <h2 className="text-3xl font-bold text-green-600 mb-2">Ship Now</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Whether you’re an individual or representing a business, we provide fast,
        reliable international and domestic delivery services tailored to your needs.
        Simply choose your shipping type below and complete the shipment details.
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">I am shipping as a...</h3>
        <div className="flex w-full max-w-md rounded overflow-hidden border border-gray-300">
          <button
            onClick={() => handleToggle("private")}
            className={`w-1/2 py-3 text-center font-medium transition duration-200 ${
              shippingType === "private"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Private Person
          </button>
          <button
            onClick={() => handleToggle("business")}
            className={`w-1/2 py-3 text-center font-medium transition duration-200 ${
              shippingType === "business"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Business
          </button>
        </div>

        {shippingType === "private" ? (
          <p className="mt-4 text-gray-600">
            Fill in your personal shipping details to proceed.
          </p>
        ) : (
          <p className="mt-4 text-gray-600">
            Provide your business information below.
          </p>
        )}
      </div>

      {/* Shipment Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">


        {/* Business-only Field */}
        {shippingType === "business" && (
          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="e.g., Tind Logistics Ltd."
            />
          </div>
        )}

        {/* From Country */}
        <div>
          <label className="block mb-1 font-medium">From (Country)</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="e.g. United States"
          />
        </div>

        {/* From City */}
        <div>
          <label className="block mb-1 font-medium">City (Optional)</label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>

        {/* To Country */}
        <div>
          <label className="block mb-1 font-medium">To (Country)</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Type to select..."
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block mb-1 font-medium">
            Postal Code (Optional)
          </label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>
      </form>

      {/* Continue Button */}
      <div className="mt-6 text-right">
        <button
          onClick={onDescribeClick}
          className="bg-green-400 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShipmentForm;
