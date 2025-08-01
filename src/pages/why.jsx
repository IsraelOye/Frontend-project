import { LiaShippingFastSolid } from "react-icons/lia";
import { GiWorld } from "react-icons/gi";
import { MdOutlinePhone } from "react-icons/md";
import { GiCash } from "react-icons/gi";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your packages delivered on time, every time.",
      icon: <LiaShippingFastSolid />,
    },
    {
      title: "24/7 Support",
      desc: "We’re always here to assist you, day or night.",
      icon: <MdOutlinePhone />,
    },
    {
      title: "Global Coverage",
      desc: "Delivering to over 200 countries worldwide.",
      icon: <GiWorld />,
    },
    {
      title: "Affordable Rates",
      desc: "Top-quality logistics at competitive prices.",
      icon: <GiCash />,
    },
  ];

  return (
    <div className="px-20 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-indigo-950 mb-10">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((f, i) => (
          <div
            export
            default
            WhyChooseUskey={i}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-5xl text-gray-900 w-15 mx-auto mb-4">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
