import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status} = useRouteError();
    console.log(error.message,status)
    return (
        <div className='flex justify-center h-[80vh] items-center'>
            <div className='flex flex-col gap-3 items-center'>
                <img className='' src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
                <h1 className='text-5xl'>{status}</h1>
                <h1 className='text-center'>{error.message}</h1>
                <div className=''>
                    <Link to='/'>
                        <button className='px-2 py-1 border rounded-lg bg-indigo-600 text-white'>Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;