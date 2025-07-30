import React, { useState } from "react";
import { FaSearch, FaSpinner, FaTruck } from "react-icons/fa";

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingInfo, setTrackingInfo] = useState(null);

  // replace this with an actual API request
  const handleTrack = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTrackingInfo(null);

    
    // replace this with an actual API request
    setTimeout(() => {
      setIsLoading(false);
      setTrackingInfo({}); 
    }, 2000);
  };

  // Main render function
  // It includes the tracking input and button, and conditionally displays tracking information
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
          <FaTruck className="text-blue-600" /> Track Your Shipment
        </h2>
        <p className="text-gray-600 mb-6">
          Stay updated on your delivery progress. Enter your tracking number to view real-time shipment information.
        </p>

        {/* Tracking Form */}
        {/* This form allows users to input their tracking number and submit it for tracking */}
        <form onSubmit={handleTrack} className="flex flex-col gap-4">
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 bg-gray-50">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Enter tracking number"
              className="w-full outline-none bg-transparent text-gray-700"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              required
            />
          </div>

          {/* Track Button */}
          {/* This button submits the tracking number and shows a loading spinner while fetching data */}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <FaSpinner className="animate-spin" /> Tracking...
              </span>
            ) : (
              "Track"
            )}
          </button>
        </form>

        {/* Tracking Information Section */}
        {/* This section displays the tracking information if available */}
        {trackingInfo && Object.keys(trackingInfo).length === 0 && (
          <div className="mt-10 text-center text-gray-500">
            <p>No tracking details yet. Please integrate with your shipment API.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
