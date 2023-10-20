import images from "@/assets/images";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { MenuProps } from "antd";
// interface MenuActiveUser {
//     title: string;
//     path?: string;
//     onClick?: (event: MouseEvent) => void;
//     icon?: React.ReactNode;
// }
function Header() {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [bgHeader,setBgHeader] = useState("")
    const handleSearchClick = () => {
        setIsInputVisible(!isInputVisible);
    };


    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        scrollY > 100 ? setBgHeader("bg-gray-700/90") : setBgHeader("")
    });


    return (
        <header className={`w-full flex justify-center  fixed ${bgHeader} z-50  duration-500 `}>
            <div style={{ maxWidth: "1350px" }} className={`flex justify-between w-full h-20 items-center `}>
                {/* Logo */}
                <div className="">
                    <Link to="/">
                        <img style={{ height: "40px" }} className="cursor-pointer" src={images.logo} alt="Đợi  logo " />
                    </Link>
                </div>

                {/* Menu */}
                <nav className="">
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-300 hover:text-white duration-300 select-none font-medium "
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "white" } : {}
                        }
                        to={"/"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-300 hover:text-white duration-300 select-none"
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "white" } : {}
                        }
                        to={"/new-releases"}
                    >
                        New releases
                    </NavLink>
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-300 hover:text-white duration-300 select-none disabled"
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "white" } : {}
                        }
                        to={"/coming-soon"}
                    >
                        Coming soon
                    </NavLink>
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-300 hover:text-white duration-300 select-none"
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "white" } : {}
                        }
                        to={"/genres"}
                        onClick={(e) => { e.preventDefault(); }}
                    >
                        Genres
                    </NavLink>


                </nav>

                {/* Action */}
                <div className=" flex items-center justify-center text-xl">
                    {/* Search */}
                    <div className="flex relative max-w-xs items-center justify-center">
                        <FontAwesomeIcon onClick={handleSearchClick} className={` text-white absolute right-0 z-50  px-2 cursor-pointer text-sm  py-2 rounded-r-md focus:border-l focus:text-black duration-300  ${isInputVisible ? 'bg-gray-200' : ''}`} icon={faMagnifyingGlass} />
                        <Input type="search" className={`opacity-0 ${isInputVisible ? 'w-80 opacity-100' : 'w-0'} transition-width duration-300`}></Input>
                    </div>

                    <Link to={"/login"}><Button className="font-bold px-4 bg-green-500 text-white ml-2 border-none" >Login</Button></Link>
                    <Link to={"/signup"}><Button className="bg-transparent border-green-500 border-2 font-bold px-4 ml-2 text-white hover:bg-green-500 hover:border-none" >Sign up</Button></Link>
                </div>

            </div>

        </header>
    );
}

export default Header;