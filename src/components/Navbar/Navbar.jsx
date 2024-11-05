import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { productsContext } from '../Root/Root';
import logo from '../../assets/thj_school.png'

const Navbar = () => {
    const [navBgActive, setNavBgActive] = useState(false)
   const {cartItemCnt, wishListItem, handleCartShow, showCartWishList} = useContext(productsContext)
    console.log(cartItemCnt)

    const handleNavBgActive = (active) => {
        setNavBgActive(active)
    }

    const links = <>
        <li onClick={() => handleNavBgActive(true)}><NavLink to={'/'}>Home</NavLink></li>
        <li onClick={() => handleNavBgActive(false)}><NavLink to={'statistics'}>Statistics</NavLink></li>
        <li onClick={() => handleNavBgActive(false)}><NavLink to={'dashboard'}>Dashboard</NavLink></li>
    </>
    const parms = useLocation()
    console.log(parms.pathname.length)

    const navigate = useNavigate()
    const navigateDashCart = (type) =>{
        handleCartShow(type)
        navigate('/dashboard')

    }


    return (
        <div className={`md:container mx-auto w-[90%] 
        ${parms.pathname.length > 1 ? 'pt-6 text-black ' : 'bg-gradient-to-r from-teal-400 mt-6 to-blue-500 text-white'}
   rounded-tr-xl rounded-tl-xl`}>
            <div className="  p-4 flex justify-between">
                <div className=" flex">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-xl text-xl font-bold dropdown-content 
                ${parms.pathname.length > 1 ? 'bg-white text-black' : 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'}

                            rounded-box  z-[1] mt-3 w-52 p-2 shadow`}>
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className={`${parms.pathname.length > 1 ? 'text-black': 'text-white'} text-3xl  font-bold `}>
                        <Link to={'/'} className='flex'> <img src={logo} className='md:w-28 w-20 mr-2' alt="" /> THAJ Shopping</Link>
                        </div>
                </div>

                <div className=" hidden lg:flex">
                    <ul className="menu text-xl font-semibold menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="gap-2 flex justify-center items-center">

                    <div onClick={()=>navigateDashCart('cart')} className="border-2 p-3 rounded-full text-2xl relative "><IoCartOutline /> {
                        cartItemCnt.length > 0 ?  <span className='absolute text-[16px] top-[-18px] text-black border-2 right-[-8px] bg-white rounded-full 
                        px-3'>{cartItemCnt.length}</span>: <span></span>
                    }
                    
                     </div>

                    <div onClick={()=> navigateDashCart('wishlist')} className="border-2 p-3 relative  rounded-full text-2xl"><FaRegHeart />
                    {
                        wishListItem.length > 0 ?  <span className='absolute top-[-18px] text-[16px] text-black right-[-8px] bg-white border-2 rounded-full 
                        px-3'>{wishListItem.length}</span>: <span></span>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;