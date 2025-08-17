import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function MainHeader() {

  const products = useSelector(state => state.cart.products);
  return (
    <div className="w-full shadow-md">

      <div className="max-w-[90%] mx-auto flex justify-between items-center px-1 py-3">
      {/* Logo */}
      <div className="flex   items-center space-x-2">
        <span className="text-3xl">⌚</span>
        <h1 className="font-bold text-2xl">XTRA Watch</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/Collection"><li>Collections</li></NavLink>
        <NavLink to= "/Watches" ><li >Watches</li></NavLink>
        <NavLink to="/Quick"><li>Quick find</li></NavLink>
        <NavLink to= "/Pages"><li>Pages</li></NavLink>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-4 relative">
        <button className="border px-4 py-1 rounded-full hover:bg-gray-100">Contact Us</button>
        <div className="relative ">
          <FaShoppingCart size={32} />
          <Link className="w-6 h-6 bg-red-500  flex justify-center items-center
          text-white text-lg p-1 rounded-full absolute -top-3 -right-3"
          to="/cart">
            {products.length}
          </Link>
        </div>
      </div>
    </div>

    </div>

  );
}
