import React from 'react';
import TopNavigation from '../../../Shared/Navigation/TopNavigation/TopNavigation';
import Featured from '../Featured/Featured';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <TopNavigation />
            <div>
                <TopBanner />
                <Featured />
            </div>
        </>
    );
};

export default Home;