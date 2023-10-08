import images from "@/assets/images";
import { Link } from "react-router-dom";

function Header() {

    return (<div className="pt-5 pl-10">
        <Link to={"/"} className="text-5xl z-50 w-full ">
            <img className="fixed z-50 h-14" src={images.logo} alt="23qw   qw" />
        </Link>
    </div>);
}

export default Header;