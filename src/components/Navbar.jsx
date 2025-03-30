import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
// import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img width={100} height={100} src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/yashj13/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-600 transition duration-300" />
    </a>
    <a href="https://github.com/yash2118" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-600 transition duration-300" />
    </a>
    <a href="https://www.instagram.com/yjain.18/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition duration-300" />
    </a>
    </div>
  </nav>
}

export default Navbar