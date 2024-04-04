import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            <div className="shadow-md p-3 text-center items-center rounded-md mb-5">
                <h1 className="text-2xl font-semibold mb-3">Login With</h1>
                <button className="btn btn-outline mb-4 w-full">
                    <FaGoogle className="text-2xl" />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-2xl" />
                    Login With Github
                </button>
            </div>
            <div className="shadow-md  p-3 text-center items-center rounded-md mb-5">
                <h1 className="text-2xl font-semibold mb-3 ">Find Us With</h1>
                <a href="" className="flex p-4 items-center border rounded-t-lg">
                    <FaFacebook className="mr-3 text-2xl"></FaFacebook>
                    Facebook
                </a>
                <a href="" className="flex p-4 items-center border-x">
                    <FaTwitter className="mr-3 text-2xl"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="flex p-4 items-center border rounded-b-lg">
                    <FaInstagram className="mr-3 text-2xl"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q zone */}
            <div className="shadow-md p-3 text-center items-center rounded-md mb-5">
                <h1 className="text-2xl font-semibold mb-3">Q-Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;