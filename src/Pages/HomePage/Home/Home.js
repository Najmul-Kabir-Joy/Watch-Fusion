import React from 'react';
import TopNavigation from '../../../Shared/Navigation/TopNavigation/TopNavigation';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <TopNavigation />
            <div className='container mx-auto'>
                <TopBanner />
            </div>
        </>
    );
};

export default Home;