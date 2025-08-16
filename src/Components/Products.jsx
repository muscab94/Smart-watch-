import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

function Products() {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState('');

    const fetchData = async () => {
        axios.get("https://my-json-server.typicode.com/omm-coder/watches-api/watches")
        .then(res => {
            console.log(res.data)
            setData(res.data);
        })
        
    }
    useEffect(() => {
        fetchData();
    }, [])
    const filteredProducts = data.filter(product => {
        const products = selected ? product.category === selected : true;
        return products;
    })
  return (
    <div className='max-w-[90%] mx-auto my-32'>
        <div className='mb-5 flex justify-between items-center'>
            <div className='font-bold text-5xl'>
                <h1 className='mb-2'>Shop</h1>
                <p className='fon-thin text-lg'>
                    showing {selected == '' ? "All": selected}  
                    {filteredProducts.length} result
                </p>
            </div>
            <div className=''>
                <select className='px-6 py-2 rounded-3xl border-2 border-black'
                value={selected} onChange={(e) => setSelected(e.target.value)}>
                    <option value="">All</option>
                    <option value="sports">Sports</option>
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                    <option value="custom">Custom</option>
                    <option value="Best Sellers">Best Sellers</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-5'>
        {
            filteredProducts.map(product => (
                <Product key={product.watchId} product={product}/>
            ))
        }
    </div>
    </div>
  )
}

export default Products