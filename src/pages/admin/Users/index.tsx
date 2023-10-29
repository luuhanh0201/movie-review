/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { customTheme } from "@/customAntd";
import { faSearch, faUser, faUserShield, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider, Dropdown, Input, MenuProps, Space, Table, message } from "antd";
import { DownOutlined, UserOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { URL_DB_ACCOUNT } from "@/assets/images/api";
import axios from "axios";
import { Link } from "react-router-dom";
function ManageUsers() {

    const [listUsers, setListUsers] = useState([]);
    // Dashboard
    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        }
    ];
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };




    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",

        },
        {
            title: "Name",
            dataIndex: "username",
            key: "username",
            render: (text: string, record: { _id: any; }) => {
                console.log(text);

                return (
                    <Link to={`/admin/manage-user/${record._id}`}>
                        <p>{text}</p>
                    </Link>
                )
            },
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            render: (_text: any, record: { _id: any; }) => (
                <Space size="middle">
                    <Button
                        icon={<UserDeleteOutlined />}
                        onClick={() => handleDeleteUser(record._id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];


    useEffect(() => {
        // Gọi API để tải danh sách người dùng ban đầu
        axios.get(`${URL_DB_ACCOUNT}`)
            .then((response) => {
                const users = response.data.showUser;
                const usersWithIndex = users.map((user: any, index: number) => ({ ...user, id: index + 1 }));
                setListUsers(usersWithIndex);
            })
            .catch((error) => {
                console.error("Lỗi khi tải danh sách người dùng", error);
            });
    }, []);

    const handleDeleteUser = (id: string) => {
        // Kiểm tra quyền
        const storedData = sessionStorage.getItem("user") as string;
        const userData = JSON.parse(storedData);
        
        if(userData.role !== "admin"){
            message.error("Bạn không có quyền xoá!!!")
            return false
            
        }

        // Gọi API để xóa người dùng
        
        axios
            .delete(`${URL_DB_ACCOUNT}/${id}`)
            .then(() => {
                // Xóa thành công, cập nhật danh sách người dùng
                const updatedUsers = listUsers.filter(({ _id }: { _id: string }) => _id !== id);
                setListUsers(updatedUsers);
                message.success("Người dùng đã được xóa thành công.");
            })
            .catch((error) => {
                console.error("Lỗi khi xóa người dùng", error);
                message.error("Có lỗi xảy ra khi xóa người dùng.");
            });
    };



    return (
        <div>
            {/* Overview */}
            <div className="mb-8 w-full h-32  grid grid-cols-3 gap-8 justify-center items-center ">
                {/* All  */}
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md h-32">
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                        <FontAwesomeIcon className="text-gray-500 text-3xl" icon={faUsers} />
                    </div>
                    <div>
                        <p className="text-xs mb-4">Total customer</p>
                        <p>12312</p>
                    </div>
                </div>
                {/* Admin */}
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md h-32">
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                        <FontAwesomeIcon className="text-red-500 text-3xl" icon={faUserShield} />
                    </div>
                    <div>
                        <p className="text-xs mb-4">Admin</p>
                        <p>2</p>
                    </div>
                </div>

                {/* Member */}
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md h-32">
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                        <FontAwesomeIcon className="text-green-500 text-3xl" icon={faUser} />
                    </div>
                    <div>
                        <p className="text-xs mb-4">Member</p>
                        <p>12312r</p>
                    </div>
                </div>
            </div>

            <div className="bg-white px-4 pt-6 rounded-lg shadow-md">
                {/* Dashboard */}
                <div className="flex justify-between">
                    <h1>All Customers</h1>
                    <div className="flex">
                        <ConfigProvider theme={customTheme}>
                            <Input className="" addonBefore={<FontAwesomeIcon icon={faSearch} className="py-2 " />} placeholder="search for something..." />
                        </ConfigProvider>

                        <Space className="ml-2" wrap>

                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        Button
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>

                        </Space>
                    </div>
                </div>
                <div className="mt-4">

                    <Table dataSource={listUsers} columns={columns} rowKey={"_id"} />
                </div>
            </div>
        </div>
    );
}

export default ManageUsers;