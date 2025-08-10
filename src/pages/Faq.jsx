// import { useState } from "react";
// import Navbar from "../component/navbar";
// import Footer from "../component/footer";
// import { FaChevronDown } from "react-icons/fa";

// function FAQ() {
//   const faqs = [
//     {
//       question: "What services does Tind Logistics provide?",
//       answer:
//         "We offer end-to-end logistics solutions including local deliveries, sea freight, air freight, and supply chain management, both locally and internationally.",
//     },
//     {
//       question: "How can I track my shipment?",
//       answer:
//         "You can track your shipment using the tracking number provided. Simply enter it in the 'Tracking' section on our website to view real-time updates.",
//     },
//     {
//       question: "Do you offer international shipping?",
//       answer:
//         "Yes. Our extensive global network allows us to deliver to over 200 countries worldwide through reliable partners.",
//     },
//     {
//       question: "How do I schedule a pickup?",
//       answer:
//         "Scheduling a pickup is simple. Contact our customer care team or book through our website, and we’ll arrange a convenient time for you.",
//     },
//     {
//       question: "Are my shipments insured?",
//       answer:
//         "Yes. We prioritize safety and offer insurance options to protect your shipments throughout the delivery process.",
//     },
//     {
//       question: "How can I contact customer support?",
//       answer:
//         "You can reach our customer service team via phone, email, or the contact form on our website. We’re here to assist you with any inquiries.",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="pt-30">
//         <Navbar />
//       <h2 className="text-4xl font-bold text-center text-indigo-950 mb-10 mt-8">
//         Frequently Asked Questions
//       </h2>
//       <div className="max-w-3xl mx-auto space-y-4 mb-15">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-300 rounded-lg p-5 shadow-sm"
//           >
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full flex justify-between items-center text-left focus:outline-none"
//             >
//               <span className="text-lg font-medium">{faq.question}</span>
//               <FaChevronDown
//                 className={`transform transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             {openIndex === index && (
//               <div className="mt-3 text-gray-600">{faq.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default FAQ;



import { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "What services does Tind Logistics provide?",
      answer:
        "We offer end-to-end logistics solutions including local deliveries, sea freight, air freight, and supply chain management, both locally and internationally.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment using the tracking number provided. Simply enter it in the 'Tracking' section on our website to view real-time updates.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes. Our extensive global network allows us to deliver to over 200 countries worldwide through reliable partners.",
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "Scheduling a pickup is simple. Contact our customer care team or book through our website, and we'll arrange a convenient time for you.",
    },
    {
      question: "Are my shipments insured?",
      answer:
        "Yes. We prioritize safety and offer insurance options to protect your shipments throughout the delivery process.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer service team via phone, email, or the contact form on our website. We're here to assist you with any inquiries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-30 min-h-screen">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-indigo-950 mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-6 md:mt-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-15">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start sm:items-center text-left focus:outline-none rounded-md p-1 -m-1"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base sm:text-lg font-medium text-gray-900 pr-3 leading-relaxed">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 text-indigo-600 flex-shrink-0 mt-0.5 sm:mt-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed animate-fadeIn"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default FAQ;