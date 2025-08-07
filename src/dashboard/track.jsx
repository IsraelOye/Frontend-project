import { useState } from "react";

const TrackShipment = () => {
  const [shipmentId, setShipmentId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleTrack = async () => {
    if (!shipmentId) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/${shipmentId}`
      );

      if (!res.ok) {
        throw new Error("Shipment not found");
      }

      const data = await res.json();
      setShipment(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setShipment(null);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="px-5">
      <h2 className="text-xl font-semibold mb-4 mt-2">Track Shipment</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          value={shipmentId}
          onChange={(e) => setShipmentId(e.target.value)}
          placeholder="Enter shipment ID"
          className="border px-2 py-2 rounded w-70 outline-gray-500 placeholder:italic placeholder:text-sm placeholder:text-gray-700"
        />
        <button
          type="submit"
          onClick={handleTrack}
          disabled={loading}
          className="bg-blue-600 text-white w-25 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          {loading ? "Tracking..." : "Track"}
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {shipment && (
        <div className="borde px-4 py-2 rounded bg-white shadow max-w-3xl">
          <p>
            <strong>Recipient:</strong>{" "}
            {shipment?.new_recipient?.full_name || "Not available"}
          </p>
          <p>
            <strong>Content:</strong> {shipment.content}
          </p>
          <p>
            <strong>Weight:</strong> {shipment.weight}kg
          </p>
          <p>
            <strong>Status:</strong> {shipment.status || "Pending"}
          </p>
          <p>
            <strong>Delivery Date:</strong> {shipment.delievery_date}
          </p>
        </div>
      )}
    </div>
  );
};

export default TrackShipment;