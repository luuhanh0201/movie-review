import { customTheme } from "@/customAntd";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigProvider, Dropdown, Input, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons"
// import Search from "antd/es/input/Search";

function Header() {
    const dropdownMenu = (
        <Menu className="w-72" >
            <Menu.Item key="1">Item 1</Menu.Item>
            <Menu.Item key="2">Item 2</Menu.Item>
            <Menu.Item key="3">Item 3</Menu.Item>
        </Menu>
    );

    return (
        <div className="bg-slate-100 h-16 shadow-md flex  sticky top-0 z-50 justify-center items-center">

            <ConfigProvider theme={customTheme}>
                <Input className="" addonBefore={<FontAwesomeIcon icon={faSearch} className="py-2 " />} placeholder="search for something..." />
            </ConfigProvider>
            <Dropdown overlay={dropdownMenu} placement="topRight" arrow={{ pointAtCenter: true }} trigger={["click"]} className="">
                <p className=" h-16 w-16 flex items-center  justify-center "><FontAwesomeIcon icon={faBell} className="p-2 text-xl text-gray-600 cursor-pointer hover:text-green-500 duration-300" /></p>
            </Dropdown>
            <Dropdown className="sticky top-2" arrow={true} overlay={(
                <Menu className="w-44 " >
                    <Menu.Item key="1">Profile</Menu.Item>
                    <Menu.Item key="2">Logout</Menu.Item>
                    <Menu.Item key="3">Item 3</Menu.Item>
                </Menu>
            )} placement="bottom" trigger={["click"]} >
                <div className="flex w-56 items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                        <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/hinh-nen-luffy.jpg" alt="" className="w-9 h-9 rounded-full shadow-sm" />
                        <span className="px-2 text-xs text-gray-500 font-light line-clamp-1 w-24">Luu Dinh Hanh</span>
                    </div>
                    <DownOutlined className="text-xs  text-gray-400 pr-4" />
                </div>
            </Dropdown>
        </div>
    );
}

export default Header;