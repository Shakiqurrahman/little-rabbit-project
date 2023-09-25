import { FaMedium, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import logo from '../assets/logo.png';
import shape_1 from "../assets/header-left-shape-1.png";
import shape_2 from "../assets/header-left-shape-4.png";
import shape_3 from "../assets/circle-01.png";
import shape_4 from "../assets/header-left-shape-2.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container-fluid">
                <div className="container position-relative">
                    <div className="shape-wrapper">
                        <img src={shape_1} width={32} className='position-absolute shape1' style={{top: '42%', left: '16%'}} alt="shape 1" />
                        <img src={shape_2} width={16} className='position-absolute' style={{top: '8%', right: '16%'}}  alt="shape 2" />
                        <img src={shape_3} width={16} className='position-absolute' style={{bottom: '24%', right: '40%'}}  alt="shape 3" />
                        <img src={shape_4} width={24} className='position-absolute' style={{bottom: '-8%', left: '30%'}}  alt="shape 4" />
                    </div>
                    <div className="footer-top d-flex flex-column align-items-center">
                    <img src={logo} alt="logo" width={250}/>
                    <p>We make it easy to Discover, Invest and manage all your NFTs at one place.</p>
                    <div className="icons">
                        <a target='blank' href="https://twitter.com/LTRBTtwt"><FaTwitter/></a>
                        <a target='blank' href="https://t.me/littlerabbitchat"><FaTelegramPlane /></a>
                        <a target='blank' href="https://littlerabbitofficial.medium.com/"><FaMedium /></a>
                        <a target='blank' href=" https://t.me/littlerabbitann"><FaTelegramPlane /></a>
                    </div>
                    </div>
                    <div className="copyright-wrapper">
                        <div className="left-side">
                        <p>© 2023 Little Rabbit. All rights reserved.</p>
                        </div>
                        <div className="right-side d-flex align-items-center">
                            <p>Privacy Policy</p>
                            <p>Terms of use</p>
                            <a href="#"><IoIosArrowUp size={22}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;