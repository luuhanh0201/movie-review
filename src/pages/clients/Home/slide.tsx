import { Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { faBookmark, faCirclePlay, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SlideHome() {
    // const onChange = (currentSlide: number) => {
    //     // console.log(currentSlide);
    // };

    return (
        <div style={{
            height: "400px",
            width: "1250px",
           
        }} className='w-full mb-8' >
            <Carousel autoplay={true}    >
                <div style={{ height: "400px" }} className=' relative select-none' >
                    <img style={{ height: "400px" }} className='h-full w-full rounded-md' src={"https://giffiles.alphacoders.com/208/208650.gif"} alt="" />
                    {/* Info Movie */}
                    <div className='absolute bottom-10 left-10 text-white w-96'>
                        <Link to={"#"} className='font-bold text-xl overflow-hidden line-clamp-1 '>THOR</Link>
                        <p className='text-gray-100/80 my-1 text-xs'>2:23m<FontAwesomeIcon className='mx-2' icon={faMinus} />2022<FontAwesomeIcon className='mx-2' icon={faMinus} />Action</p>
                        <p className='text-justify overflow-hidden line-clamp-5 leading-5 select-text'>"Avengers" là một loạt phim siêu anh hùng của Marvel Studios, dựa trên các nhân vật từ truyện tranh Marvel Comics. Loạt phim này kể về nhóm siêu anh hùng gồm các nhân vật nổi tiếng như Iron Man (Tony Stark), Captain America (Steve Rogers), Thor, Hulk (Bruce Banner), Black Widow (Natasha Romanoff), và nhiều nhân vật khác, họ hợp tác để bảo vệ thế giới khỏi các mối đe dọa siêu nhiên và siêu việt.</p>
                        <div className='mt-4'>
                            <Button className='bg-green-500 border-none text-white font-semibold mr-2'><FontAwesomeIcon className='mr-1' icon={faCirclePlay} />Watch Trailer</Button>
                            <Button className='text-white font-semibold'><FontAwesomeIcon className='mr-1' icon={faBookmark} />Add Watchlist</Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: "400px" }} className=' relative select-none' >
                    <img style={{ height: "400px" }} className='h-full w-full rounded-md' src={"https://giffiles.alphacoders.com/207/207375.gif"} alt="" />
                    {/* Info Movie */}
                    <div className='absolute bottom-10 left-10 text-white w-96'>
                        <Link to={"#"} className='font-bold text-xl overflow-hidden line-clamp-1 '>Avengers</Link>
                        <p className='text-gray-100/80 my-1 text-xs'>2:23m<FontAwesomeIcon className='mx-2' icon={faMinus} />2022<FontAwesomeIcon className='mx-2' icon={faMinus} />Action</p>
                        <p className='text-justify overflow-hidden line-clamp-5 leading-5 select-text'>"Avengers" là một loạt phim siêu anh hùng của Marvel Studios, dựa trên các nhân vật từ truyện tranh Marvel Comics. Loạt phim này kể về nhóm siêu anh hùng gồm các nhân vật nổi tiếng như Iron Man (Tony Stark), Captain America (Steve Rogers), Thor, Hulk (Bruce Banner), Black Widow (Natasha Romanoff), và nhiều nhân vật khác, họ hợp tác để bảo vệ thế giới khỏi các mối đe dọa siêu nhiên và siêu việt.</p>
                        <div className='mt-4'>
                            <Button className='bg-green-500 border-none text-white font-semibold mr-2'><FontAwesomeIcon className='mr-1' icon={faCirclePlay} />Watch Trailer</Button>
                            <Button className='text-white font-semibold'><FontAwesomeIcon className='mr-1' icon={faBookmark} />Add Watchlist</Button>
                        </div>
                    </div>
                    {/* <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div> */}
                    {/* <div className="absolute top-0 right-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div> */}
                </div>
            </Carousel>

        </div>
    );
}

export default SlideHome;