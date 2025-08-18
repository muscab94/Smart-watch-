import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

function SmartWatch4() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/omm-coder/watches-api/watches"
      );
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = data.filter(
    (product) => product.category.toLowerCase() === "modern"
  );

  return (
    <div className="max-w-[90%] mx-auto my-32">
      <div className="mb-5 flex justify-between items-center">
        <div className="font-bold text-5xl">
          <h1 className="mb-2">Modern Watches</h1>
          <p className="fon-thin text-lg">
            Showing Modern {filteredProducts.length} result
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <Product key={product.watchId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SmartWatch4;
