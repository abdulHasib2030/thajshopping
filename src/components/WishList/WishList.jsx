import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { productsContext } from "../Root/Root";


const WishList = () => {
    const {wishListItem, handleCartItemDelete} = useContext(productsContext)

    return (
        <div className='md:container mx-auto w-[90%] '>

            <div className='flex  justify-between items-center py-7'>
                <h3 className='font-bold text-xl'>WishList</h3>
               
            </div>

            {
                wishListItem.map(data => 
                    <div className='border rounded-xl flex justify-between items-center py-4 px-4'>
                    <div className='flex gap-6 items-center'>
                        <img src="" className='w-20 rounded-full' alt="" />
                        <div>
                            <h4 className='font-bold text-2xl mb-3'>{data.product_title}</h4>
                            <h4 className='text-black text-xl font-semibold'>Description: <span className='text-gray-500 text-sm'>{data.description} </span></h4>
                            <h4 className='font-semibold text-xl mt-2'>Price:$ {data.price}</h4>

                        </div>
                    </div>
                    <div className='items-center flex gap-4' >
                        <div onClick={()=> handleCartItemDelete(data, 'wishlist')}  className='text-red-500 text-3xl p-1 ml-3 border-2 border-red-500 rounded-full'>
                            <IoClose />
                        </div>
                    </div>

                </div>

                )
            }

           
        </div>
    );
};

export default WishList;