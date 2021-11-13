import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from '../../../images/logo.png'
const TopNavigation = () => {
    const { user, logOut } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-indigo-400">
            <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='w-20 tracking-wide' src={logo} alt="" />
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/explore"
                                aria-label="explore"
                                title="explore"
                                className="font-medium tracking-wide text-white transition duration-500 hover:opacity-60"
                            >
                                Explore
                            </Link>
                        </li>
                        {
                            user.email ?
                                <>
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            aria-label="Our product"
                                            title="Our product"
                                            className="font-medium tracking-wide text-white transition duration-500 hover:opacity-60"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <span className='font-medium tracking-wide text-white transition duration-500 hover:opacity-60'>Welcome {user?.displayName?.split(' ')[1] ? user?.displayName?.split(' ')[1] : user?.displayName?.split(' ')[0]}</span>
                                    </li>

                                    <li>
                                        <button
                                            onClick={logOut}
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-500 rounded-full shadow-inner bg-indigo-500 hover:bg-indigo-700"
                                            aria-label="Log out"
                                            title="Logout"
                                        >
                                            Log out
                                        </button>
                                    </li>
                                </>
                                :

                                <li>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-500 rounded-full shadow-inner bg-indigo-500 hover:bg-indigo-700"
                                        aria-label="Log in"
                                        title="Login"
                                    >
                                        Login
                                    </Link>
                                </li>
                        }
                    </ul>
                    <div className="lg:hidden z-50">
                        <span
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-1 -mr-1 transition duration-5000 rounded "
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {!isMenuOpen ? <i className="fas fa-bars text-black px-2 text-3xl"></i> : <i className="fas fa-times text-black px-2 text-3xl"></i>}
                        </span>
                        {isMenuOpen && (
                            <div className="absolute top-12 left-0 w-full border-2 border-indigo-500">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img className='w-20 tracking-wide' src={logo} alt="" />

                                            </Link>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/explore"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-400"
                                                >
                                                    Explore
                                                </Link>
                                            </li>
                                            {!user.email ?
                                                <li>
                                                    <Link
                                                        to="/login"
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="log in"
                                                        title="Login"
                                                    >
                                                        Login
                                                    </Link>
                                                </li> :
                                                <>
                                                    <li>
                                                        <Link
                                                            to="/dashboard"
                                                            aria-label="dashboard"
                                                            title="user dashboard"
                                                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-400"
                                                        >
                                                            Dashboard
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/explore"
                                                            aria-label="explore"
                                                            title="explore product"
                                                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-400"
                                                        >
                                                            Welcome {user.displayName.split(' ')[1] ? user.displayName.split(' ')[1] : user.displayName.split(' ')[0]}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <p
                                                            to="/login"
                                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="log out"
                                                            onClick={logOut}
                                                            title="logout"
                                                        >
                                                            Logout
                                                        </p>
                                                    </li>
                                                </>

                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;