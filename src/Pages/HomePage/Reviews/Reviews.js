import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ReviewGenerator from '../ReviewGenerator/ReviewGenerator';

const Reviews = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://protected-mesa-80070.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    var settings = {
        dots: false,
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
                    dots: false
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
        <div className='container mx-auto mb-8 px-5'>
            <div className='my-5 pb-5 text-center'>
                <h1 className='text-4xl border-b-4 transition duration-1000 hover:border-indigo-400 inline'>TESTIMONIALS</h1>
            </div>
            <Slider {...settings}>
                {
                    items.map(item => <ReviewGenerator key={item._id} item={item} />)
                }




            </Slider>
        </div>

    );
};

export default Reviews;