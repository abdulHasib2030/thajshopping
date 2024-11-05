import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { productsContext } from "../Root/Root";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const {handleCartShow, showCartWishList} = useContext(productsContext)
    
    return (
        <div>
            <Helmet>
                <title>THAJ Shopping | Dashboard</title>
            </Helmet>
           <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-center space-y-4 p-12 text-white">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="w-[80%] mx-auto">Explore the latest gadgets that will experience to 
                the next level. From smart devices to the coolest
                accessories, we have it all!
            </p>
            <button onClick={()=>handleCartShow("cart")} className={`py-1 px-10 border
            ${showCartWishList[0] ? 'bg-white border-none text-black': 'border-white'}
              font-bold mr-4 rounded-full`}>Cart</button>
            <button onClick={()=>handleCartShow("wishlist")} className={`py-1 px-10 
            ${showCartWishList[1] ? 'bg-white border-none text-black ': 'border-white'}
            font-bold border rounded-full`}>Wishlist</button>

           </div>

           <div>
            {
                showCartWishList[0]? 
            <Cart></Cart>: <WishList></WishList>

            }
           </div>
        </div>
    );
};

export default Dashboard;