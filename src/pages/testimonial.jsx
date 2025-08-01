
const Testimonials = () => {
  const reviews = [
    {
      name: "Israel O.",
      text: "Tind Logistics is reliable and always delivers on time. Highly recommend!",
    },
    {
      name: "Temitope A.",
      text: "Excellent service and great communication throughout the process.",
    },
    {
      name: "David O.",
      text: "Affordable rates and quick delivery. They really exceeded my expectations.",
    },
    {
      name: "Nifemi ",
      text: "Reasonable pricing and fast shipping. They truly went above and beyond.",
    },
  ];

  return (
    <div className="px-20 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-indigo-950 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-4">"{r.text}"</p>
            <h4 className="text-indigo-900 font-semibold">- {r.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;