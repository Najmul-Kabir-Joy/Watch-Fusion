import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

export default Toast;