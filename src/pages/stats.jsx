import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const [count, setCount] = useState({ years: 0, countries: 0, packages: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        years: Math.min(prev.years + 1, 10),
        countries: Math.min(prev.countries + 10, 200),
        packages: Math.min(prev.packages + 100, 5000),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-20 py-16 bg-indigo-900 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        <div>
          <h3 className="text-5xl font-bold text-orange-500">{count.years}+</h3>
          <p className="text-lg mt-2">Years in Service</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-orange-500">
            {count.countries}+
          </h3>
          <p className="text-lg mt-2">Countries Covered</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-orange-500">
            {count.packages}+
          </h3>
          <p className="text-lg mt-2">Packages Delivered</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
