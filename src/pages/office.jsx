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
    body: "Plot 32, Bode Thomas Street,Surulere.",
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
    <div className="pt-35">
      <Navbar />
       <div className="px-25">
       <div className="text-center py-10">
          <h1 className="text-2xl text-orange-600 font-semibold mb-2">LAGOS OFFICES</h1>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We are strategically located across multiple regions to serve you better. Visit any of our offices or contact us for assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 text-center mb-8 ">
            {offices.map((office, index) => (
                <div key={index} className="bg-white shadow-lg border-t-1 border-gray-100 space-y-5 rounded-lg hover:bg-orange-600 duration-300">
                <h2 className="text-xl font-semibold mt-3">{office.title}</h2>
                <p className="text-blue-600 px-5">{office.body}</p>
                <p className="text-blue-600 mb-10">Phone: {office.phone}</p>
                </div>
            ))}
        </div>
       </div>

      <Footer />
    </div>
  );
};

export default Office;
