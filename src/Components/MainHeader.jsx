import { NavLink } from "react-router-dom";

export default function MainHeader() {
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
      <div className="flex items-center space-x-4">
        <button className="border px-4 py-1 rounded-full hover:bg-gray-100">Contact Us</button>
        <div className="relative">
          <span className="text-2xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
        </div>
      </div>
    </div>

    </div>

  );
}
