
// import { IoAirplaneOutline } from "react-icons/io5";
// <IoAirplaneOutline />;
// import { GiFishingBoat } from "react-icons/gi";
// <GiFishingBoat />;
// import { MdOutlineLocalShipping } from "react-icons/md";
// <MdOutlineLocalShipping />;

const Option = (props) => {
    return (
        <div className="flex items-center gap-3">
             <p className="text-5xl text-orange-600">{props.icon}</p>
            <div className="space-y-1">
                <p className="text-sm text-gray-500">{props.first}</p>
                <p className="text-xl font-medium">{props.second}</p>
                <p className="text-xl font-medium">{props.third}</p>
            </div>
        </div>
    );
};

export default Option;