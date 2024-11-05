import { useContext, useEffect, useState } from 'react';
import deletebtn from '../../assets/delete.png'
import { IoClose } from "react-icons/io5";
import { productsContext } from '../Root/Root';
import purchase from '../../assets/Group.png'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const { cartItemCnt,handleDecendingSort, handleCartItemDelete, handlePurchase } = useContext(productsContext)
    let totalCost = 0;
    cartItemCnt.map(data =>
        totalCost += data.price
    )

    const [sortCart, setSortCart] = useState([])

    useEffect(()=>{
        setSortCart(cartItemCnt)
    }, [cartItemCnt])



    const handleSort = () =>{
        const newSort = [...sortCart].sort((a, b) => b.price - a.price)
       
        setSortCart(newSort)
        console.log(sortCart, newSort)
    }
   
   console.log(sortCart)

    return (
        <div className='md:container mx-auto w-[90%] '>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box space-y-4 text-center">
                    <img src={purchase}  className ="mx-auto" alt="" />
                    <h3 className="font-bold text-2xl">Payment Successfully</h3>
                    <div className='divider'></div>
                    <div>
                        <p>Thanks for purchasing</p>
                        <p>Total: {totalCost}</p>

                    </div>
                    <div onClick={handlePurchase} className="">
                        <form action="" method='dialog'>
                            {/* if there is a butt on in form, it will close the modal */}
                            <button  className="btn px-6 text-xl font-semibold text-center">Close</button>
                            </form>
                    </div>
                </div>
            </dialog>

            <div className='flex  justify-between items-center py-7'>
                <h3 className='font-bold text-xl'>Cart</h3>
                <div className='flex items-center '>
                    <h3 className='font-bold text-xl mr-5'>Total cost: {totalCost} </h3>
                    {
                        cartItemCnt.length > 0 ?
                            <button onClick={handleSort}
                                className='py-2 px-6 border-2 border-blue-500 font-semibold rounded-full mr-4'>Sort by price</button>
                            :
                            <button disabled="disabled"
                                className='py-2 px-6 border-2 btn font-semibold rounded-full mr-4'>Sort by price</button>

                    }
                    <button onClick={() => document.getElementById('my_modal_5').showModal()}
                     className='py-2 px-6 text-white border-none font-semibold rounded-full 
                    bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'>Purchase</button>


                </div>
            </div>

            {
                sortCart.map(data =>

                    <div className='border rounded-xl flex justify-between items-center py-4 px-4'>
                        <div className='flex gap-6 items-center'>
                            <img src={deletebtn} className='w-20 rounded-full' alt="" />
                            <div>
                                <h4 className='font-bold text-2xl mb-3'>{data.product_title}</h4>
                                <h4 className='text-black text-xl font-semibold'>Description: <span className='text-gray-500 text-sm'>{data.description} </span></h4>
                                <h4 className='font-semibold text-xl mt-2'>Price:$ {data.price}</h4>

                            </div>
                        </div>
                        <div className='items-center flex gap-4' >
                            <div onClick={() => handleCartItemDelete(data, "cart")} className='text-red-500 text-3xl p-1 ml-3 border-2 border-red-500 rounded-full'>
                                <IoClose />
                            </div>
                        </div>

                    </div>

                )
            }

        </div>
    );
};

export default Cart;