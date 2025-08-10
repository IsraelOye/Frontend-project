// import { useState } from "react";

// const TrackShipment = () => {
//   const [shipmentId, setShipmentId] = useState("");
//   const [shipment, setShipment] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false)

//   const handleTrack = async () => {
//     if (!shipmentId) return;

//     setLoading(true);

//     try {
//       const res = await fetch(
//         `https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/${shipmentId}`
//       );

//       if (!res.ok) {
//         throw new Error("Shipment not found");
//       }

//       const data = await res.json();
//       setShipment(data);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//       setShipment(null);
//     } finally {
//       setLoading(false)
//     }
//   };

//   return (
//     <div className="px-5">
//       <h2 className="text-xl font-semibold mb-4 mt-2">Track Shipment</h2>
//       {error && (
//         <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}
//       <div className="flex items-center gap-4 mb-4">
//         {error}
//         <input
//           type="text"
//           value={shipmentId}
//           onChange={(e) => setShipmentId(e.target.value)}
//           placeholder="Enter shipment ID"
//           className="border px-2 py-2 rounded w-70 outline-gray-500 placeholder:italic placeholder:text-sm placeholder:text-gray-700"
//         />
//         <button
//           type="submit"
//           onClick={handleTrack}
//           disabled={loading}
//           className="bg-blue-600 text-white w-25 py-2 rounded hover:bg-blue-700 cursor-pointer"
//         >
//           {loading ? "Tracking..." : "Track"}
//         </button>
//       </div>

//       {error && <p className="text-red-600">{error}</p>}

//       {shipment && (
//         <div className="borde px-4 py-2 rounded bg-white shadow max-w-3xl">
//           <p>
//             <strong>Recipient:</strong>{" "}
//             {shipment?.new_recipient?.full_name || "Not available"}
//           </p>
//           <p>
//             <strong>Content:</strong> {shipment.content}
//           </p>
//           <p>
//             <strong>Weight:</strong> {shipment.weight}kg
//           </p>
//           <p>
//             <strong>Status:</strong> {shipment.status || "Pending"}
//           </p>
//           <p>
//             <strong>Delivery Date:</strong> {shipment.delievery_date}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackShipment;


import { useState } from "react";
import {
  FiSearch,
  FiPackage,
  FiUser,
  FiCalendar,
  FiTruck,
} from "react-icons/fi";

const TrackShipment = () => {
  const [shipmentId, setShipmentId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleTrack = async (e) => {
  //   e.preventDefault(); // Prevent form submission if used in a form

  //   if (!shipmentId.trim()) {
  //     setError("Please enter a shipment ID");
  //     return;
  //   }

  //   setLoading(true);
  //   setError(""); // Clear previous errors
  //   setShipment(null); // Clear previous results

  //   try {
  //     const res = await fetch(
  //       `https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/${shipmentId.trim()}`
  //     );

  //     if (!res.ok) {
  //       if (res.status === 404) {
  //         throw new Error(
  //           "Shipment not found. Please check your tracking ID and try again."
  //         );
  //       } else if (res.status === 500) {
  //         throw new Error("Server error. Please try again later.");
  //       } else {
  //         throw new Error(`Error: ${res.status}. Please try again.`);
  //       }
  //     }

  //     const data = await res.json();
  //     setShipment(data);
  //     setError("");
  //   } catch (error) {
  //     console.error("Tracking error:", error);
  //     setError(error.message);
  //     setShipment(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleTrack = async (e) => {
    e.preventDefault();

    // 1️⃣ Check if user is logged in
    const token = localStorage.getItem("token"); // or whatever key you store your token under
    if (!token) {
      setError("You must be logged in to track a shipment.");
      return;
    }

    // 2️⃣ Check if tracking ID was entered
    if (!shipmentId.trim()) {
      setError("Please enter a shipment ID.");
      return;
    }

    setLoading(true);
    setError("");
    setShipment(null);

    try {
      const res = await fetch(
        `https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/${shipmentId.trim()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token for protected endpoint
          },
        }
      );

      // 3️⃣ Handle invalid tracking IDs or server errors
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(
            "Shipment not found. Please check your tracking ID and try again."
          );
        } else if (res.status === 401) {
          throw new Error("Unauthorized. Please log in again.");
        } else if (res.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error(`Error ${res.status}: Unable to track shipment.`);
        }
      }

      const data = await res.json();

      // 4️⃣ Extra validation: check if API returned a valid shipment object
      if (!data || !data.status) {
        throw new Error("Invalid tracking ID. No shipment details found.");
      }

      setShipment(data);
      setError("");
    } catch (error) {
      console.error("Tracking error:", error);
      setError(error.message);
      setShipment(null);
    } finally {
      setLoading(false);
    }
  };
  

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "in transit":
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-10 max-w-3xl mx-auto">
      <div className="mb-6 sm:mb-8 mt-5">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-gray-900 flex items-center gap-3">
          {/* <FiPackage className="text-blue-600" /> */}
          Track Your Shipment
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Enter your shipment ID to get real-time tracking information
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleTrack} className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
              placeholder="Enter tracking ID"
              className="border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:italic placeholder:text-sm placeholder:text-gray-500 text-sm sm:text-base transition-all"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            // disabled={loading || !shipmentId.trim()}
            className="bg-blue-600 w-33 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium cursor-pointer"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Tracking...
              </>
            ) : (
              <>
                <FiSearch size={18} />
                Track
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 flex items-start gap-3">
          <div className="text-red-500 mt-0.5">⚠️</div>
          <div>
            <p className="font-medium">Tracking Error</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      {/* Shipment Results */}
      {shipment && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Shipment Found
                </h3>
                <p className="text-blue-100 text-sm">
                  Tracking ID: {shipmentId.toUpperCase()}
                </p>
              </div>
              <div
                className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(
                  shipment.status
                )}`}
              >
                {shipment.status || "Pending"}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Recipient Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200">
                  <FiUser className="text-blue-600" />
                  Recipient Details
                </h4>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Full Name
                    </label>
                    <p className="text-gray-900 font-medium mt-1">
                      {shipment?.new_recipient?.full_name || "Not available"}
                    </p>
                  </div>

                  {shipment?.new_recipient?.phone && (
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Phone
                      </label>
                      <p className="text-gray-900 font-medium mt-1">
                        {shipment.new_recipient.phone}
                      </p>
                    </div>
                  )}

                  {shipment?.new_recipient?.address && (
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Address
                      </label>
                      <p className="text-gray-900 font-medium mt-1">
                        {shipment.new_recipient.address}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Shipment Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200">
                  <FiPackage className="text-blue-600" />
                  Shipment Details
                </h4>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Content
                    </label>
                    <p className="text-gray-900 font-medium mt-1">
                      {shipment.content || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Weight
                    </label>
                    <p className="text-gray-900 font-medium mt-1">
                      {shipment.weight
                        ? `${shipment.weight}kg`
                        : "Not specified"}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Delivery Date
                    </label>
                    <p className="text-gray-900 font-medium mt-1 flex items-center gap-2">
                      <FiCalendar className="text-gray-400" size={16} />
                      {formatDate(
                        shipment.delivery_date || shipment.delievery_date
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Timeline (if you have tracking history) */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <FiTruck className="text-blue-600" />
                Current Status
              </h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      shipment.status?.toLowerCase() === "delivered"
                        ? "bg-green-500"
                        : shipment.status?.toLowerCase() === "in transit"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {shipment.status || "Pending"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Last updated:{" "}
                      {formatDate(shipment.updated_at || shipment.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-900 mb-2">Need Help?</h4>
        <p className="text-sm text-blue-800">
          If you can't find your shipment or need assistance, please contact our
          customer service team at{" "}
          <span className="font-medium">+234 815 987 9973</span> or email us at{" "}
          <span className="font-medium">info@tind-ng.com</span>
        </p>
      </div>
    </div>
  );
};

export default TrackShipment;