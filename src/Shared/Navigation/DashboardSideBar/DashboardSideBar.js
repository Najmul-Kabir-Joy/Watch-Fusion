import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AddNewProduct from '../../../Pages/AddNewProduct/AddNewProduct';
import AllOrders from '../../../Pages/AllOrders/AllOrders';
import BecomeMerchant from '../../../Pages/BecomeMerchant/BecomeMerchant';
import Dashboard from '../../../Pages/Dashboard/Dashboard/Dashboard';
import GiveReview from '../../../Pages/GiveReview/GiveReview';
import ManageProducts from '../../../Pages/ManageProducts/ManageProducts';
import MyOrders from '../../../Pages/MyOrders/MyOrders';
import Pay from '../../../Pages/Pay/Pay';
import UpdateProduct from '../../../Pages/UpdateProduct/UpdateProduct';

const DashboardSideBar = () => {
    const { logOut } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let { path, url } = useRouteMatch();


    return (
        <div className='flex'>
            {/* <div class="lg:hidden z-10">
                <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <i class="fas fa-times text-indigo-400 px-2 text-3xl"></i> : <i class="fas fa-bars text-red-500 text-2xl"></i>}
                </button>
                {isMenuOpen && (

                    <div class="flex flex-col w-64 h-screen py-8 bg-indigo-400 border-r dark:bg-gray-800 dark:border-gray-600">
                        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Brand</h2>

                        <div class="flex flex-col items-center mt-6 -mx-2">
                            <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
                            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">john @example.com</p>
                        </div>

                        <div class="flex flex-col justify-between flex-1 mt-6">
                            <nav>
                                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span class="mx-4 font-medium">DASHBOARD</span>
                                </a>
                                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span class="mx-4 font-medium">Accounts</span>
                                </a>

                                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span class="mx-4 font-medium">Tickets</span>
                                </a>

                                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span class="mx-4 font-medium">Settings</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                )}
            </div> */}

            <div class="flex flex-col w-1/6 h-screen py-8 bg-indigo-400 border-r lg:block hidden">
                <Link to='/' class="text-3xl block font-semibold text-center text-white dark:text-white">WATCH FUSION</Link>

                <div class="flex flex-col items-center mt-6 -mx-2">
                    <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 class="mx-2 mt-2 font-medium text-white dark:text-gray-200 hover:underline">NAME</h4>
                    <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">ROLE: USER</p>
                </div>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to={`${url}/pay`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-funnel-dollar text-lg"></i>

                            <span class="mx-4 font-medium">PAY</span>
                        </Link>
                        <Link to={`${url}/myorders`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-file text-lg"></i>

                            <span class="mx-4 font-medium">MY ORDERS</span>
                        </Link>
                        <Link to={`${url}/allorders`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-file text-lg"></i>
                            <span class="mx-4 font-medium">ALL ORDERS</span>
                        </Link>
                        <Link to={`${url}/userfeedbackform`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-signature text-lg"></i>

                            <span class="mx-4 font-medium">GIVE REVIEW</span>
                        </Link>
                        <Link to={`${url}/becomeshopowner`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-signature text-lg"></i>

                            <span class="mx-4 font-medium">Become Merchant</span>
                        </Link>
                        <Link to={`${url}/addproducts`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-signature text-lg"></i>

                            <span class="mx-4 font-medium">Add Products</span>
                        </Link>
                        <Link to={`${url}/manageproducts`} class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-signature text-lg"></i>

                            <span class="mx-4 font-medium">Manage Products</span>
                        </Link>
                        <p onClick={logOut} class="flex items-center px-4 py-2 mt-5 text-white cursor-pointer transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <i class="fas fa-sign-out-alt text-lg"></i>

                            <span class="mx-4 font-medium">LOGOUT</span>
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
                    <Route path={`${path}/allorders`}>
                        <AllOrders />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/userfeedbackform`}>
                        <GiveReview />
                    </Route>
                    <Route path={`${path}/becomeshopowner`}>
                        <BecomeMerchant />
                    </Route>
                    <Route path={`${path}/addproducts`}>
                        <AddNewProduct />
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts />
                    </Route>

                </Switch>
            </div>

        </div >


    );
};

export default DashboardSideBar;