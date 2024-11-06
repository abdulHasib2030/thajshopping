import React from 'react';
import { Helmet } from 'react-helmet-async';
import statisticsImg from '../../assets/description.png'

const Statistics = () => {
    return (
        <div className='md:container mx-auto w-[90%] my-20'>
            <Helmet>
                <title>THAJ Shopping | Statistics</title>
            </Helmet>
            <div className='text-center space-y-3'>
                        <img src={statisticsImg} className='w-[20%] mx-auto' alt="" />
                        <p className="text-gray-600 text-2xl">Under Construction</p>

                    </div>
            
        </div>
    );
};

export default Statistics;
