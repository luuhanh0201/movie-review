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
function Header({ className }: { className?: string }) {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const handleSearchClick = () => {
        setIsInputVisible(!isInputVisible);
    };

    return (
        <header className={`w-full flex justify-center bg-gradient-to-b from-gray-300 to-white ${className}`}>
            <div style={{ maxWidth: "1350px" }} className={`flex justify-between w-full h-20 items-center z-50  fixed `}>
                {/* Logo */}
                <div className="">
                    <Link to="/">
                        <img style={{height:"40px"}} className="cursor-pointer" src={images.logo} alt="Đợi  logo " />
                    </Link>
                </div>

                {/* Menu */}
                <nav className="">
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-500 hover:text-black select-none font-medium "
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "blue" } : {}
                        }
                        to={"/"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-500 hover:text-black select-none"
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "blue" } : {}
                        }
                        to={"/new-releases"}
                    >
                        New releases
                    </NavLink>
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-500 hover:text-black select-none disabled"
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "blue" } : {}
                        }
                        to={"/coming-soon"}
                    >
                        Coming soon
                    </NavLink>
                    <NavLink
                        className="mx-3 px-2 text-sm text-gray-500 hover:text-black select-none"
                        style={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            isPending ? { color: "red" } : isActive ? { color: "blue" } : {}
                        }
                        to={"/genres"}
                    >
                        Genres
                    </NavLink>


                </nav>

                {/* Action */}
                <div className=" flex items-center justify-center text-xl">
                    {/* Search */}
                    <div className="flex relative max-w-xs items-center justify-center">
                        <FontAwesomeIcon onClick={handleSearchClick} className={`absolute right-0 z-50  px-2 cursor-pointer text-sm  py-2 rounded-r-md border-l duration-300 ${isInputVisible ? 'bg-gray-200' : ''}`} icon={faMagnifyingGlass} />
                        <Input type="search" className={`opacity-0 ${isInputVisible ? 'w-80 opacity-100' : 'w-0'} transition-width duration-300`}></Input>

                    </div>

                    <Link to={"/login"}><Button className="font-bold px-4 bg-green-500 text-white ml-2" >Login</Button></Link>
                    <Link to={"/signup"}><Button className="bg-transparent border-green-500 border-2 font-bold px-4 ml-2" >Sign up</Button></Link>
                </div>

            </div>
            <div className="h-20 w-full">

            </div>
        </header>
    );
}

export default Header;