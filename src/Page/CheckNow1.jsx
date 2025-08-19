import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

function CheckNow1() {
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

  // filter classic watches
  const filteredProducts = data.filter(
    (product) => product.category.toLowerCase() === "classic"
  );

  return (
    <div className="max-w-[90%] mx-auto my-32">
      <div className="mb-5 flex justify-between items-center">
        <div className="font-bold text-5xl">
          <h1 className="mb-2">Classic Watches</h1>
          <p className="font-thin text-lg">
            Showing {filteredProducts.length} Classic result
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

export default CheckNow1;
