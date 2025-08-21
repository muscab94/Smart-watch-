
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

function SmartWatch2() {
  const [data, setData] = useState([]);

  // API call
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

  // Filter: only custom watches
  const filteredProducts = data.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase().includes("uncategorized")
  );

  return (
    <div className="max-w-[90%] mx-auto my-32">
      <div className="mb-5 flex justify-between items-center">
        <div className="font-bold text-5xl">
          <h1 className="mb-2">Custom Watches</h1>
          <p className="font-thin text-lg">
            Showing Custom {filteredProducts.length} result
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.watchId} product={product} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500 text-lg">
            No custom watches found.
          </p>
        )}
      </div>
    </div>
  );
}

export default SmartWatch2;


