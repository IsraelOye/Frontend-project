import Navbar from "./component/navbar";
import { FaSpinner } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <h1>
        My react project <FaSpinner />
      </h1>
      <p>this is a spinning icon</p>
    </div>
  );
};

export default App;
