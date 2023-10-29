import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker, DatePickerProps, Space } from "antd";


function DashBoard() {
    const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
        console.log(dateString);
    };
    return (
        <div className="w-full flex flex-col" >
            <div className="mb-8">
                <h1 className="uppercase text-xs text-green-500 pb-4">DashBoard</h1>
                <p className="text-lg text-gray-700 font-semibold">Overview</p>
            </div>

            <div className="">
                <div className="mb-4">
                    <Space direction="vertical">
                        <DatePicker showNow={true} onChange={onChange} />
                    </Space>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    <div className=" h-32 rounded-lg shadow-lg bg-white flex flex-col justify-center items-center border-b-2 border-r-2">
                        <p className="text-xs font-medium text-gray-400 ">User</p>
                        <p className="font-bold text-gray-600 text-2xl py-2">266</p>
                        <p className="flex items-center text-red-500"><FontAwesomeIcon icon={faSortDown} /><span>24%</span> </p>
                    </div>
                    <div className=" h-32 rounded-lg shadow-lg bg-white flex flex-col justify-center items-center border-b-2 border-r-2">
                        <p className="text-xs font-medium text-gray-400 ">View</p>
                        <p className="font-bold text-gray-600 text-2xl py-2">266</p>
                        <p className="flex items-center text-green-500"><FontAwesomeIcon icon={faSortUp} /><span>24%</span> </p>
                    </div>
                    <div className=" h-32 rounded-lg shadow-lg bg-white flex flex-col justify-center items-center border-b-2 border-r-2">
                        <p className="text-xs font-medium text-gray-400 ">Comments</p>
                        <p className="font-bold text-gray-600 text-2xl py-2">266</p>
                        <p className="flex items-center text-red-500"><FontAwesomeIcon icon={faSortDown} /><span>24%</span> </p>
                    </div>
                    <div className=" h-32 rounded-lg shadow-lg bg-white flex flex-col justify-center items-center border-b-2 border-r-2">
                        <p className="text-xs font-medium text-gray-400 ">User</p>
                        <p className="font-bold text-gray-600 text-2xl py-2">266</p>
                        <p className="flex items-center text-red-500"><FontAwesomeIcon icon={faSortDown} /><span>24%</span> </p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default DashBoard;