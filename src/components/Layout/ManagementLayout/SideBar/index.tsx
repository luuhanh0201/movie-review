import {  SlackOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFilm, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const items: MenuProps['items'] = [
    {
        label: (<Link to={"/admin"}>Dashboard</Link>),
        key: '',
        icon: <SlackOutlined />,
    },
    {
        label: 'Manage Film',
        key: 'menu',
        icon: <FontAwesomeIcon icon={faFilm} />,
        children: [
            {
                label: (
                    <Link to={"/admin/manage-film"}>
                        List Film</Link>
                ),
                key: 'manage-film',

            },
            {
                label: (
                    <Link to={"/admin/add-new-film"}>Add New Film</Link>
                ),
                key: 'add-new-film',
            }
        ]
    },
    {
        label:(<Link to={"/admin/manage-users"}>Manage User</Link>),
        key: 'user',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        label:(<Link to={"/admin/manage-comments"}>Manage Comments</Link>),
        key: 'comments',
        icon: <FontAwesomeIcon icon={faComment} />,
    }
];
function SideBar() {
    // const [current, setCurrent] = useState('mail');

    // const onClick: MenuProps['onClick'] = (e) => {
    //     console.log('click ', e);
    //     setCurrent(e.key);
    // };
    return (
        <div className="bg-slate-100 w-64 h-screen fixed shadow-md border-r border-slate-400/10 z-50">
            <div className="h-16 border-b z-50 shadow-sm select-none uppercase flex justify-center items-center text-lg">
                <FontAwesomeIcon className="pr-2 text-green-500 text-2xl" icon={faScrewdriverWrench} /><span>manage</span>
            </div>
            <ul>
                <Menu
                    // onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </ul>
        </div>
    );
}

export default SideBar;