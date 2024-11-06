import React from 'react';
import cardImg from '../../assets/banner.jpg'
import { NavLink } from 'react-router-dom';
const Card = ({product}) => {
    const {product_id, product_title, price, product_image} = product
    // console.log(product, product_id)
    return (
        <div>
          
            <div className='space-y-2 p-4 border rounded-2xl'>
                <img className='rounded-2xl w-full h-96' src={product_image} alt="" />
                <h3 className='font-semibold text-2xl'>{product_title}</h3>
                <p>Price: $ {price}</p>
                <NavLink to={`details/${product_id}`}>
                <button className='border-2 border-blue-400 py-1 px-6 rounded-full font-semibold mt-3'>Details</button> 
                </NavLink>
            </div>

        </div>
    );
};

export default Card;