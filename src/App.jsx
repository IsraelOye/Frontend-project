import Navbar from "./component/navbar";
import Option from "./component/option";
import Services from "./component/services";
import Delivery from'./assets/delivery-picture1.jpg'
import Delivery2 from'./assets/delivery-picture2.jpg'
import { FaArrowRight } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiFishingBoat } from "react-icons/gi";
import { IoAirplaneOutline } from "react-icons/io5";
// import { FaSpinner } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <section className="Tracking px-20">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="px-3 py-2 placeholder:italic placeholder:text-gray-700 bg-blue-700 w-100 outline-blue-200"
              placeholder="Your Tracking Number"
            />
            <button className="cursor-pointer bg-yellow-600 px-4 py-2 text-white font-medium flex items-center gap-2 hover:bg-yellow-700 duration-300">
              TRACK
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </section>

        <div className="grid grid-cols-3 bg-gray-100 py-15 px-20">
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
        </div>

        <div className="px-20 my-30">
          <p className="text-orange-600 text-lg font-medium text-center">
            Our Services
          </p>
          <h3 className="text-4xl font-bold text-indigo-950 text-center">
            Our Core Service Offerings
          </h3>
          <div className="grid grid-cols-3 gap-6 mt-10">
            <Services
              icon={<MdOutlineLocalShipping />}
              title="Local Logistics"
              about="Tind delivers innovative, end-to-end logistics and transportation services designed to streamline operations and drive efficiency."
            />
            <Services
              icon={<GiFishingBoat />}
              title="Sea Freight"
              about="Our sea freight service has expanded significantly in recent years. Through our trusted maritime partners, we transport goods to global destinations, ensuring a reliable and reassuring presence."
            />
            <Services
              icon={<IoAirplaneOutline />}
              title="Air Freight"
              about="TIND’s global deliveries utilize our extensive international network, reaching over 200 countries worldwide."
            />
          </div>
        </div>

        <div className="px-20 grid grid-cols-3 items-center space-x-10 mb-10">
          <div className="col-span-2">
            <p className="text-orange-600 text-lg font-medium">Our Services</p>
            <h3 className="text-4xl font-bold text-indigo-950 ">
              Tind is a leading logistics solutions company, proud to offer
              unmatched coverage both locally and internationally.
            </h3>
          </div>
          <img src={Delivery2} alt="delivery picture" className="w-50 h-50 object-cover"/>
        </div>

        {/* <section className="">
          <h3 className="text-base font-medium text-orange-500">
            About Our Company
          </h3>
          <Link>More About Us. . .</Link>
        </section> */}
      </div>
    </div>
  );
};

export default App;
