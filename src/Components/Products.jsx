import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

function Products() {
    const [data, setData] = useState([]);

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
  return (
    <div className='max-w-[90%] mx-auto grid grid-cols-4 gap-5'>
        {
            data.map(product => (
                <Product key={product.watchId} product={product}/>
            ))
        }
    </div>
  )
}

export default Products