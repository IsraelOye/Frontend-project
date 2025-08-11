import { useEffect, useState } from "react";

const ShipmentHistory = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShipments = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You are not logged in. Please login.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("Fetch error:", data);
          throw new Error(data?.detail || "Failed to fetch shipment history.");
        }

        setShipments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">
        Shipment History
      </h1>

      {loading && <p className="text-blue-700 text-center">Loading shipments...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {shipments.length === 0 && !loading && (
        <p className="text-gray-600">No shipments found.</p>
      )}

      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div
            key={shipment.id}
            className="bg-white shadow-md p-4 rounded border border-gray-200"
          >
            <p>
              <strong>Tracking ID:</strong> {shipment.tracking_id}
            </p>
            <p>
              <strong>Content:</strong> {shipment.content}
            </p>
            <p>
              <strong>Weight:</strong> {shipment.weight}kg
            </p>
            <p>
              <strong>Status:</strong> {shipment.status}
            </p>
            <p>
              <strong>Delivery Date:</strong> {shipment.delievery_date}
            </p>
            <p>
              <strong>Recipient:</strong>{" "}
              {shipment.recipient?.full_name || "Not available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentHistory;