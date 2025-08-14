import { NavLink } from "react-router-dom";

export default function MainHeader() {
  return (
    <div className="flex justify-between items-center px-4 pt-3 pb-7 shadow-md">
      {/* Logo */}
      <div className="flex   items-center space-x-2 pt-1">
        <span> <img className="w-40" src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/logo-watch-shop.png" alt="" /> </span>
        
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/Collection"><li>Collections</li></NavLink>
        <NavLink to= "/Watches" ><li >Watches</li></NavLink>
        <NavLink to="/Quick"><li>Quick find</li></NavLink>
        <NavLink to= "/Pages"><li>Pages</li></NavLink>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-7">
        <button className="border text-white bg-black  px-8 py-3 rounded-full hover:bg-blue">Contact Us</button>
        <div className="relative">
          <span className="text-2xl mr-10 py-2 px-2 rounded-full border-2 border-gray-100 bg-white">🛒</span>
          <span className="absolute top-6 right-9 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
        </div>
      </div>
    </div>

  );
}
