import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function JustRelease() {
    return (
        <div>
            <h1 className="text-white -mb-6 text-lg font-bold">Just Release</h1>
            <div className={`w-full my-8 flex duration-500 overflow-hidden justify-between`}>
                <div className={`  relative duration-300 h-72 rounded-lg shadow-md bg-black`}>
                    <img className='h-full rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div
                        style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0),rgb(25 25 25)" }}
                        className='absolute bottom-0 text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1 pb-2'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300 font-bold'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>
                <div className={`  relative duration-300 h-72 rounded-lg shadow-md bg-black`}>
                    <img className='h-full rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div
                        style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0),rgb(25 25 25)" }}
                        className='absolute bottom-0 text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1 pb-2'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300 font-bold'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>
                <div className={`  relative duration-300 h-72 rounded-lg shadow-md bg-black`}>
                    <img className='h-full rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div
                        style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0),rgb(25 25 25)" }}
                        className='absolute bottom-0 text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1 pb-2'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300 font-bold'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>
                <div className={`  relative duration-300 h-72 rounded-lg shadow-md bg-black`}>
                    <img className='h-full rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div
                        style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0),rgb(25 25 25)" }}
                        className='absolute bottom-0 text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1 pb-2'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300 font-bold'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>
                <div className={`  relative duration-300 h-72 rounded-lg shadow-md bg-black`}>
                    <img className='h-full rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div
                        style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0),rgb(25 25 25)" }}
                        className='absolute bottom-0 text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1 pb-2'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300 font-bold'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default JustRelease;