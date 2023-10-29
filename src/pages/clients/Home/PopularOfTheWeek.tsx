import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PopularOfTheWeek() {
    return (
        <div className="w-full my-8">
            <h1 className="text-white font-bold text-lg mb-4">Popular Of The Week</h1>
            {/* List movie */}
            <div className="w-full grid grid-cols-3 gap-6">
                {/* Item */}
                <div className=" flex items-center">
                    {/* Top */}
                    <p className=" text-3xl text-white font-extrabold mx-2">1</p>
                    <img className="w-16 rounded-md ml-4" src="https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg" alt="" />
                    {/* Info */}
                    <div className="text-xs text-white ">
                        <p className="line-clamp-1 px-4 my-2">Name Film</p>
                        <span className="px-4"><FontAwesomeIcon icon={faStar} className='mr-2 text-yellow-400' />4,5 | <span className="text-gray-200/50">Movie</span></span>
                    </div>
                </div>
                <div className=" flex items-center">
                    {/* Top */}
                    <p className=" text-3xl text-white font-extrabold mx-2">2</p>
                    <img className="w-16 rounded-md ml-4" src="https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg" alt="" />
                    {/* Info */}
                    <div className="text-xs text-white ">
                        <p className="line-clamp-1 px-4 my-2">Name Film</p>
                        <span className="px-4"><FontAwesomeIcon icon={faStar} className='mr-2 text-yellow-400' />4,5 | <span className="text-gray-200/50">Movie</span></span>
                    </div>
                </div>
                <div className=" flex items-center">
                    {/* Top */}
                    <p className=" text-3xl text-white font-extrabold mx-2">3</p>
                    <img className="w-16 rounded-md ml-4" src="https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg" alt="" />
                    {/* Info */}
                    <div className="text-xs text-white ">
                        <p className="line-clamp-1 px-4 my-2">Name Film</p>
                        <span className="px-4"><FontAwesomeIcon icon={faStar} className='mr-2 text-yellow-400' />4,5 | <span className="text-gray-200/50">Movie</span></span>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default PopularOfTheWeek;