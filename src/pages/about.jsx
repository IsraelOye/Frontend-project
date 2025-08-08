import Navbar from "../component/navbar";
import Footer from "../component/footer";
// import BGimage from "../assets/logo-3.png";
import Air2 from "../assets/Airplane-2.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-20 pt-40 px-20">
        <div className="grid grid-cols-2 items-center">
          <div>
            <p className="text-orange-500 text-lg font-medium mb-6">
              About Our Company
            </p>
            <h3 className="text-4xl font-bold text-indigo-950 leading-12 mb-8">
              Tind is a leading logistics solutions company, proud to offer
              unmatched coverage both locally and internationally.
            </h3>
            <p className="text-gray-600 leading-7 mb-8">
              Our mission is to support your business by simplifying your
              workload. We strive to become Nigeria’s leading courier
              serviceprovider, meeting your delivery and errand needs promptly
              and efficiently. Our services cover the pickup and delivery of
              parcels, documents, items, and pallets of goods with
              professionalism and care.
            </p>
            <p className="text-gray-600 leading-7 mb-5">
              Tranex Delivery Services eliminates the stress of sending
              packages. With real-time web and mobile tracking, you can monitor
              your shipment every step of the way. Our highly trained customer
              service team ensures every client receives exceptional care, while
              our tailored logistics solutions are designed to meet your unique
              needs. With Tranex, we’ve got you covered.
            </p>
          </div>
          <div>
            <img src={Air2} alt="an airplane picture" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-indigo-950">
            OUR VISION
          </h1>
          <p className="leading-relaxed text-gray-600">
            To be the preferred logistics company in Africa
          </p>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-indigo-950">
            OUR MISSION
          </h1>
          <p className="leading-relaxed text-gray-600">
            Our mission is exceed stakeholders' expectations by leveraging
            technology & our people to deliver the best-in-class logistics
            solutions
          </p>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-indigo-950">
            OUR CORE VALUES
          </h1>
          <div className="space-y-2 text-gray-600">
            <p>Integrity</p>
            <p>Team Work</p>
            <p>Innovation</p>
            <p>Excellence</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
