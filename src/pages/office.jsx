import Navbar from "../component/navbar";
import Footer from "../component/footer";

const offices = [
  {
    title: "Yaba",
    body: "129, Yaba Road, Yaba Lagos",
    phone: "+234 815 987 9973",
  },
  {
    title: "Apapa",
    body: "25, Warehouse Road, Beside Noss Stores, Apapa.",
    phone: "+234 809 787 2172",
  },
  {
    title: "Victoria Island",
    body: "Plot 22, Idowu Taylor Street, Victoria Island.",
    phone: "+234 856 020 8910",
  },
  {
    title: "Surulere",
    body: "Plot 32, Bode Thomas Street, Surulere.",
    phone: "+234 817 204 4601",
  },
  {
    title: "Mushin",
    body: "Agege Motor road, total bus stop, Mushin.",
    phone: "+234 806 953 4302",
  },
  {
    title: "Ogba",
    body: "3A, Ajayi Road, Beside Spootom Link Services, Aguda Ogba, Lagos",
    phone: "+234 814 314 6905",
  },
];

const Office = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-35 min-h-screen">
      <Navbar />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-25">
        <div className="text-center py-6 sm:py-8 md:py-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-orange-600 font-semibold mb-3 sm:mb-2">
            LAGOS OFFICES
          </h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
            We are strategically located across multiple regions to serve you
            better. Visit any of our offices or contact us for assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-15 text-center mb-8 sm:mb-12">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border-t-1 border-gray-100 rounded-lg hover:bg-orange-600 hover:text-white duration-300 transition-all transform hover:scale-105 p-4 sm:p-5 md:p-6 group"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-white transition-colors">
                {office.title}
              </h2>
              <p className="text-blue-600 group-hover:text-white text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed transition-colors">
                {office.body}
              </p>
              <p className="text-blue-600 group-hover:text-white text-sm sm:text-base font-medium transition-colors">
                <span className="block sm:inline">Phone: </span>
                <a
                  href={`tel:${office.phone}`}
                  className="hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {office.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Office;