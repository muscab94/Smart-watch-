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
    <div className="max-w-[90%] grid grid-cols-4 gap-5 mx-auto">
      {categoriesProduct.map((product) => (
        <Product key={product.watchId} product={product} />
      ))}
    </div>
  );
}

export default SectionFour2;
