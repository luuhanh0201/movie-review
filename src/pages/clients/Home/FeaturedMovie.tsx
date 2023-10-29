/* eslint-disable @typescript-eslint/no-explicit-any */
import { faBookmark, faCirclePlay, faMinus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper styles



// import required modules

function FeaturedMovie() {
    // API Fake;
    const listMovie = [
        {
            id: 1,
            name: "Avenger 1",
            bg: "https://wallpapers-hub.art/wallpaper-images/645141.jpg",

        },
        {
            id: 2,
            name: "Avenger 2",
            bg: "https://cdn.oneesports.vn/cdn-data/sites/4/2023/01/OnePiece-Netflix.jpg",

        },
        {
            id: 3,
            name: "Avenger 3",
            bg: "https://wallpapers-hub.art/wallpaper-images/645141.jpg",

        }
    ]
    const [infoFeaturedMovie, setInfoFeaturedMovie] = useState(listMovie[0])
    const handleGetInfoMovie = (id: number) => {
        const movie: any = listMovie.find(movie => movie.id === id)
        setInfoFeaturedMovie(movie)

    }
    // console.log("Log file: FeaturedMovie");


    return (


        < div className='h-96 mt-4  rounded-md flex bg-no-repeat w-full bg-cover bg-center relative items-center pl-8 ' style={{
            backgroundImage: `url('${infoFeaturedMovie.bg}')`,

        }
        }>
            {/* <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-transparent to-transparent pointer-events-none"></div> */}
            {/* <div className="absolute top-0 right-0 w-full h-8 bg-gradient-to-b from-transparent to-transparent pointer-events-none"></div> */}
            {/* Info movie */}
            <div className='w-2/5 text-white mr-4'>
                <p className='font-black text-2xl'>Featured Movie</p>
                <p className='text-base text-white my-4'>{infoFeaturedMovie.name}</p>
                <p className='my-1 text-xs py-2'>
                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className='text-gray-500'>
                        2:23m<FontAwesomeIcon className='mx-2' icon={faMinus} />2022<FontAwesomeIcon className='mx-2' icon={faMinus} />Action
                    </span>
                </p>
                <p className='text-justify overflow-hidden line-clamp-5 leading-5 select-text text-sm m-2'>"Avengers" là một loạt phim siêu anh hùng của Marvel Studios, dựa trên các nhân vật từ truyện tranh Marvel Comics. Loạt phim này kể về nhóm siêu anh hùng gồm các nhân vật nổi tiếng như Iron Man (Tony Stark), Captain America (Steve Rogers), Thor, Hulk (Bruce Banner), Black Widow (Natasha Romanoff), và nhiều nhân vật khác, họ hợp tác để bảo vệ thế giới khỏi các mối đe dọa siêu nhiên và siêu việt.</p>
                <div className='mt-6'>
                    <Button className='bg-green-500 border-none text-white font-semibold mr-2'><FontAwesomeIcon className='mr-1' icon={faCirclePlay} />Watch Trailer</Button>
                    <Button className='text-white font-semibold'><FontAwesomeIcon className='mr-1' icon={faBookmark} />Add Watchlist</Button>
                </div>
            </div>
            {/* List movie */}
            <div className='flex-1 overflow-hidden flex '>
                {/* items */}

                {
                    listMovie.map(({ id, name, bg }) => {
                        return (
                            <div onClick={() => handleGetInfoMovie(id)} key={id} className={`mx-2 w-2/5 ${id === infoFeaturedMovie.id ? "border-green-500" : ""} duration-300 bg-white h-72 relative overflow-hidden rounded-lg border-2  border-gray-500`}>
                                <img className='w-full h-full  duration-300' src={bg} alt="" />
                                {/* Info */}
                                <div className='absolute text-white bottom-4 left-2 text-sm'>
                                    <Link to={""} className='line-clamp-1 leading-1 mb-2 hover:text-green-500 duration-300'>{name}</Link>
                                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />4,5 | <span className=' ml-1 text-gray-500'>
                                        Action
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
            {/* <img width={"1350px"} className='w-full' src="https://wallpapers-hub.art/wallpaper-images/645141.jpg" alt="" /> */}
        </div >
    );
}

export default FeaturedMovie;