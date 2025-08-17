import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

function SectionFour2() {
  const [data, setData] = useState([]);
  const categories = ["sports", "classic", "Best Sellers", "modern"];
  let categoriesProduct = [];

  const fetchData = async () => {
    axios
      .get("https://my-json-server.typicode.com/omm-coder/watches-api/watches")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  categories.forEach((cat) => {
    const product = data.find((prod) => prod.category === cat);
    if (product) categoriesProduct.push(product);
  });

  return (
    <div className="bg-gray-50 pb-10 ">
      
      <div className="relative pt-20">
            <div className="bg-gray-200 w-[550px] h-5 ml-[370px] rounded-full"></div>
            <h1 className="font-extrabold absolute top-8 left-[395px] text-[3em] text-center"><span className="text-blue">Pear-Watch</span> Products</h1>
            </div>

            <p className="text-center pt-10 pb-5 text-[1.2em] text-gray-600">A smartwatch is a wearable computer in the form of a watch; modern smartwatches <br /> provide a local touchscreen interface for daily use.</p>
    
    <div className="max-w-[90%] grid grid-cols-4 gap-5 mx-auto">
      
      {categoriesProduct.map((product) => (
        <Product key={product.watchId} product={product} />
      ))}
    </div>
    </div>
  );
}

export default SectionFour2;
