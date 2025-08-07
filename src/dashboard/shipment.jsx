import { useState } from "react";

const CreateShipment = () => {
  const initialFormData = {
    recipient_name: "",
    recipient_address: "",
    phone1: "",
    phone2: "",
    content: "",
    weight: "",
    note: "",
    delievery_date: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shipment, setShipment] = useState(null); // ✅ New state for shipment details

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You're not logged in. Please login again.");
      setLoading(false);
      return;
    }

    const payload = {
      content: formData.content,
      weight: Number(formData.weight),
      note: formData.note,
      delievery_date: formData.delievery_date,
      new_recipient: {
        full_name: formData.recipient_name,
        address: formData.recipient_address,
        phone_number_1: formData.phone1,
        phone_number_2: formData.phone2,
      },
    };

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Response status:", response.status);
        console.error("Response body:", result);
        throw new Error(
          result?.detail?.[0]?.msg || "Failed to create shipment"
        );
      }

      setSuccessMessage("Shipment created successfully!");
      setTrackingId(result.tracking_id || result.id || "");
      setShipment(result); // ✅ Store shipment data
      setFormData(initialFormData);
      setError("");
    } catch (err) {
      setError(err.message);
      setSuccessMessage("");
      setTrackingId("");
      setShipment(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <h1 className="text-2xl font-bold mb-6 text-green-900">
        Create New Shipment
      </h1>

      {successMessage && (
        <div className="bg-green-100 text-green-800 px-4 py-3 rounded mb-4">
          {successMessage}
          {trackingId && (
            <p className="mt-2 text-sm text-green-700">
              <strong>Tracking ID:</strong> {trackingId}
            </p>
          )}
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {shipment && (
        <div className="bg-white shadow-md rounded px-6 py-4 mt-6">
          <h2 className="text-xl font-semibold mb-2">Shipment Details</h2>

          <p className="mb-1">
            <strong>Recipient:</strong>{" "}
            {shipment.recipient?.full_name || "Not available"}
          </p>

          <p className="mb-1">
            <strong>Content:</strong> {shipment.content}
          </p>

          <p className="mb-1">
            <strong>Weight:</strong> {shipment.weight}kg
          </p>

          <p className="mb-1">
            <strong>Status:</strong> {shipment.status}
          </p>

          <p className="mb-1">
            <strong>Delivery Date:</strong> {shipment.delievery_date}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Recipient Name
            </label>
            <input
              type="text"
              name="recipient_name"
              value={formData.recipient_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              name="recipient_address"
              value={formData.recipient_address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Phone Number 1
            </label>
            <input
              type="tel"
              name="phone1"
              value={formData.phone1}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Phone Number 2
            </label>
            <input
              type="tel"
              name="phone2"
              value={formData.phone2}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Content</label>
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Weight</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Note</label>
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Delivery Date
            </label>
            <input
              type="date"
              name="delievery_date"
              value={formData.delievery_date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {loading ? "Creating shipment..." : "Create Shipment"}
        </button>
      </form>
    </div>
  );
};

export default CreateShipment;
