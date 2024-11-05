import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16 bg-white py-24'>
            <footer className='md:container mx-auto w-[90%] space-y-4'>
                <div className='text-center'>
                    <h1 className='font-bold text-4xl mb-4'>THAJ Shopping</h1>
                    <p>Leading the way in cutting-edge technology and innovation</p>
                </div>
                <div className='divider'></div>
                <div  className='flex gap-4 justify-evenly items-center'>
                    <div className='text-center'>
                        <h3 className='font-bold text-xl mb-6'>Services</h3>
                        <ul>
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returs</li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h3 className='font-bold text-xl mb-6'>Services</h3>
                        <ul>
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returs</li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h3 className='font-bold text-xl mb-6'>Services</h3>
                        <ul>
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returs</li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;