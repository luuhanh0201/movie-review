/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/assets/images";
import { deleteDataSessionStorage, getToSessionStorage } from "@/models/sessionStorage";
import { faBell, faLanguage, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Input, Popover, Space } from "antd";
import { useMemo, useState } from "react";
// import * as Cookies from 'js-cookie';

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
    const [bgHeader, setBgHeader] = useState("")
    let user;
    let content: any;
    let textAvatar: any;
    let avatar: any;
    const sessionData = getToSessionStorage;

    if (sessionData !== null) {
        user = sessionData.user;
        const username = user.username;
        avatar = user.avatar[0];

        const arrayText = username.split(" ");
        textAvatar = arrayText[length]
        textAvatar = textAvatar[0].toUpperCase()

        content = (
            <div className="w-52 select-none ">
                <div className="flex items-center mx-2 cursor-pointer hover:text-green-500/90 duration-300">
                    <Avatar className=" text-white" src={avatar} alt="H">{textAvatar}</Avatar>
                    <h4 className="font-medium ml-4 line-clamp-1">{user.username}</h4>
                </div>
                <ul className=" mt-4 border-t-2 w-full">
                    <li className="cursor-pointer py-1 px-2 rounded-md duration-300 hover:bg-green-100"><FontAwesomeIcon icon={faLanguage} className="cursor-pointer mt-2" /> Language</li>
                    <li className="cursor-pointer py-1 px-2 rounded-md duration-300 hover:bg-green-100" onClick={() => {
                        deleteDataSessionStorage()
                        window.location.reload();
                    }
                    }><FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />Đăng xuất </li>
                </ul>
            </div>
        );
    }

    const actionComponent = useMemo(() => (

        sessionData !== null ? (
            <Space  size={16} wrap>
                {/* <Popover content={content} title="Title" placement="bottomLeft" trigger="click" > */}
                <FontAwesomeIcon icon={faBell} className="text-white px-2 focus:text-green-500 cursor-pointer" />
                {/* </Popover> */}
                <Popover content={content} title=""  placement="bottomLeft" className="bg-black" trigger="click">
                    <Avatar className="cursor-pointer text-white bg-slate-600" src={avatar} alt="">{textAvatar}</Avatar>
                </Popover>

            </Space>
        ) : (
            <div>
                <Link to={"/login"}><Button className="font-bold px-4 bg-green-500 text-white ml-2 border-none" >Login</Button></Link>
                <Link to={"/signup"}><Button className="bg-transparent border-green-500 border-2 font-bold px-4 ml-2 text-white hover:bg-green-500 hover:border-none" >Sign up</Button></Link>
            </div>
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [sessionData])

    // Kiểm tra nếu có dữ liệu từ session storage thì cập nhật mảng account

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
                        to={""}
                        onClick={(e) => { e.preventDefault(); }}
                    >
                        Genres
                    </NavLink>


                </nav>

                {/* Action */}
                <div className=" flex items-center justify-center text-xl">
                    {/* Search */}
                    <div className="flex relative max-w-xs items-center justify-center mr-2">
                        <FontAwesomeIcon onClick={handleSearchClick} className={` text-white absolute right-0 z-50  px-2 cursor-pointer text-sm  py-2 rounded-r-md focus:border-l focus:text-black duration-300  ${isInputVisible ? 'bg-gray-200' : ''}`} icon={faMagnifyingGlass} />
                        <Input type="search" className={`opacity-0 ${isInputVisible ? 'w-80 opacity-100' : 'w-0'} transition-width duration-300`}></Input>
                    </div>
                    {actionComponent}


                </div>

            </div>

        </header>
    );
}

export default Header;