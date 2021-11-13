import React from 'react';

const SecondBanner = () => {
    return (
        <section className='pb-12' data-aos="flip-down" data-aos-duration="1500">
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://www.kadvacorp.com/wp-content/uploads/2021/08/Heres-Why-You-Should-Start-Wearing-A-Fashion-Watch.jpg"
                        alt=""
                    />
                </div>
                <div className="relative  flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-widest  text-gray-900 lg:text-4xl  uppercase">
                            a watch is the most important piece of jewelery you can wear
                        </h2>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SecondBanner;