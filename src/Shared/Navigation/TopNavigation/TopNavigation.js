import { useState } from "react";

const TopNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div class="bg-indigo-400 sticky">
            <div class="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <svg
                            class="w-8 text-green-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            WATCH FUSION
                        </span>
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-white transition duration-500 hover:opacity-60"
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-500 rounded-full shadow-inner bg-indigo-500 hover:bg-indigo-700"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                Sign up
                            </a>
                        </li>
                    </ul>
                    <div class="lg:hidden z-10">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <i class="fas fa-bars text-white text-2xl"></i>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full border-2 border-indigo-500">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <svg
                                                    class="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    WATCH FUSION
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 border-1 border-black rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <i class="fas fa-times text-black px-2 text-3xl"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-400"
                                                >
                                                    Product
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Sign up
                                                </a>
                                            </li>
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