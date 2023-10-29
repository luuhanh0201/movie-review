/* eslint-disable @typescript-eslint/no-explicit-any */

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";


function ListMovie() {
    const [heightMovies, setHeightMovies] = useState({
        height: "80",
        pagination: <Pagination showQuickJumper defaultCurrent={1} total={500} />
    })
    const handleSetHeightMovies = () => {
        heightMovies.height === "80" ? setHeightMovies({
            height: "160",
            pagination: <Pagination showQuickJumper defaultCurrent={12} total={500} />
        }) : setHeightMovies({
            height: "80",
            pagination: <div></div>
        })
    }
    const customItemRender = (current: any, type: any, originalElement: any) => {
        if (type === 'prev' || type === 'next') {
            return <span className="text-white">{originalElement}</span>;
        }

        if (type === 'page') {
            return (
                <span className={`text-lg ${current === 1 || current === 5 ? 'text-red-500' : 'text-blue-500'}`}>
                    {originalElement}
                </span>
            );
        }
        if (type === 'text') {
            return (
                <span className={`text-lg ${current === 1 || current === 5 ? 'text-red-500' : 'text-blue-500'}`}>
                    {current}
                </span>
            )
        }
        return null;
    };
    return (

        <div className="my-8 flex flex-col relative">
            <h1 className="text-white -mb-6 text-lg font-bold">Movie</h1>
            <div className={`w-full my-8 grid grid-cols-5 gap-6 h-${heightMovies.height} duration-500 overflow-hidden`}>
                <div className={`duration-300 h-80 rounded-lg border-2  border-gray-500/50 shadow-md bg-black`}>
                    <img className='w-full h-60 rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div className=' text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>

                <div className={`duration-300   rounded-lg border-2  border-gray-500/50 shadow-md bg-black`}>
                    <img className='w-full h-60 rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div className=' text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>

                <div className={`duration-300   rounded-lg border-2  border-gray-500/50 shadow-md bg-black`}>
                    <img className='w-full h-60 rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div className=' text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>

                <div className={`duration-300   rounded-lg border-2  border-gray-500/50 shadow-md bg-black`}>
                    <img className='w-full h-60 rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div className=' text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>

                <div className={`duration-300   rounded-lg border-2  border-gray-500/50 shadow-md bg-black`}>
                    <img className='w-full h-60 rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div className=' text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>

                <div className={`duration-300   rounded-lg border-2  border-gray-500/50 shadow-md bg-black`}>
                    <img className='w-full h-60 rounded-lg' src={"https://i.pinimg.com/736x/9f/2b/56/9f2b56e87178e9172f7bc69dcfc24611.jpg"} alt="" />
                    {/* Info */}
                    <div className=' text-white text-sm  w-full pl-2 duration-500 cursor-pointer mt-2 pt-1'>
                        <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>Name Film</Link>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                            Action
                        </span>
                    </div>
                </div>
            </div>

            {
                heightMovies.height === "80" ? (
                    <i onClick={handleSetHeightMovies} className="text-white font-light text-sm absolute right-4 bottom-0 cursor-pointer hover:text-green-600 duration-300 ">see more</i>
                ) : ""
            }
            <div className=" justify-center w-full flex">
                {heightMovies.height === "160" ? (
                    <Pagination
                        className="font-semibold"
                        simple
                        defaultCurrent={1}
                        total={50}
                        itemRender={customItemRender}
                    >

                    </Pagination>
                ) : ""}
            </div>
        </div>
    );
}

export default ListMovie;