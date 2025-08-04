import { useState, useEffect, useRef } from "react";

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
      name: "Nifemi",
      text: "Reasonable pricing and fast shipping. They truly went above and beyond.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedReviews = [...reviews, reviews[0]]; // Clone first slide

  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (current === extendedReviews.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable animation
        setCurrent(0); // jump to first
      }, 500); // wait for transition to finish
      return () => clearTimeout(timeout);
    }
  }, [current, extendedReviews.length]);

  return (
    <div className="px-6 md:px-20 py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-indigo-950 mb-10">
        What Our Clients Say
      </h2>

      <div className="max-w-3xl mx-auto relative overflow-hidden">
        {/* Slide wrapper */}
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedReviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full bg-white p-8 rounded-lg shadow text-center"
              style={{ flex: "0 0 100%" }}
            >
              <p className="text-gray-700 italic mb-4 text-lg">"{r.text}"</p>
              <h4 className="text-indigo-900 font-semibold text-lg">
                - {r.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsTransitioning(true);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current % reviews.length
                  ? "bg-indigo-600"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;