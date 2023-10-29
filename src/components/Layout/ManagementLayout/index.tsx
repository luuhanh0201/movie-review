import { ReactNode } from 'react';
import Header from './Header';
import SideBar from './SideBar';


function ManagementLayout({ children }: { children: ReactNode }) {

    return (
        <div className='w-full flex bg-slate-400/20'>
            <div className='max-w-xs w-64'>
                <SideBar />
                <div className='w-64 opacity-0'></div>
            </div>
            <div className='flex-1'>
                <Header />
                <div className=' pt-8 pl-4 min-h-screen mr-4'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ManagementLayout;

{/* <div className='flex-1'>
    {children}
</div> */}