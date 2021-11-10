import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import TopNavigation from '../../../Shared/Navigation/TopNavigation/TopNavigation';
import Featured from '../Featured/Featured';
import Reviews from '../Reviews/Reviews';
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <>
            <TopNavigation />
            <div>
                <TopBanner />
                <Featured />
                <TrendingProducts />
                <WhyUs />
                <SecondBanner />
                <Reviews />
                <Footer />
            </div>
        </>
    );
};

export default Home;