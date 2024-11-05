import { useLoaderData, useLocation } from "react-router-dom";
import detailsImg from '../../assets/banner.jpg'
import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { productsContext } from "../Root/Root";
import { Helmet } from "react-helmet-async";


const ProductDetails = () => {
    const pathLocation = useLocation()
    const product = (pathLocation.pathname.split('/'))
    const productID = (product[product.length - 1])
    
    const {allProducts, handleAddToCart, wishListItem, disableWish, setDisableWish} = useContext(productsContext)
    const loadData = useLoaderData()
    const [isActiveWish, setIsActiveWish] = useState(true)
    setDisableWish(true)
    const data = loadData.find(data => data.product_id === parseInt(productID))
    
 wishListItem.map(data => {
    if (data.product_id === parseInt(productID)){
        setDisableWish(false)
    }
 })
    
    const { description, product_title, availability, specification, rating, product_image, price } = data
    console.log(data)
    return (
       
        <div className="">
            <Helmet>
                <title> {product_title} </title>
            </Helmet>
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-center space-y-4 p-12 text-white pb-56">
                <h1 className="text-4xl font-bold">Product Details</h1>
                <p className="w-[80%] mx-auto">Explore the latest gadgets that will experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
                </p>

            </div>

            <div className="md:flex w-[70%] mx-auto h-full rounded-2xl p-6 bg-white relative top-[-180px]">
                <div className="md:w-[30%] ">
                    <img src={detailsImg} className="md:h-[350px] rounded-xl" alt="" />
                </div>

                <div className="ml-4 space-y-3">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <h5 className="text-xl font-semibold">Price:$ {price}</h5>
                    <h5 className={`border-2 w-24 ${availability ? 'border-green-600 bg-green-100 ' : 'border-red-600 bg-red-300'} font-semibold  py-1 px-4 rounded-full`}>{availability ? 'In Stock' : 'Out of Stock'}</h5>
                    <p>{description}</p>
                    <h4 className="text-xl font-bold">Specification</h4>
                    <ol className="list-decimal pl-5  text-gray-700">
                        {
                            specification.map((speci , idx)=> <li key={idx} className="ml-2">{speci}</li>)
                        }
                    </ol>
                    <h5 className="text-2xl font-bold">Rating</h5>
                    <div className="flex gap-4 items-center">
                        <ReactStars
                            count={5}
                            value={rating}
                            size={30}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p className="py-1 px-3 bg-gray-300 rounded-2xl">{rating}</p>
                    </div>
                    <div className="flex items-center  gap-6">
                        {
                            availability?
                        <button onClick={()=>handleAddToCart(data, "cart")}  
                        className="flex items-center rounded-full py-2 px-7 text-white bg-gradient-to-r
                         from-teal-400 to-blue-500 font-bold text-2xl bg- gap-3">Add To Cart <IoCartOutline />
                         </button>:
                          <button disabled='disabled'
                          className="flex items-center rounded-full py-2 px-7 btn border-2 
                            font-bold text-2xl bg- gap-3">Add To Cart <IoCartOutline />
                           </button>
                        }
{
    disableWish ? 
    <div onClick={() => handleAddToCart(data, "wishlist")}  className="border-2 p-2 cursor-pointer rounded-full text-2xl">
                            <FaRegHeart />

                        </div>:
                        <button className="btn" disabled="disabled"><FaRegHeart /></button>
                        

}
                        
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ProductDetails;