import { useState } from "react";
import { NavLink } from "react-router-dom";

function Quick({ show }) {
  return <div className={`absolute left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ease-in-out ${ show ? "opacity-100 visible" : "opacity-0 invisible" }`} >
      <div className="flex bg-black text-white w-[400px] h-80 gap-28 mt-5 ml-4 px-8 rounded-xl">
        <div>
          <h1 className="font-bold text-xl py-5">Categories</h1>
          <ul className="leading-9 text-[1.1em] opacity-85">
            <NavLink to= "/Sports" ><li>Sports</li></NavLink>
            <NavLink to="/Bestsellers"><li>Bestsellers</li></NavLink>
            <NavLink to= "/Modern"><li>Modern</li></NavLink>
            <NavLink to= "/Classic"><li>Classic</li></NavLink>
            <NavLink to= "/Custom"><li>Custom</li></NavLink>
            <NavLink to= "/More"><li>More</li></NavLink>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl py-5">Tags</h1>
          <ul className="leading-9 text-[1.1em] opacity-85">
            <NavLink to= "/Gold"><li>Gold</li></NavLink>
            <NavLink to= "/Black"><li>Black</li></NavLink>
            <NavLink to= "/Men"><li>Men</li></NavLink>
             <NavLink to= "/Red"><li>Red</li></NavLink>
            <NavLink to= "/Green"><li>Green</li></NavLink>
            <NavLink to= "/Navy"><li>Navy</li></NavLink>
          </ul>
        </div>
      </div>
    </div>
}

export default Quick;
