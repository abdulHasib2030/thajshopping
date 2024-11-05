import { act, useContext, useEffect, useState } from 'react';
import Card from '../Card/Card'
import { useLoaderData } from 'react-router-dom';
import { productsContext } from '../Root/Root';

const Main = () => {
    const {allProducts} = useContext(productsContext)
    const [categoryActive, setcatgoryActive] = useState([true])
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        setProducts(allProducts)
    }, [allProducts])
    console.log(allProducts)
    
    const categories = ["All Products","Phones", "MacBooks", "Laptops", "iPhones",  "Accessories", "Smart Watches"];
    let active = [false, false, false, false, false, false, false]
   

    const handleSortingCategory = (category, idx) => {
        active[idx] = true;
        setcatgoryActive(active)
        if (category === 'All Products') {
            // console.log(allProducts.length)
            setProducts(allProducts)
        }
        else {
            const categorySortProducts = allProducts.filter(cat => cat.category === category)
            // console.log(categorySortProducts)
            // console.log()
            setProducts(categorySortProducts)
        }
    }



    const links = <>

        {
            categories.map((category, idx) =>

                <li key={idx} onClick={() => handleSortingCategory(category, idx)} className={`rounded-full 
      ${categoryActive[idx] ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white' : 'bg-slate-200  text-black'}
        py-1 px-3  font-semibold`}>{category}</li>

            )
        }
    </>
    return (
        <div className=''>
            <h1 className='text-center text-2xl font-bold md:mb-10 mb-20'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex relative'>
                <div className="w-[45%] hidden lg:block">
                    <div className='border-2 p-4  mr-5 rounded-2xl'>
                        <ul className='space-y-3 '>
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                <div className=' lg:hidden border-red-500'>
                    <details className="dropdown absolute top-[-60px] ">
                        <summary className="bg-gradient-to-r from-teal-400 to-blue-500 mr-4 btn text-white text-xl ">Category</summary>
                        <ul className='space-y-3 bg-white border-2 p-4 rounded-2xl cursor-pointer w-52 absolute  top-[55px]'>
                            {
                                links
                            }
                        </ul>

                    </details>
                </div>


                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* {
                    products.map(prodcut => )
                 } */}

                    {
                        products.map(product =>
                            <Card key={product.product_id} product={product}/>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Main;