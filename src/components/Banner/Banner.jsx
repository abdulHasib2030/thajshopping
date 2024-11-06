import { NavLink } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'
import { useContext } from 'react';


const Banner = () => {
   
    return (
        <div className="">
        <div className="md:h-[500px] h-[420px] bg-gradient-to-r from-teal-400 to-blue-500   rounded-bl-xl space-y-5 text-center rounded-br-xl text-white">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold w-[95%] pt-6 md:w-[80%] mx-auto ">Upgrade Your Tech Accessorize with THAJ Shopping Accessories</h1>
            <p className="w-[85%] md:w-[50%] mx-auto">Explore the latest gadgets that will take your experience to the next level.
                From smart devices to the coolest accessories, we have it all!

            </p>
            <button className="bg-white font-semibold py-3 px-5 text-blue-500 rounded-full"><NavLink to={'dashboard'}>Shop Now</NavLink></button>
        </div>

        <div className='md:top-[-180px] top-[-100px] relative  w-full'>
            <div className='mx-auto w-[70%] p-3  border-2 border-white   rounded-2xl '>
                <img src={bannerImg} className='rounded-2xl md:h-[450px]  w-full' alt="" />

            </div>
        </div>
        </div>
    );
};

export default Banner;