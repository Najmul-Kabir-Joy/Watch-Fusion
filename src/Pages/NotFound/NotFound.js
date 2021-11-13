import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';
const NotFound = () => {
    return (
        <>
            <div className='pb-96 text-center flex flex-col justify-center items-center'>
                <img src={img} alt="" className='h-96 w-96' />
                <Link to='/' className='text-3xl border-b-2 border-t-2 border-green-400'>BACK TO HOME</Link>
            </div>
        </>
    );
};

export default NotFound;