// import { MenuProps } from "antd";
// import { SmileOutlined } from '@ant-design/icons';
export interface TypeMenu {
    path: string;
    name: string;
    genres?: boolean;
    national?: boolean;
}
export interface ListGenres {
    id: string | number;
    name: string;
}
export interface ListNational {
    id: string | number;
    name: string
}
export const menuItems: TypeMenu[] = [
    {
        path: '/home',
        name: 'Home'
    },
    {
        path: '/new-releases',
        name: 'New Releases'
    },
    {
        path: '/coming-soon',
        name: 'Coming Soon ',

    },
    {
        path: '/genres',
        name: 'Genres',
        genres: true
    },
    {
        path: '/national',
        name: 'National',
        national: true
    }
]

// export const items: MenuProps['items'] = [
//     {
//         key: '1',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//                 1st menu item
//             </a>
//         ),
//         type:"national"
//     }
// ];
// Coming Soon 