import { useMemo } from 'react';
import FeaturedMovie from './FeaturedMovie';
import SlideHome from './slide';
import ListMovie from './ListMovie';
import PopularOfTheWeek from './PopularOfTheWeek';
import JustRelease from './JustRelease';
// import images from '@/assets/images';
// import { faBookmark, faCirclePlay, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from 'antd';
// import { Link } from 'react-router-dom';

// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     color: '#fff',
//     textAlign: 'center',
//     background: '#364d79',
// };
console.log("Log file: index");

function HomePage() {
    const slideComponent = useMemo(() => <SlideHome />, [])
    
    return (
        <>
            {slideComponent}
            <JustRelease />
            <PopularOfTheWeek />
            <ListMovie />

            {/* featured movie */}

            <FeaturedMovie />
        </>

    );
}

export default HomePage;