import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }: { children: ReactNode }) {
    
    return (
        <div className='w-full flex flex-col items-center bg-black/90'>
            <Header/>
            <div style={{ width: "1240px" }} className='flex pt-4 mt-24'>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;