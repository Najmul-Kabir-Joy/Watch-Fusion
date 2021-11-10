import React from 'react';
import Slider from 'react-slick';
import ReviewGenerator from '../ReviewGenerator/ReviewGenerator';

const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        caseEase: "linear",
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='container mx-auto'>
            <div className='my-5 pb-5 text-center'>
                <h1 className='text-5xl border-b-4 transition duration-1000 hover:border-indigo-400 inline'>TESTIMONIALS</h1>
            </div>
            <Slider {...settings}>
                <div className='lg:px-10 px-0 shadow-2xl py-2'>
                    <ReviewGenerator />
                </div>
                <div className='lg:px-10 px-0'>
                    <ReviewGenerator />
                </div>
                <div className='lg:px-10 px-0'>
                    <ReviewGenerator />
                </div>
                <div className='lg:px-10 px-0'>
                    <ReviewGenerator />
                </div>



            </Slider>
        </div>

    );
};

export default Reviews;