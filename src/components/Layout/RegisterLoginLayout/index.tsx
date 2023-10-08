import { ReactNode } from "react";
import Header from "./Header";

function LayoutRegisterLayout({children}:{children:ReactNode}) {
    return (

        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>

    );
}

export default LayoutRegisterLayout;