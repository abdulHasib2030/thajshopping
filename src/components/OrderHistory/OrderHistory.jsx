import React, { useContext } from 'react';
import orderHistoryImg from '../../assets/order-history.png';
import { productsContext } from '../Root/Root';
import { json } from 'react-router-dom';
const OrderHistory = () => {
    const { orderHistory, orderTime } = useContext(productsContext)

    return (
        <div className='mt-9 md:container mx-auto w-[90%]'>

            {
                orderHistory.length > 0 ?
                    <div>
                        {
                            orderHistory.map((data, idx) =>
                                <>
                                    {
                                        data.length > 1 ? <>
                                            <h1 className='py-2 px-7 text-white bg-gradient-to-r
                         from-teal-400 to-blue-500 font-bold text-2xl mt-5'>Order Place Date & Time:{orderTime[idx][0].orderId}</h1>
                                            {
                                                data.map(data2 =>
                                                    <>
                                                        <div className='border rounded-xl flex justify-between items-center py-4 px-4'>
                                                            <div className='flex gap-6 items-center'>
                                                                <img src={data2.product_image} className='w-20 ' alt="" />
                                                                <div>
                                                                    <h4 className='font-bold text-2xl mb-3'>{data2.product_title}</h4>
                                                                    <h4 className='text-black text-xl font-semibold'>Description: <span className='text-gray-500 text-sm'>{data2.description} </span></h4>
                                                                    <h4 className='font-semibold text-xl mt-2'>Price:$ {data2.price}</h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </> : <>
                                            <h1 className='py-2 px-7 mt-5 text-white bg-gradient-to-r
                         from-teal-400 to-blue-500 font-bold text-2xl'>Order Place Date & Time:{orderTime[idx][0].orderId}</h1>
                                            <div className='border rounded-xl flex justify-between items-center py-4 px-4'>
                                                <div className='flex gap-6 items-center'>
                                                    <img src={data[idx].product_image} className='w-20 ' alt="" />
                                                    <div>
                                                        <h4 className='font-bold text-2xl mb-3'>{data[idx].product_title}</h4>
                                                        <h4 className='text-black text-xl font-semibold'>Description: <span className='text-gray-500 text-sm'>{data[idx].description} </span></h4>
                                                        <h4 className='font-semibold text-xl mt-2'>Price:$ {data[idx].price}</h4>

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </>
                            )
                        }
                    </div>
                    :
                    <div className='text-center space-y-3'>
                        <img src={orderHistoryImg} className='w-[20%] mx-auto' alt="" />
                        <p className="text-gray-600">Your order history is empty. Explore our products and place your first order
                            today!.</p>

                    </div>
            }


        </div>
    );
};

export default OrderHistory;