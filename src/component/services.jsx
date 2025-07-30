const Services = (props) => {
    return (
      <div className="group text-center border border-gray-300 rounded-md shadow-md px-10 py-20 hover:bg-orange-600 duration-400">
        <p className="text-orange-600 text-5xl w-10 mx-auto group-hover:text-white transition-all transform group-hover:scale-110">{props.icon}</p>
        <div className="leading-7">
          <h2 className="text-4xl font-bold text-indigo-950 m-5 group-hover:text-white">{props.title}</h2>
          <p className="text-gray-500 mb-10 group-hover:text-white">{props.about}</p>
        </div>
      </div>
    );
};

export default Services;