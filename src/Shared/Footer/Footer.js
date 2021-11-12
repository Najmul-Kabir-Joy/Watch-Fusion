import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'

const Footer = () => {
    const { user, logOut } = useAuth();
    return (
        <footer className="text-black body-font bg-indigo-400 mt-0">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-white">
                        <img className='w-20 tracking-wide block mx-auto pb-2 lg:inline' src={logo} alt="" />
                        <address>
                            Road#40, HOUSE-551
                            <br />
                            South Goran
                            <br />
                            Dhaka, Bangladesh
                            <br />
                            Contact: 01611111110
                            <br />
                            Mail: watchfusion@mail.com
                            <br />
                            Visit: web.com

                        </address>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4 mt-10">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ">QUICK LINKS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to='/explore' className="text-white hover:text-gray-900">OUR PRODUCTS</Link>
                            </li>
                            <li>
                                <Link to='/myorders' className="text-white hover:text-gray-900">MY ORDERS</Link>
                            </li>
                            <li>
                                <Link to='/userfeedbackform' className="text-white hover:text-gray-900">GIVE REVIEW</Link>
                            </li>
                            {!user.email ?
                                <li>
                                    <Link to='/login' className="text-white hover:text-gray-900">LOGIN</Link>
                                </li>
                                :
                                <li>
                                    <span onClick={logOut} className="cursor-pointer text-white hover:text-gray-900">LOGOUT</span>
                                </li>

                            }
                        </nav>
                    </div>


                    <div className="lg:w-1/3 md:w-1/2 w-full px-4 mt-10">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label for="footer-field" className="leading-7 text-sm text-gray-600">EMAIL</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">SUBSCRIBE TO OUR NEWSLETTER
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-500">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="ml-3 text-xl">&copy; Md. Najmul Kabir</span>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-white hover:opacity-60 mr-5" href='https://www.facebook.com/najmulkabirjoy/'>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="ml-3 text-white hover:opacity-60 " href='https://t.me/Najmul_Kabir_Joy'>
                            <i className="fab fa-telegram-plane"></i>
                        </a>

                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;