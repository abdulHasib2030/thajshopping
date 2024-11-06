import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const productsContext = createContext()

const Root = () => {
    const navigate = useNavigate()
    const [allProducts, setAllProducts] = useState([])
    const [cartItemCnt, setCartItemCnt] = useState([]);
    const [wishListItem, setWishLishItem] = useState([])
    const [disableWish, setDisableWish] = useState(true)
    const [orderHistory, setOrderHistory] = useState([])
    const [orderTime, setOrderTime] = useState([])
    let orderId = 1;
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const handleAddToCart = (cartItem, type) =>{
        // console.log("Cart item added", cartItem)
        if(type === 'wishlist'){
            let flag = true
            if (wishListItem){
                console.log(typeof wishListItem)
                for (const i in wishListItem){
                    console.log(wishListItem[i].product_id, cartItem.product_id)
                if(wishListItem[i].product_id === cartItem.product_id){
                    console.log("Hmlafdkjasdljfk")
                    toast.error("Alread added WishList.",{
                        position:'top-center',
                        closeOnClick:false,
                    })
                    flag = false;
                    break
                }
                }
            }
            if (flag === true){
                const newWishItem = [...wishListItem, cartItem]
                setWishLishItem(newWishItem)
                setDisableWish(false)
                toast.success("Added to the WishList.",
                    {
                        position:'top-center',
                        closeOnClick:false,
                    }
                )
            }
        }
        else if(type === 'cart'){
            const newItem = [...cartItemCnt, cartItem]

            toast.success("Added to cart successfully!", {
                position:'top-center',
            })
            setCartItemCnt(newItem)

        }
    }

    const handleCartItemDelete = (data, type) => {
        if (type === 'cart'){
            const newCart = cartItemCnt.filter(data2 => data2 !== data)
            setCartItemCnt(newCart)  
            toast.error('Remove Cart Item', {
                position:'top-center'
            })
        }
        else{
            const newWish = wishListItem.filter(data2 => data2 !== data)
          setWishLishItem(newWish)
          toast.error("Remove Wishlist Item", {
            position:'top-center'
          })
        }
    }

    const handlePurchase = () =>{
        const currentDate = new Date()
        const dateTime = (currentDate.toLocaleString().slice(0, 19).replace('T', " "))
        const orderIdTime =[{orderId:dateTime}]
        // console.log(orderIdTime, orderId)
        setOrderTime((fixed)=> [...fixed, orderIdTime])
        orderId += 1
        
        setOrderHistory((newOrderHistory) => [...newOrderHistory, cartItemCnt]);
        
        setCartItemCnt([])
        // // navigate('/')
        navigate('/')
    }
   


    const [showCartWishList, setShowCartWishList] = useState([true, false])
    const handleCartShow = (type) => {
         if (type === 'cart'){
            const newArr = [true, false]
            setShowCartWishList(newArr)
         }
         else{
            const newArr = [false, true]
            setShowCartWishList(newArr)
         }
    }

    const handleDecendingSort = () => {
        const newSortCart = cartItemCnt.sort((a, b) => b.price - a.price)
       
        setCartItemCnt(newSortCart)
    }


    return (
        <div className='relative bg-[#F7F7F7]'>
            <productsContext.Provider value={{allProducts, handleAddToCart, cartItemCnt,handleDecendingSort, wishListItem, handleCartItemDelete,
                handlePurchase, handleCartShow, showCartWishList, disableWish, setDisableWish,
                orderHistory, setOrderHistory, orderTime,
            }}>
                <Navbar ></Navbar>
                <Outlet></Outlet>
                <ToastContainer/>
                <Footer></Footer>
            </productsContext.Provider>

        </div>
    );
};

export default Root;