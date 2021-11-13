import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AddNewProduct from '../../../Pages/AddNewProduct/AddNewProduct';
import AllOrders from '../../../Pages/AllOrders/AllOrders';
import AdminRoute from '../../../Pages/Dashboard/AdminRoute/AdminRoute';
import Dashboard from '../../../Pages/Dashboard/Dashboard/Dashboard';
import GiveReview from '../../../Pages/GiveReview/GiveReview';
import MakeAdmin from '../../../Pages/MakeAdmin/MakeAdmin';
import ManageProducts from '../../../Pages/ManageProducts/ManageProducts';
import ManageReviews from '../../../Pages/ManageReviews/ManageReviews';
import MyOrders from '../../../Pages/MyOrders/MyOrders';
import Pay from '../../../Pages/Pay/Pay';

const DashboardSideBar = () => {
    const { logOut, admin, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let { path, url } = useRouteMatch();
    return (
        <div className='flex relative'>
            {/*------------------------------------------------------------------------
                                        FOR MOBILE
            ----------------------------------------------------------------------------*/}
            <span
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 m-2 lg:hidden absolute top-0 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i className="fas fa-bars text-black text-4xl"></i>
            </span>
            <div className="lg:hidden z-10 absolute min-h-screen bg-indigo-400">
                {isMenuOpen && (
                    <div className="flex flex-col w-full min-h-screen py-0 ">
                        <span
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="fas fa-times text-black text-4xl pl-5 pt-4"></i>
                        </span>
                        <Link to='/' className="text-2xl block font-semibold text-center text-white dark:text-white">WATCH FUSION</Link>

                        <div className="flex flex-col items-center mt-6">
                            <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user.photoURL ? user.photoURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt="avatar" />
                            <h4 className="mx-2 mt-2 font-medium text-white dark:text-gray-200 hover:underline uppercase">{user.displayName}</h4>
                            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">ROLE: {admin ? 'admin' : 'user'}</p>
                        </div>
                        <div className="flex  flex-col min-h-screen justify-between flex-1 mt-6">
                            <nav onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Link to={`${url}/pay`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-funnel-dollar text-lg"></i>

                                    <span className="mx-4 font-medium">PAY</span>
                                </Link>
                                <Link to={`${url}/myorders`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-truck-loading text-lg"></i>

                                    <span className="mx-4 font-medium">TRACK ORDERS</span>
                                </Link>
                                <Link to={`${url}/userfeedbackform`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-signature text-lg"></i>

                                    <span className="mx-4 font-medium">GIVE REVIEW</span>
                                </Link>
                                {
                                    admin &&
                                    <>
                                        <Link to={`${url}/allorders`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <i className="fas fa-clipboard-list text-lg"></i>
                                            <span className="mx-4 font-medium">ALL ORDERS</span>
                                        </Link>

                                        <Link to={`${url}/addproducts`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <i className="fas fa-box-open text-lg"></i>

                                            <span className="mx-4 font-medium">Add Products</span>
                                        </Link>
                                        <Link to={`${url}/manageproducts`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <i className="fas fa-warehouse text-lg"></i>

                                            <span className="mx-4 font-medium">Manage Products</span>
                                        </Link>
                                        <Link to={`${url}/managereviews`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <i className="fas fa-hand-holding-heart text-lg"></i>
                                            <span className="mx-4 font-medium">Reviews</span>
                                        </Link>
                                        <Link to={`${url}/makeadmin`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                            <i className="fas fa-user-shield text-lg"></i>

                                            <span className="mx-4 font-medium">Make Admin</span>
                                        </Link>
                                    </>
                                }
                                <p onClick={logOut} className="flex items-center px-4 py-2 mt-5 text-white cursor-pointer transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-sign-out-alt text-lg"></i>

                                    <span className="mx-4 font-medium">LOGOUT</span>
                                </p>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
            {/*------------------------------------------------------------------------
                                        FOR DESKTOP
            ----------------------------------------------------------------------------*/}
            <div className="flex flex-col w-1/6 min-h-screen py-8 bg-indigo-400 border-r lg:block hidden">
                <Link to='/' className="text-3xl block font-semibold text-center text-white dark:text-white">WATCH FUSION</Link>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user.photoURL ? user.photoURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-white dark:text-gray-200 hover:underline uppercase">{user.displayName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">ROLE: {admin ? 'admin' : 'user'}</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to={`${url}/pay`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i className="fas fa-funnel-dollar text-lg"></i>

                            <span className="mx-4 font-medium">PAY</span>
                        </Link>
                        <Link to={`${url}/myorders`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i className="fas fa-truck-loading text-lg"></i>

                            <span className="mx-4 font-medium">TRACK ORDERS</span>
                        </Link>
                        <Link to={`${url}/userfeedbackform`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i className="fas fa-signature text-lg"></i>

                            <span className="mx-4 font-medium">GIVE REVIEW</span>
                        </Link>

                        {
                            admin &&
                            <>
                                <Link to={`${url}/allorders`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-clipboard-list text-lg"></i>
                                    <span className="mx-4 font-medium">ALL ORDERS</span>
                                </Link>

                                <Link to={`${url}/addproducts`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-box-open text-lg"></i>

                                    <span className="mx-4 font-medium">Add Products</span>
                                </Link>
                                <Link to={`${url}/manageproducts`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-warehouse text-lg"></i>

                                    <span className="mx-4 font-medium">Manage Products</span>
                                </Link>
                                <Link to={`${url}/managereviews`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-hand-holding-heart text-lg"></i>

                                    <span className="mx-4 font-medium">Reviews</span>
                                </Link>
                                <Link to={`${url}/makeadmin`} className="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <i className="fas fa-user-shield text-lg"></i>

                                    <span className="mx-4 font-medium">Make Admin</span>
                                </Link>

                            </>
                        }
                        <p onClick={logOut} className="flex items-center px-4 py-2 mt-5 text-white cursor-pointer transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i className="fas fa-sign-out-alt text-lg"></i>

                            <span className="mx-4 font-medium">LOGOUT</span>
                        </p>
                    </nav>
                </div>
            </div>
            <div className='w-full'>
                <Switch>
                    <Route exact path='/'>
                        <Dashboard />
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders />
                    </Route>
                    <AdminRoute path={`${path}/allorders`}>
                        <AllOrders />
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/userfeedbackform`}>
                        <GiveReview />
                    </Route>

                    <AdminRoute path={`${path}/addproducts`}>
                        <AddNewProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/managereviews`}>
                        <ManageReviews />
                    </AdminRoute>

                </Switch>
            </div>

        </div >


    );
};

export default DashboardSideBar;