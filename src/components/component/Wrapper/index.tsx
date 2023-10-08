import { ReactNode } from "react";

function Wrapper({ className, children }: { className: string; children?: ReactNode }) {
    return (
        <div className={`${className} rounded-md shadow-md p-2 bg-white`}>
            {children}
        </div>
    );
}

export default Wrapper;