import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }: { children: ReactNode }) {
    
    return (
        <div className='w-full flex flex-col items-center'>
            <Header/>
            <div style={{ width: "1240px" }} className='flex pt-4 mt-12'>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;