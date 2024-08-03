import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast({ type = 'info', message = '' }) {

    useEffect(() => {
        if (message) {
            toast[type](message);
        }

    }, [type, message])

    return (
        <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="persian iran-sans" 
           
        />
    )
}