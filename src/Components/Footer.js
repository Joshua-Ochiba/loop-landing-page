import React from 'react'
import logo from '../Images/logo.svg'
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='foot-1'>

                <div  className='logo'>
                    <img src={logo} alt='logo' />
                </div>

                <ul>
                    <li><button>About</button></li>
                    <li><button>Careers</button></li>
                    <li><button>Events</button></li>
                    <li><button>Products</button></li>
                    <li><button>Supports</button></li>
                </ul>

            </div>

            <div className='foot-2'>
                <ul className='social'>
                    <li><FaFacebookSquare/></li>
                    <li><FaTwitter/></li>
                    <li><FaPinterest/></li>
                    <li><FaInstagram/></li>
                </ul>

                <div className='copyright'>
                    &copy; 2021 LoopStudios. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer