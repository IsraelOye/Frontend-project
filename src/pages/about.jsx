// import Navbar from "../component/navbar";
// import Footer from "../component/footer";
// // import BGimage from "../assets/logo-3.png";
// import Air2 from "../assets/Airplane-2.png";

// const About = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="mb-20 pt-40 px-20">
//         <div className="grid grid-cols-2 items-center">
//           <div>
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
//           </div>
//           <div>
//             <img src={Air2} alt="an airplane picture" />
//           </div>
//         </div>
//         <div className="mt-8 text-center">
//           <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-indigo-950">
//             OUR VISION
//           </h1>
//           <p className="leading-relaxed text-gray-600">
//             To be the preferred logistics company in Africa
//           </p>
//         </div>

//         <div className="mt-8 text-center">
//           <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-indigo-950">
//             OUR MISSION
//           </h1>
//           <p className="leading-relaxed text-gray-600">
//             Our mission is exceed stakeholders' expectations by leveraging
//             technology & our people to deliver the best-in-class logistics
//             solutions
//           </p>
//         </div>

//         <div className="mt-8 text-center">
//           <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-indigo-950">
//             OUR CORE VALUES
//           </h1>
//           <div className="space-y-2 text-gray-600">
//             <p>Integrity</p>
//             <p>Team Work</p>
//             <p>Innovation</p>
//             <p>Excellence</p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default About;


import Navbar from "../component/navbar";
import Footer from "../component/footer";
// import BGimage from "../assets/logo-3.png";
import Air2 from "../assets/Airplane-2.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-12 sm:mb-16 md:mb-20 pt-20 sm:pt-24 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-orange-500 text-base sm:text-lg font-medium mb-4 sm:mb-6">
              About Our Company
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-950 leading-tight sm:leading-relaxed lg:leading-12 mb-6 sm:mb-8">
              Tind is a leading logistics solutions company, proud to offer
              unmatched coverage both locally and internationally.
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7 mb-6 sm:mb-8">
              Our mission is to support your business by simplifying your
              workload. We strive to become Nigeria's leading courier service
              provider, meeting your delivery and errand needs promptly and
              efficiently. Our services cover the pickup and delivery of
              parcels, documents, items, and pallets of goods with
              professionalism and care.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7 mb-4 sm:mb-5">
              Tind Delivery Services eliminates the stress of sending
              packages. With real-time web and mobile tracking, you can monitor
              your shipment every step of the way. Our highly trained customer
              service team ensures every client receives exceptional care, while
              our tailored logistics solutions are designed to meet your unique
              needs. With Tind, we've got you covered.
            </p>
          </div>
          <div className="order-2 lg:order-2 flex justify-center">
            <img
              src={Air2}
              alt="an airplane picture"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center">
          <h1 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-indigo-950">
            OUR VISION
          </h1>
          <p className="leading-relaxed text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
            To be the preferred logistics company in Africa
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <h1 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-indigo-950">
            OUR MISSION
          </h1>
          <p className="leading-relaxed text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
            Our mission is to exceed stakeholders' expectations by leveraging
            technology & our people to deliver the best-in-class logistics
            solutions
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <h1 className="text-xl sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-indigo-950">
            OUR CORE VALUES
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {["Integrity", "Team Work", "Innovation", "Excellence"].map(
              (value, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-2 sm:p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {value}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;