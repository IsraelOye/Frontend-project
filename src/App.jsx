// import { motion } from "framer-motion";
// import Navbar from "./component/navbar";
// import Footer from "./component/footer";
// import Option from "./component/option";
// import Services from "./component/services";
// import WhyChooseUs from "./pages/why";
// import Office from "./pages/office";
// import Testimonials from "./pages/testimonial";
// import Stats from "./pages/stats";
// import HeroSlideshow from "./component/slideshow";
// import Air2 from "./assets/Airplane-2.png";
// import { FaArrowRight, FaArrowUp } from "react-icons/fa6";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { FaRegClock } from "react-icons/fa6";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineLocalShipping } from "react-icons/md";
// import { GiFishingBoat } from "react-icons/gi";
// import { IoAirplaneOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const App = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white">
//         <HeroSlideshow />
//       </div>
//       {/* <Office
//         title="A man"
//         body="qwertyu asdfgh.jkl,tyuiop,zxcvbnm"
//        /> */}

//       <div className="pt-5">
//         {/* Tracking Section */}
//         <motion.section
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="Tracking px-20 py-10 rounded-lg shadow-lg"
//         >
//           <div className="flex items-center gap-2 mb-5">
//             <input
//               type="text"
//               className="px-3 py-2 placeholder:italic placeholder:text-sm placeholder:text-gray-500 border border-gray-400 rounded w-100 outline-none"
//               placeholder="Your Tracking Number"
//             />
//             <Link
//               to="/dashboard/track"
//               className="cursor-pointer bg-orange-500 px-4 py-2 text-white font-medium flex items-center gap-2 hover:bg-orange-600 duration-300"
//             >
//               TRACK
//               <FaArrowRight className="text-sm" />
//             </Link>
//           </div>
//         </motion.section>

//         {/* Services Section */}
//         <div className="px-20 bg-gray-50">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: false }}
//             className="text-orange-500 text-4xl font-medium text-center py-10"
//           >
//             Our Services
//           </motion.p>
//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: false }}
//             className="text-3xl font-bold text-indigo-950 text-center"
//           >
//             Our Core Service Offerings
//           </motion.h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//             {[
//               {
//                 icon: <MdOutlineLocalShipping />,
//                 title: "Local Logistics",
//                 about:
//                   "Tind delivers innovative, end-to-end logistics and transportation services designed to streamline operations and drive efficiency.",
//               },
//               {
//                 icon: <GiFishingBoat />,
//                 title: "Sea Freight",
//                 about:
//                   "Our sea freight service has expanded significantly in recent years. Through our trusted maritime partners, we transport goods to global destinations, ensuring a reliable and reassuring presence.",
//               },
//               {
//                 icon: <IoAirplaneOutline />,
//                 title: "Air Freight",
//                 about:
//                   "TIND’s global deliveries utilize our extensive international network, reaching over 200 countries worldwide.",
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: false, amount: 0.3 }}
//               >
//                 <Services
//                   icon={service.icon}
//                   title={service.title}
//                   about={service.about}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* About Section */}
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="px-20 py-16 bg-gradient-to-r from-gray-50 to-gray-200 grid grid-cols-1 lg:grid-cols-2 items-start gap-10"
//         >
//           <div className="mb-20">
//             <p className="text-orange-500 text-lg font-medium mb-6">
//               About Our Company
//             </p>
//             <h3 className="text-4xl font-bold text-indigo-950 leading-12 mb-8">
//               Tind is a leading logistics solutions company, proud to offer
//               unmatched coverage both locally and internationally.
//             </h3>
//             <p className="text-gray-600 leading-7 mb-8">
//               Our mission is to support your business by simplifying your
//               workload. We strive to become Nigeria’s leading courier
//               serviceprovider, meeting your delivery and errand needs promptly
//               and efficiently. Our services cover the pickup and delivery of
//               parcels, documents, items, and pallets of goods with
//               professionalism and care.
//             </p>
//             <p className="text-gray-600 leading-7 mb-5">
//               Tranex Delivery Services eliminates the stress of sending
//               packages. With real-time web and mobile tracking, you can monitor
//               your shipment every step of the way. Our highly trained customer
//               service team ensures every client receives exceptional care, while
//               our tailored logistics solutions are designed to meet your unique
//               needs. With Tranex, we’ve got you covered.
//             </p>

//             <Link
//               to="/about"
//               className="bg-orange-500 px-7 py-3 text-white text-sm rounded hover:bg-orange-600 duration-300"
//             >
//               MORE ABOUT US
//             </Link>
//           </div>
//           <div>
//             <img src={Air2} alt="an airplane picture" />
//           </div>
//         </motion.div>
//       </div>

//       <WhyChooseUs />

//       {/* Contact Options */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="grid grid-cols-3 bg-white py-15 px-20 shadow-md"
//       >
//         <Option
//           icon={<RiCustomerService2Line />}
//           first="Call Us Anytime"
//           second="Customer Care:(234)8159879973"
//           third="Business:(234)8097872172"
//         />
//         <Option
//           icon={<FaRegClock />}
//           first="Sat - Sun CLOSED"
//           second="Mon - Fri 8.00 - 17.00"
//         />
//         <Option
//           icon={<IoLocationOutline />}
//           first="Nigeria"
//           second="129, Yaba Road,"
//           third="Yaba Lagos"
//         />
//       </motion.div>
      
//       <Testimonials />
//       <Stats />

//       {/* Back to Top */}
//       <motion.button
//         whileHover={{ scale: 1.2 }}
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 bg-orange-500 text-white text-center p-3 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer"
//       >
//         <FaArrowUp />
//       </motion.button>

//       <Footer />
//     </div>
//   );
// };

// export default App;




import { motion } from "framer-motion";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Option from "./component/option";
import Services from "./component/services";
import WhyChooseUs from "./pages/why";
import Testimonials from "./pages/testimonial";
import Stats from "./pages/stats";
import HeroSlideshow from "./component/slideshow";
import Air2 from "./assets/Airplane-2.png";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiFishingBoat } from "react-icons/gi";
import { IoAirplaneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white">
        <HeroSlideshow />
      </div>

      <div className="pt-5">
        {/* Tracking Section */}
        <motion.section
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="Tracking px-4 md:px-8 lg:px-20 py-6 md:py-8 lg:py-10 rounded-lg shadow-lg"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-5 max-w-2xl mx-auto">
            <input
              type="text"
              className="px-3 py-2 placeholder:italic placeholder:text-sm placeholder:text-gray-500 border border-gray-400 rounded w-full sm:flex-1 outline-none"
              placeholder="Your Tracking Number"
            />
            <Link
              to="/dashboard/track"
              className="cursor-pointer bg-orange-500 px-4 py-2 text-white font-medium flex items-center justify-center gap-2 hover:bg-orange-600 duration-300 rounded sm:rounded-none sm:whitespace-nowrap"
            >
              TRACK
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.section>

        {/* Services Section */}
        <div className="px-4 md:px-8 lg:px-20 bg-gray-50 pb-7">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-medium text-center py-6 md:py-8 lg:py-10"
          >
            Our Services
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-950 text-center px-4"
          >
            Our Core Service Offerings
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-10">
            {[
              {
                icon: <MdOutlineLocalShipping />,
                title: "Local Logistics",
                about:
                  "Tind delivers innovative, end-to-end logistics and transportation services designed to streamline operations and drive efficiency.",
              },
              {
                icon: <GiFishingBoat />,
                title: "Sea Freight",
                about:
                  "Our sea freight service has expanded significantly in recent years. Through our trusted maritime partners, we transport goods to global destinations, ensuring a reliable and reassuring presence.",
              },
              {
                icon: <IoAirplaneOutline />,
                title: "Air Freight",
                about:
                  "TIND's global deliveries utilize our extensive international network, reaching over 200 countries worldwide.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Services
                  icon={service.icon}
                  title={service.title}
                  about={service.about}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-16 bg-gradient-to-r from-gray-50 to-gray-200 grid grid-cols-1 lg:grid-cols-2 items-start gap-6 md:gap-8 lg:gap-10"
        >
          <div className="mb-8 md:mb-12 lg:mb-20">
            <p className="text-orange-500 text-base md:text-lg font-medium mb-4 md:mb-6">
              About Our Company
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-950 leading-8 md:leading-10 lg:leading-12 mb-6 md:mb-8">
              Tind is a leading logistics solutions company, proud to offer
              unmatched coverage both locally and internationally.
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 mb-6 md:mb-8">
              Our mission is to support your business by simplifying your
              workload. We strive to become Nigeria's leading courier
              serviceprovider, meeting your delivery and errand needs promptly
              and efficiently. Our services cover the pickup and delivery of
              parcels, documents, items, and pallets of goods with
              professionalism and care.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 mb-4 md:mb-5">
              Tind Delivery Services eliminates the stress of sending
              packages. With real-time web and mobile tracking, you can monitor
              your shipment every step of the way. Our highly trained customer
              service team ensures every client receives exceptional care, while
              our tailored logistics solutions are designed to meet your unique
              needs. With Tind, we've got you covered.
            </p>

            <Link
              to="/about"
              className="inline-block bg-orange-500 px-6 md:px-7 py-2 md:py-3 text-white text-sm rounded hover:bg-orange-600 duration-300"
            >
              MORE ABOUT US
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={Air2}
              alt="an airplane picture"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      <WhyChooseUs />

      {/* Contact Options */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-white py-8 md:py-12 lg:py-15 px-4 md:px-8 lg:px-20 shadow-md"
      >
        <Option
          icon={<RiCustomerService2Line />}
          first="Call Us Anytime"
          second="Customer Care:(234)8159879973"
          third="Business:(234)8097872172"
        />
        <Option
          icon={<FaRegClock />}
          first="Sat - Sun CLOSED"
          second="Mon - Fri 8.00 - 17.00"
        />
        <Option
          icon={<IoLocationOutline />}
          first="Nigeria"
          second="129, Yaba Road,"
          third="Yaba Lagos"
        />
      </motion.div>

      <Testimonials />
      <Stats />

      {/* Back to Top */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-orange-500 text-white text-center p-2 md:p-3 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer z-40"
      >
        <FaArrowUp className="text-sm md:text-base" />
      </motion.button>

      <Footer />
    </div>
  );
};

export default App;