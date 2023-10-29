import images from "@/assets/images";
import { faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer className=" text-white w-full flex  justify-center border-t mt-12 py-8">
            <div style={{ maxWidth: "1350px" }} className="w-full flex justify-between">
                <img width={100} src={images.logo} alt="" />
                <div>
                    <FontAwesomeIcon className="ml-6 text-xl cursor-pointer hover:text-green-500 p-2 duration-300" icon={faFacebook} />
                    <FontAwesomeIcon className="ml-6 text-xl cursor-pointer hover:text-green-500 p-2 duration-300" icon={faInstagram} />
                    <FontAwesomeIcon className="ml-6 text-xl cursor-pointer hover:text-green-500 p-2 duration-300" icon={faTwitter} />
                    <FontAwesomeIcon className="ml-6 text-xl cursor-pointer hover:text-green-500 p-2 duration-300" icon={faGoogle} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;