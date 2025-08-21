import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Collection from "../Page/Collection";
import Quick from "../Page/Quick";
import Pages from "../Page/pages";

export default function MainHeader() {
  const products = useSelector((state) => state.cart.products);

  const [col, setCol] = useState(false);

  const [showQuick, setShowQuick]= useState(false)

  const [showPages, setShowPages] = useState(false);

  return (
    <div className="w-full shadow-md relative">
      <div className="max-w-[90%] mx-auto flex justify-between items-center px-1 py-3">
        {/* Logo */}
        <div className="flex text-[10px] space-x-2">
          <img
            className="w-[60%] -ml-8"
            src="http://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/logo-watch-shop.png"
            alt=""
          />
        </div>

        {/* Menu */}
        <ul className="hidden text-[17px] md:flex space-x-6 -ml-[30px] text-gray-700 font-medium relative">
          <NavLink to="/"><li>Home</li></NavLink>
          <li className="relative cursor-pointer text-gray-400 hover:text-black" onMouseEnter={() => setCol(true)} onMouseLeave={() => setCol(false)}> Collections <i className="fa-solid fa-angle-down pl-2"></i> <Collection show={col} /> </li>
          <NavLink to="/Watches"><li className="text-gray-400 hover:text-black">Watches</li></NavLink>
          <li className="relative cursor-pointer text-gray-400 hover:text-black" onMouseEnter={() => setShowQuick(true)}  onMouseLeave={() => setShowQuick(false)}>Quick find <i className="fa-solid fa-angle-down"></i>  <Quick show={showQuick} /></li> 
          <li className="relative cursor-pointer text-gray-400 hover:text-black" onMouseEnter={() => setShowPages(true)} onMouseLeave={() => setShowPages(false)}> Pages <i className="fa-solid fa-angle-down"></i> <Pages show={showPages} /></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4 relative">
          <button className="border px-4 py-1 rounded-full hover:bg-gray-100">
            Contact Us
          </button>
          <div className="relative">
            <FaShoppingCart size={32} />
            <Link
              className="w-6 h-6 bg-red-500 flex justify-center items-center text-white text-lg p-1 rounded-full absolute -top-3 -right-3"
              to="/cart"
            >
              {products.length}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
